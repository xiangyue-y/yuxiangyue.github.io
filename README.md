# 免费个人主页 · Astro + GitHub Pages

面向个人简介的中文单页网站：关于我、兴趣、分享和可选联系方式。使用开源框架 Astro 自定义实现，无商业模板、外部字体或图片依赖。网站输出纯静态文件，不需要购买服务器或域名。

当前姓名默认使用仓库名 `Yuxiangyue`，兴趣和分享内容是示例。邮箱和 GitHub 留空时不会显示链接。

## 只改一个文件

打开 `src/data/profile.ts`，修改：

- `name`：姓名或昵称。
- `initials`：首页装饰中的字母，可改成你的名字缩写。
- `headline`：首页大标题，使用 `\n` 换行。
- `intro`、`about`、`bio`：个人介绍。
- `interests`、`now`：兴趣和近况。
- `email`、`github`：可选联系方式。GitHub 地址使用完整的 `https://github.com/用户名`。
- `projects`：想分享的事情。`link` 填完整的 `https://...` 地址后会变为可点击的链接；可增删条目。

样式在 `src/styles/global.css`，布局在 `src/pages/index.astro`。配置文件中的文本用引号包住；文本内部有英文单引号时请使用 `\'`。

## 发布到你的 GitHub 仓库

你的仓库是 [xiangyue-y/yuxiangyue.github.io](https://github.com/xiangyue-y/yuxiangyue.github.io)。如果保持当前仓库名，网站地址会是：

`https://xiangyue-y.github.io/yuxiangyue.github.io/`

如果你希望使用更简洁的根地址 `https://xiangyue-y.github.io/`，需要把仓库重命名为 `xiangyue-y.github.io`。工作流会自动识别这两种仓库名，无需修改配置。

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

已完成类型检查、本地静态构建，以及根站点和项目仓库路径检查。实际线上发布需要你在 GitHub 账号中完成上述仓库与 Pages 设置；当前项目尚未发布到互联网。
