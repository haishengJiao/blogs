<template>
  <el-input v-model="formDataComputed.name" />
</template>

<script name="FormOne" setup>
import useVModel from '../hooks/useVModel.js'

const props = defineProps({
  formData: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['update:formData'])

// 封装成通用方法
// const formDataComputed = computed({
//   get() {
//     // 返回一个代理对象
//     return new Proxy(props.formData, {
//       // 赋值的时候会触发 set
//       set(obj, name, val) {
//         emit('update:formData', {
//           ...obj,
//           [name]: val
//         })
//         return true
//       }
//     })
//   },
//   set(val) {
//     emit('update:formData', val)
//   }
// })
const formDataComputed = useVModel(props, 'formData', emit)
</script>
