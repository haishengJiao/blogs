<template>
  <el-select v-model="formDataComputed.region" placeholder="please select your zone">
    <el-option label="Zone one" value="shanghai" />
    <el-option label="Zone two" value="beijing" />
  </el-select>
</template>

<script name="FormTwo" setup>
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

<style lang='scss' scoped></style>
