<template>
  <div class="my-input">
    <!-- 第一个问题： -->
    <!-- 在使用的时候吧属性和事件 全部透传到 el-input上 -->
    <!-- 使用 $attrs 接收 -->
    <!-- $attrs 会排除 props 传递的属性和事件 -->
    <el-input ref="inputRef" v-bind="$attrs">
      <!-- 第二个问题： -->
      <!-- 不能直接在这个位置写死 input 的全部插槽，因为有些组件是根据插槽传没传做一些事情，所以可以使用 $slots -->
      <!-- $slots 能够拿到外面使用的时候传入的插槽 -->
      <!-- 接收作用域插槽传递的数据 slotData -->
      <template v-for="(value, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}"></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  mounted() {
    // Object.entries 返回一个给定对象自身可枚举属性的键值对数组
    // 第三个问题：
    // 把 input 组件上提供的方法挂载到当前组件的实例上
    const entries = Object.entries(this.$refs.inputRef)
    for (const [key, value] of entries) {
      this[key] = value
    }
  }
}
</script>

<style lang='scss' scoped>
.my-input {
  transition: 0.3s;
  &:hover,&:focus-within {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, .1));
  }
}
</style>
