// 映射
const map = new Map()

// 创建观察者
const ob = new ResizeObserver((entries) => {
  // 只要元素发生了变化，都会引发在这个回调函数的执行
  for (const entry of entries) {
    const binding = map.get(entry.target)
    if (binding && binding.value) {
      // 根据参数决定使用哪种盒模型（默认 border-box）
      const box = binding.arg !== 'border-box' ? entry.contentBoxSize[0] : entry.borderBoxSize[0]
      binding.value({
        width: box.inlineSize,
        height: box.blockSize
      })
    }
  }
})

export default {
  mounted(el, binding) {
    // 元素挂载后监听元素尺寸变化
    // 观察某些元素
    ob.observe(el)
    // 外边拿不到数据、设置映射
    map.set(el, binding)
  },
  unmounted(el) {
    // 元素移除的时候取消监听
    ob.unobserve(el)
    // 全局map可能造成内存泄漏，在元素移除删除
    map.delete(el)
  },
}