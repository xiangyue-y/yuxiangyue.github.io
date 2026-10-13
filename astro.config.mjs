import { defineConfig } from 'astro/config';

const [owner, repository] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isUserSite = repository?.toLowerCase() === `${owner}.github.io`.toLowerCase();

export default defineConfig({
  site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : undefined),
  base: process.env.BASE_PATH || (repository && !isUserSite ? `/${repository}/` : '/'),
  output: 'static',
  build: { format: 'directory' }
});
