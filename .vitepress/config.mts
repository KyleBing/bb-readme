import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "黑莓键盘说明",
  description: "HA!",
  head: [['link', {rel: 'icon', href: '/favicon.png'}]],
  base: '/tools/bb-readme',
  outDir: 'dist',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '使用说明', link: '/base/base' },
      { text: '键位说明', link: '/layer/layer' }
    ],

    sidebar: [
      {
        text: '一、基础',
        items: [
          { text: '使用说明', link: '/base/base' },
        ]
      },
      {
        text: '二、层级说明',
        items: [
          { text: '层级说明', link: '/layer/layer' },
        ]
      },
      {
        text: '三、高级',
        items: [
          { text: '自定义键位', link: '/layer/layer' },
          { text: '生成固件', link: '/layer/layer' },
        ]
      },
      {
        text: '〇、预设',
        items: [
          { text: 'Markdown 例子', link: '/preset/markdown-examples' },
          { text: 'API 例子', link: '/preset/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KyleBing/bb-readme' }
    ]
  }
})
