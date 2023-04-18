---
title: input 输入框二次封装
sidebarDepth: 0
---

## 对 element input 输入框二次封装示例

### 效果
<vue01 />

需要解决三个问题：
1. 属性和事件的传递
2. 插槽
3. 在使用封装的组件时，使用 ref 获取 input 组件的 ref

### 代码
#### 使用封装的组件
@[code](../.vuepress/components/vue01.vue)

#### 封装组件
@[code](../.vuepress/components/vue/MyInput.vue)
