# UPage - 1Panel 应用商店

基于大模型的可视化网页构建平台，支持智谱 Coding Plan。

## 安装方式一：本地应用（推荐）

1. 将 `upage` 目录上传到 1Panel 服务器的 `/opt/1panel/resource/apps/local/` 目录下
   ```bash
   cd /opt/1panel/resource/apps/local/
   git clone https://github.com/Corps-Cy/upage.git /tmp/upage-repo
   cp -r /tmp/upage-repo/1panel-appstore/upage ./upage
   rm -rf /tmp/upage-repo
   ```
2. 在 1Panel 应用商店中点击 **同步本地应用**
3. 选择 **本地应用** 分类，找到 UPage，点击安装

## 安装方式二：第三方应用仓库

> 注意：此方式需要先发布 GitHub Release，确保 `.tar.gz` 包可用。

1. 在 1Panel 应用商店 → **第三方应用** → 添加应用仓库
2. 仓库地址：`https://github.com/Corps-Cy/upage`
3. 分支：`main`，目录：`1panel-appstore`
4. 保存后在应用列表中找到 UPage，点击安装

## 智谱 Coding Plan 配置

1. 访问 [智谱开放平台](https://open.bigmodel.cn) 购买 Coding Plan 套餐
2. 获取 API Key
3. 安装时选择 **智谱 Coding Plan** 提供商，填入 API Key
4. 默认模型推荐 `glm-5.1`，辅助模型推荐 `glm-4.5-air`

## 环境变量

| 变量 | 说明 | 必填 | 默认值 |
|------|------|------|--------|
| `PANEL_APP_PORT_HTTP` | HTTP 端口 | 是 | `3000` |
| `LLM_PROVIDER` | LLM 提供商 | 是 | `ZhiPuCodingPlan` |
| `PROVIDER_API_KEY` | API 密钥 | 是 | - |
| `PROVIDER_BASE_URL` | API 地址（仅 OpenAI/Ollama/LMStudio） | 否 | - |
| `LLM_DEFAULT_MODEL` | 默认模型 | 是 | `glm-5.1` |
| `LLM_MINOR_MODEL` | 辅助模型 | 否 | `glm-4.5-air` |

## 数据持久化

| 路径 | 说明 |
|------|------|
| `./data/data` | SQLite 数据库 |
| `./data/logs` | 应用日志 |
| `./data/storage` | 用户上传文件 |
