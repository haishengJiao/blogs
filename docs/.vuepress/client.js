import { defineClientConfig  } from '@vuepress/client'
// 自定义指令
import sizeDirect from './components/directives/sizeDirect'
// 导入组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 
export default defineClientConfig ({
  enhance({ app }){
    // app 是由 createApp 创建的 Vue 应用实例
    // directive 全局挂载自定义指令
    app.use(ElementPlus).directive('size-ob' ,sizeDirect)
  }
})