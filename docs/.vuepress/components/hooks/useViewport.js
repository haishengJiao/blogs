import { onMounted, onUnmounted, ref } from 'vue'

// 响应式视口宽度
let vw = 0
// 响应式视口高度
let vh = 0

if (typeof document !== 'undefined') {
  vw = ref(document.documentElement.clientWidth)
  vh = ref(document.documentElement.clientHeight)
}

export default function () {
  const handleResize = () => {
    vw.value = document.documentElement.clientWidth
    vh.value = document.documentElement.clientHeight
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { vw, vh }
}
