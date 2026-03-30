// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const BASE_PATH = process.env.BASE_PATH || '/GEAR-Website/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://dreamai-gear.github.io',
  base: BASE_PATH,
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'prepend' }],
    ],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
