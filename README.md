# Xiangyue Yu — Academic Homepage

An English academic homepage built with Astro, inspired by the layout of [Academic Pages](https://github.com/academicpages/academicpages.github.io). It features a profile sidebar, research interests, publications and projects, experience, education, and contact information. Hosting is free with GitHub Pages.

**Website:** https://xiangyue-y.github.io/

**Repository:** https://github.com/xiangyue-y/xiangyue-y.github.io

## Update content

Edit `src/data/profile.ts`:

- `displayName`, `title`, `bio`, `affiliation`: profile text.
- `avatar`: optional image path, such as `/avatar.jpg`. Put the image in `public/avatar.jpg`. Leave blank to show initials.
- `email`, `github`, `scholar`, `orcid`, `linkedin`, `cv`: optional contact and academic links. Empty values are hidden.
- `about`: biography paragraphs.
- `research`: cards with `title`, `subtitle`, and `description`.
- `publications`: entries with `year`, `title`, `authors`, `venue`, `description`, `pdf`, and `code`.
- `experience`: entries with `period`, `role`, `organization`, and `description`.
- `education`: entries with `period`, `degree`, and `organization`.
- `news`: entries with `date` and `text`.

The profile uses only the information provided: Xiangyue Yu, Xidian University, imitation learning, and VLA. Publications and work experience remain empty until supplied.

To add a publication, insert an object into the `publications` array, retaining its existing TypeScript type declaration:

```ts
{ year: '2026', title: 'Paper title', authors: 'Author list', venue: 'Conference or journal', description: 'A short summary.', pdf: '/files/paper.pdf', code: 'https://github.com/username/project' }
```

Place local PDFs in `public/files/`. Local avatar, CV, and PDF paths automatically respect GitHub Pages subpaths.

Layout: `src/pages/index.astro`. Styles: `src/styles/global.css`.

## Local development

Use Node.js 24 LTS (minimum 22.12) and pnpm 11.25.0.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Validation and production preview:

```bash
pnpm check
pnpm build
pnpm preview
```

## Deploy

In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. Every push to `main` runs `.github/workflows/deploy.yml`, checks and builds the site, and deploys it to GitHub Pages. You can also use **Actions → Deploy to GitHub Pages → Run workflow**.

The configuration detects both account sites (`username.github.io`) and project sites, setting the base path automatically. Generated `dist/` and local `node_modules/` directories should not be committed.

This site uses an original Astro implementation inspired by Academic Pages; it does not use the Jekyll template or require Ruby.
