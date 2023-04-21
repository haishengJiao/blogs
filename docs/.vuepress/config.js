import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import navbar from './config/navbar'
import sidebar from './config/sidebar'
import path from 'path'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import StylelintPlugin from 'stylelint-webpack-plugin'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '博客',
  description: '我的个人网站',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  port: 8899,
  // open: true,
  theme: defaultTheme({
    lastUpdated: false, // 是否启用 最近更新时间戳 。
    contributors: false, // 是否启用 贡献者列表 。
    logo: '/img/hero.png',
    // 在这里进行配置
    navbar,
    sidebar
  }),
  plugins: [
    new StylelintPlugin({
      files: ['**/*.{html,vue,css,sass,scss}'], // 按需配置
        fix: false,
        cache: true,
        emitError: true,
        failOnError: false
    }),
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