# UPage - 1Panel 应用商店

基于大模型的可视化网页构建平台。

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

## 环境变量

| 变量 | 说明 | 必填 | 默认值 |
|------|------|------|--------|
| `PANEL_APP_PORT_HTTP` | HTTP 端口 | 是 | `3000` |
| `LLM_PROVIDER` | LLM 提供商 | 是 | `OpenAI` |
| `PROVIDER_API_KEY` | API 密钥 | 是 | - |
| `PROVIDER_BASE_URL` | API 地址（部分提供商需要） | 否 | - |
| `LLM_DEFAULT_MODEL` | 默认模型 | 是 | - |
| `LLM_MINOR_MODEL` | 辅助模型 | 是 | - |
| `LLM_VISION_PROVIDER` | 视觉模型提供商 | 否 | - |
| `LLM_VISION_MODEL` | 视觉模型 | 否 | - |
| `VISION_PROVIDER_BASE_URL` | 视觉 API 地址 | 否 | - |
| `VISION_PROVIDER_API_KEY` | 视觉 API 密钥 | 否 | - |
| `SERPER_API_KEY` | Serper 搜索 API 密钥 | 否 | - |
| `WEATHER_API_KEY` | 天气 API 密钥 | 否 | - |
| `MAX_UPLOAD_SIZE_MB` | 最大上传大小 (MB) | 否 | `5` |

## 数据持久化

| 路径 | 说明 |
|------|------|
| `./data` | SQLite 数据库 |
| `./logs` | 应用日志 |
| `./storage` | 用户上传文件 |
