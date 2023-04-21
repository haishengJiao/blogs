<template>
  <div class="container">
    <el-switch
      v-model="colorValue"
      inactive-value="light"
      active-value="dark"
      active-text="暗"
      inactive-text="亮"
      @change="changeSkin"
    />
    <div>一键换肤哦</div>
    <div>自定义element颜色</div>
    <div class="demo-color-block">
      <span class="demonstration">按钮颜色</span>
      <el-color-picker v-model="color1" @change="changeColor1" />
    </div>
    <div class="demo-color-block">
      <span class="demonstration">按钮hover颜色</span>
      <el-color-picker v-model="color2" @change="changeColor2" />
    </div>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script setup name="vue05">
import { onMounted, ref } from 'vue';

const colorValue = ref('light')
const getSKIN = () => {
  const data = localStorage.getItem('SKIN') || 'light'
  colorValue.value = data
  toggleHtmlClass(data)
}

const changeSkin = (val) => {
  console.log(val);
  localStorage.setItem('SKIN', val)
  toggleHtmlClass(val)
}

const toggleHtmlClass = (type) => {
  const html = document.querySelector('html')
  if (type === 'light') {
    html.classList.remove('dark-skin', 'dark')
  } else {
    html.classList.add('dark-skin', 'dark')
  }
}

const color1 = ref()
const color2 = ref()

const changeColor1 = (val) => {
  localStorage.setItem('COLOR', val)
  const root = document.querySelector(":root")
  root.style.setProperty('--c-e-btn', val)
}
const changeColor2 = (val) => {
  localStorage.setItem('HOVER_COLOR', val)
  const root = document.querySelector(":root")
  root.style.setProperty('--c-e-btn-hover', val)
}
onMounted(() => {
  getSKIN()
  const root = document.querySelector(":root")
  const color = localStorage.getItem('COLOR')
  const hover = localStorage.getItem('HOVER_COLOR')
  if (color) {
    root.style.setProperty('--c-e-btn', color)
  }
  if (hover) {
    root.style.setProperty('--c-e-btn-hover', hover)
  }
  color1.value = getComputedStyle(root).getPropertyValue("--c-e-btn")
  color2.value = getComputedStyle(root).getPropertyValue("--c-e-btn-hover")
})
</script>

<style lang='scss' scoped>
.container {
  height: 500px;
  color: var(--c-text);
  font-size: 42px;
  background-color: var(--c-bgc);

  :deep(.el-switch__label) {
    color: var(--c-text);
  }

  :deep(.el-switch__label.is-active) {
    color: var(--el-color-primary);
  }

  .el-button--primary {
    --el-button-bg-color: var(--c-e-btn);
    --el-button-border-color: var(--c-e-btn)
  }

  .el-button:hover {
    background-color: var(--c-e-btn-hover);
    border-color: var(--c-e-btn-hover);
  }
}
</style>
