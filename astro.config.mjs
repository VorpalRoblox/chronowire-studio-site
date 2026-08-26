import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const base = isGitHubPages && repository ? `/${repository}` : '/';

export default defineConfig({
  output: 'static',
  base,
});
