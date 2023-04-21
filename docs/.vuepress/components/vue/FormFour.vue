<template>
  <el-checkbox-group v-model="formDataComputed.type">
    <el-checkbox label="Online activities" name="type" />
    <el-checkbox label="Promotion activities" name="type" />
    <el-checkbox label="Offline activities" name="type" />
    <el-checkbox label="Simple brand exposure" name="type" />
  </el-checkbox-group>
</template>

<script name="FormFour" setup>
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
