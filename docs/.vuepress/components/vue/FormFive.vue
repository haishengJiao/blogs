<template>
  <el-radio-group v-model="formDataComputed.resource">
    <el-radio label="Sponsor" />
    <el-radio label="Venue" />
  </el-radio-group>
</template>

<script name="FormFive" setup>
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
