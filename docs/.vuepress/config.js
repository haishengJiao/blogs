import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import navbar from './config/navbar'
import sidebar from './config/sidebar'
import path from 'path'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '博客',
  description: '我的个人网站',
  head: [
    ['link', { rel: 'icon', href: '/img/hero.png' }],
    ['link', { rel: 'stylesheet', href: '/styles/index.scss' }],
  ],
  port: 8899,
  // open: true,
  theme: defaultTheme({
    logo: '/img/hero.png',
    // 在这里进行配置
    navbar,
    sidebar
  }),
  
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components/'),
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'ctrl + k',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
      hotKeys: [
        {
          key: 'k',
          ctrl: true
        }
      ]
    }),
  ]
})