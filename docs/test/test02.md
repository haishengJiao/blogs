# 这是 test02md 文件

```js
const { prismjsPlugin } = require('@vuepress/plugin-prismjs')

module.exports = {
  plugins: [
    prismjsPlugin({
      // 配置项
    }),
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,
        // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999
        // z-index property of the canvas, default: 999999999
      }
    ], 
  ],
}