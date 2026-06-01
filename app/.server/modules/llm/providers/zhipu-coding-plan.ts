import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import type { LanguageModel } from 'ai';
import { BaseProvider } from '~/.server/modules/llm/base-provider';
import { createVisionCapabilities } from '~/.server/modules/llm/capabilities';
import type { ModelInfo } from '~/.server/modules/llm/types';
import type { IProviderSetting } from '~/types/model';

const ZHIPU_CODING_PLAN_BASE_URL = 'https://open.bigmodel.cn/api/coding/paas/v4';

export default class ZhiPuCodingPlanProvider extends BaseProvider {
  name = 'ZhiPuCodingPlan';
  getApiKeyLink = 'https://bigmodel.cn/usercenter/proj-mgmt/apikeys';
  labelForGetApiKey = '智谱 Coding Plan API Key';
  resolveModelCapabilities = () => createVisionCapabilities('declared');

  staticModels: ModelInfo[] = [
    {
      name: 'glm-5.1',
      label: 'GLM-5.1 (Coding Plan)',
      provider: this.name,
      maxTokenAllowed: 16384,
    },
    {
      name: 'glm-5-turbo',
      label: 'GLM-5-Turbo (Coding Plan)',
      provider: this.name,
      maxTokenAllowed: 16384,
    },
    {
      name: 'glm-4.7',
      label: 'GLM-4.7 (Coding Plan)',
      provider: this.name,
      maxTokenAllowed: 16384,
    },
    {
      name: 'glm-4.5-air',
      label: 'GLM-4.5-Air (Coding Plan)',
      provider: this.name,
      maxTokenAllowed: 16384,
    },
  ];

  async getDynamicModels(settings?: IProviderSetting): Promise<ModelInfo[]> {
    const { baseUrl: fetchBaseUrl, apiKey } = this.getProviderBaseUrlAndKey(settings);
    const baseUrl = fetchBaseUrl || ZHIPU_CODING_PLAN_BASE_URL;

    if (!apiKey) {
      throw `Missing Api Key configuration for ${this.name} provider`;
    }

    const response = await fetch(`${baseUrl}/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const res = (await response.json()) as any;

    const data = res.data.filter((model: any) => model.object === 'model' && model.supports_chat);

    return data.map((m: any) => ({
      name: m.id,
      label: `${m.id} (Coding Plan) - context ${m.context_length ? Math.floor(m.context_length / 1000) + 'k' : 'N/A'}`,
      provider: this.name,
      maxTokenAllowed: m.context_length || 16384,
    }));
  }

  getModelInstance(options: { model: string; providerSettings?: Record<string, IProviderSetting> }): LanguageModel {
    const { model, providerSettings } = options;

    const { baseUrl, apiKey } = this.getProviderBaseUrlAndKey(providerSettings?.[this.name]);

    if (!apiKey) {
      throw `Missing Api Key configuration for ${this.name} provider`;
    }

    const openai = createOpenAICompatible({
      name: this.name,
      baseURL: baseUrl || ZHIPU_CODING_PLAN_BASE_URL,
      apiKey,
    });

    return openai(model);
  }
}
