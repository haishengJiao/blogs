<template>
  <el-switch v-model="formDataComputed.delivery" />
</template>

<script name="FormThree" setup>
import useVModel from '../hooks/useVModel.js'

const props = defineProps({
  formData: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['update:formData'])

const formDataComputed = useVModel(props, 'formData', emit)
</script>
