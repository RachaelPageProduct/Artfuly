// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://artfuly.com',
  integrations: [
    react(),
    sitemap({
      // rachael-page/* is canonical on rachaelpage.com, not artfuly.com — see rachaelpage-sitemap.xml.ts
      filter: (page) => !/\/(unsubscribed|subscribed-|success|rachael-page)/.test(page),
    }),
  ]
});