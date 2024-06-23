import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },
      { text: 'John', link: '/john' },

      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsed: true,
        items: [
          { text: 'Example', link: '/example' },
          { text: 'John', link: '/john' },
          { text: 'Jenna', link: '/jen' },
          // ...
        ],
      },
    ],
  },
});
