# 免费个人主页 · Astro + GitHub Pages

面向个人简介和学术档案的中文单页网站：左侧个人信息栏、顶部栏目导航，以及研究方向、论文与项目、经历、教育背景和最新动态。整体信息架构参考 [Academic Pages](https://github.com/academicpages/academicpages.github.io)，使用 Astro 自定义实现，无商业模板、外部字体或图片依赖。网站输出纯静态文件，不需要购买服务器或域名。

个人资料已设置为于祥粤、西安电子科技大学，研究方向为模仿学习与 VLA。未提供的论文、工作经历和动态保持为空；不展示虚构履历。邮箱和学术链接留空时不会显示。

## 只改一个文件

打开 `src/data/profile.ts`，修改：

- `name`、`displayName`、`title`：姓名、显示名称和主页标题。
- `avatar`：可选头像路径，例如 `/avatar.jpg`，并把图片放入 `public/avatar.jpg`；留空时使用姓名缩写。
- `bio`、`location`、`affiliation`：侧栏个人简介、所在地和单位。
- `email`、`github`、`scholar`、`orcid`、`linkedin`、`cv`：联系方式和学术链接；留空的项目不会显示。
- `about`：关于我的段落数组。
- `research`：研究方向卡片数组。
- 每个研究方向包含 `title`、`subtitle`（英文名称）和 `description`。
- `publications`：论文或项目列表，可填写年份、标题、作者、发表场合、摘要、PDF 和代码链接。
- `experience`、`education`、`news`：经历、教育背景和最新动态。

样式在 `src/styles/global.css`，布局在 `src/pages/index.astro`。配置文件中的文本用引号包住；文本内部有英文单引号时请使用 `\'`。

论文列表初始为空，添加时保留 `as { ... }[]` 类型声明，只需把条目放入前面的方括号中，例如：

```ts
{ year: '2026', title: '你的论文标题', authors: '作者列表', venue: '会议或期刊', description: '一句话摘要', pdf: '/files/paper.pdf', code: 'https://github.com/你的用户名/项目' }
```

PDF 文件放在 `public/files/paper.pdf`。头像、CV 与论文 PDF 的本地路径会自动添加 GitHub Pages 所需的仓库前缀。

## 发布到你的 GitHub 仓库

你的仓库已重命名为 [xiangyue-y/xiangyue-y.github.io](https://github.com/xiangyue-y/xiangyue-y.github.io)，网站地址是：

`https://xiangyue-y.github.io/`

工作流会自动从 GitHub 仓库名识别站点路径，也兼容普通项目仓库，无需修改配置。

上传步骤：

1. 登录 GitHub，打开上面的仓库。
2. 解压源码包，将其中的文件上传到仓库根目录。仓库根目录应直接包含 `package.json`、`pnpm-lock.yaml`、`src/`、`public/` 和 `.github/`；**不要把整个 personal-site 文件夹作为外层目录上传**。不要上传本地的 `node_modules/`、`.astro/` 或 `dist/`。
3. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 进入 **Actions → Deploy to GitHub Pages → Run workflow**，选择 `main` 运行。之后每次修改并提交 `main`，会自动重新发布。
5. 等待工作流显示绿色勾号，回到 **Settings → Pages** 点击网站地址。

如果你在本地使用 Git，先克隆仓库（保留已有提交），再把源码文件复制到克隆出来的目录中，避免覆盖与本站无关的文件。在克隆目录中执行：

```bash
git add .
git commit -m "Create personal homepage"
git push
```

也可以使用普通仓库名，例如 `personal-site`；网站地址将是 `https://你的用户名.github.io/personal-site/`。工作流会自动识别这两种情况，无需手动修改路径。

如果工作流失败，打开 Actions 中红色的运行记录查看出错步骤；先确认 Pages 的 Source 已设为 GitHub Actions，仓库默认分支为 `main`。若使用其他分支，请修改 `.github/workflows/deploy.yml` 中的 `branches`。

## 本地开发（可选）

先安装 [Node.js](https://nodejs.org/) 24 LTS（最低 22.12）和 pnpm。如果电脑有 npm，可用 `npm install -g pnpm@11.25.0` 安装 pnpm。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

打开终端显示的地址即可。发布前验证：

```bash
pnpm check
pnpm build
pnpm preview
```

依赖已固定版本并附带锁文件，GitHub Actions 使用 Node.js 24 和 pnpm 11.25.0。`dist/` 是编译结果，不需要提交。

## Astro 在这里的作用

Astro 把模板、配置和 CSS 编译成 HTML 与静态资源。GitHub Pages 托管这些文件。访客打开网页时，不需要运行 Astro，也不需要你的电脑开机。

## 已验证与边界

已完成类型检查、本地静态构建，以及根站点和项目仓库路径检查。实际线上发布需要你在 GitHub 账号中完成上述仓库与 Pages 设置。
