import { onMounted, onBeforeUnmount, ref } from 'vue'

export default function useContentMenu(containerRef) {
  const showMenu = ref(false)
  const x = ref(0)
  const y = ref(0)

  // 时间处理函数
  const handleContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    showMenu.value = true
    x.value = e.clientX
    y.value = e.clientY
  }

  const closeMenu = () => {
    showMenu.value = false
  }

  // 元素挂载后监听元素
  onMounted(() => {
    const div = containerRef.value
    // contextmenu 不止能监听到鼠标右键，快捷键也能监听到
    div.addEventListener('contextmenu', handleContextMenu)
    // 如果外层有阻止事件冒泡会有问题，所以在捕获阶段触发
    window.addEventListener('click', closeMenu, true)
    // 防止出现多个
    window.addEventListener('contextmenu', closeMenu, true)
  })

  onBeforeUnmount(() => {
    const div = containerRef.value
    div.removeEventListener('contextmenu', handleContextMenu)
    window.removeEventListener('click', closeMenu, true)
    window.removeEventListener('contextmenu', closeMenu, true)
  })

  return {
    showMenu,
    x,
    y
  }
}