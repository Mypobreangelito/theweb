import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Config listo para GitHub Pages de mypobreangelito/theweb
export default defineConfig({
  site: 'https://mypobreangelito.github.io/',
  base: '/theweb/',
  trailingSlash: 'always',
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'static'
});
