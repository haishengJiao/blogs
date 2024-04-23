<template>
  <div ref="ContentMenuRef" class="1">
    <slot></slot>
    <Teleport to="body">
      <Transition
        @beforeEnter="handleBeforeEnter"
        @enter="handleEnter"
        @afterEnter="handleAfterEnter"
      >
        <div
          class="content-menu"
          v-if="showMenu"
          :style="{
            left: position.posX + 'px',
            top: position.posY + 'px'
          }"
        >
          <div v-size-ob="handleSizeChange" class="menu-list">
            <div
              class="menu-item"
              @click="handleClick(item)"
              v-for="item in menu"
              :key="item.label"
            >
              {{ item.label }}
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup name="ContentMenu">
import { computed, ref } from 'vue'
import useContentMenu from '../hooks/useContentMenu.js'
import useViewport from '../hooks/useViewport.js'
defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits('select')

const ContentMenuRef = ref(null)
const { x, y, showMenu } = useContentMenu(ContentMenuRef)
const w = ref(0) // 菜单宽度
const h = ref(0) // 菜单高度
const { vw, vh } = useViewport() // 视口宽高

const position = computed(() => {
  let posX = x.value
  let posY = y.value
  // x 坐标
  // x 坐标大于了视口宽度减去菜单的宽度表示右边放不下
  if (x.value > vw.value - w.value) {
    // 右边空间不足 鼠标点击的坐标减去弹窗的宽度
    posX -= w.value
  }
  // y 坐标
  // y 坐标大于了视口的高度减去弹窗的高度表示是下边放不下
  if (y.value > vh.value - h.value) {
    // 下边空间不足往上移 y 坐标减去视口高度加上弹窗高度
    posY -= y.value - vh.value + h.value
  }
  return { posX, posY }
})

// 获取菜单快高
const handleSizeChange = ({ width, height }) => {
  w.value = width
  h.value = height
}

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

<style lang="scss" scoped>
.content-menu {
  position: fixed;
  min-width: 100px;
  overflow: hidden;
  color: #1d1d1f;
  font-size: 12px;
  line-height: 1.8;
  white-space: nowrap;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 20%), 1px 1px 5px rgb(0 0 0 / 20%);

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
