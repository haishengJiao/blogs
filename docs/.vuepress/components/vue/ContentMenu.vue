<template>
  <div ref="ContentMenuRef" class="1">
    <slot></slot>
    <Teleport to="body">
      <Transition @beforeEnter="handleBeforeEnter" @enter="handleEnter" @afterEnter="handleAfterEnter">
        <div
          class="content-menu"
          v-if="showMenu"
          :style="{
            left: x + 'px',
            top: y + 'px',
          }"
        >
          <div class="menu-list">
            <div class="menu-item" @click="handleClick(item)" v-for="item in menu" :key="item.label">
              {{ item.label }}
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup name="ContentMenu">
import { computed, ref } from 'vue';
import useContentMenu from '../hooks/useContentMenu.js'
const props = defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits('select')

const ContentMenuRef =ref(null)
const { x, y, showMenu } = useContentMenu(ContentMenuRef)

const handleClick = (item) => {
  showMenu.value = false
  emit('select', item)
}

// 元素加入到页面中之前触发
const handleBeforeEnter = (el) => {
  el.style.height = 0 
}

// 元素加到页面之后的钩子函数
const handleEnter = (el) => {
  el.style.height = 'auto'
  const h = el.clientHeight
  el.style.height = 0
  // requestAnimationFrame 下一帧执行
  requestAnimationFrame(() => {
    el.style.height = h + 'px'
    el.style.transition = '.5s'
  })
}

// 当进入过渡完成时调用
const handleAfterEnter = (el) => {
  el.style.transition = 'none'
}
</script>

<style lang='scss' scoped>
.content-menu {
  position: fixed;
  background-color: #eee;
  box-shadow: 1px 1px 2px rgba(0 , 0, 0, 0.2), 1px 1px 5px rgba(0 , 0, 0, 0.2);
  min-width: 100px;
  border-radius: 5px;
  font-size: 12px;
  color: #1d1d1f;
  line-height: 1.8;
  white-space: nowrap;
  overflow: hidden;
  .menu-list {
    .menu-item {
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: var(--c-brand-light);
      }
    }
  }
}
</style>
