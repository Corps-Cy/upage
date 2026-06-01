# UPage - 1Panel 应用商店

基于大模型的可视化网页构建平台，支持智谱 Coding Plan。

## 安装

在 1Panel 管理面板中，进入 **应用商店** → **第三方应用** → 添加以下仓库地址：

```
https://github.com/Corps-Cy/upage
```

分支：`main`，目录：`1panel-appstore`

添加后在应用列表中找到 UPage，点击安装即可。

## 环境变量

| 变量 | 说明 | 必填 | 默认值 |
|------|------|------|--------|
| `LLM_PROVIDER` | LLM 提供商 | 是 | `ZhiPuCodingPlan` |
| `PROVIDER_API_KEY` | API 密钥 | 是 | - |
| `PROVIDER_BASE_URL` | API 地址（可选） | 否 | - |
| `LLM_DEFAULT_MODEL` | 默认模型 | 是 | `glm-5.1` |
| `LLM_MINOR_MODEL` | 辅助模型 | 否 | `glm-4.5-air` |
| `MAX_UPLOAD_SIZE_MB` | 上传限制 (MB) | 否 | `5` |

## 智谱 Coding Plan 配置

1. 访问 [智谱开放平台 Coding Plan](https://open.bigmodel.cn) 购买套餐
2. 获取 API Key
3. 安装时选择 **智谱 Coding Plan** 提供商，填入 API Key
4. 默认模型推荐 `glm-5.1`，辅助模型推荐 `glm-4.5-air`

## 数据持久化

| 路径 | 说明 |
|------|------|
| `./data/data` | SQLite 数据库 |
| `./data/logs` | 应用日志 |
| `./data/storage` | 用户上传文件 |
