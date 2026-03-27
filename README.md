# 周易64卦解读网站

一个基于React和TypeScript开发的周易64卦解读网站，展示每卦所代表的情景、含义及现代应用。

## 功能特性

- 完整展示周易64卦及其详细解读
- 卦象可视化展示（六爻表示）
- 支持搜索功能，可按卦名、拼音或描述搜索
- 明暗主题切换
- 响应式设计，支持移动端和桌面端
- 现代情景应用解析，将古老智慧与现代生活结合

## 技术栈

- React 18+
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (动画效果)
- Font Awesome (图标)

## 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建项目

```bash
pnpm build
```

## 部署到Cloudflare Pages

Cloudflare Pages是一个简单、高效的静态网站托管服务，非常适合部署此项目。

### 前提条件

- 已安装Git
- 已创建Cloudflare账号
- 已将项目代码上传到GitHub/GitLab/Bitbucket等代码托管平台

### 部署步骤

1. 登录您的Cloudflare账号，导航到[Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. 点击"创建项目"按钮
3. 选择"连接到Git"
4. 授权Cloudflare访问您的代码仓库
5. 选择包含此项目的仓库
6. 配置构建设置：
   - 生产分支：`main` (或您使用的主要分支名)
   - 构建命令：`pnpm build`
   - 构建输出目录：`dist`
   - 环境变量：如果需要，可以添加`NODE_VERSION`设置为`18`或更高版本
7. 点击"保存并部署"
8. 等待构建和部署完成，您的网站将会分配一个`.pages.dev`域名

### 自定义域名 (可选)

如果您想使用自己的域名访问网站：

1. 在Cloudflare Pages项目中，导航到"自定义域"选项卡
2. 点击"设置自定义域"按钮
3. 输入您的域名，然后按照提示完成DNS配置

## 注意事项

- 此项目为纯前端应用，所有数据存储在本地
- 卦象数据来源于`src/data/zhouyi.ts`文件
- 如需添加或修改卦象解释，请编辑对应的数据文件

## 许可证

MIT License