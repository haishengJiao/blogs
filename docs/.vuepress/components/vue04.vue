<template>
  <div>
    <el-form :model="formData" label-width="120px" :rules="formDataRules" ref="ruleFormRef">
      <el-form-item label="Activity name" prop="name">
        <FormOne :formData="formData" @update:formData="handleUpdate"></FormOne>
      </el-form-item>
      <el-form-item label="Activity zone" prop="region">
        <FormTwo :formData="formData" @update:formData="handleUpdate"></FormTwo>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <FormThree :formData="formData" @update:formData="handleUpdate"></FormThree>
      </el-form-item>
      <el-form-item label="Activity type" prop="type">
        <FormFour :formData="formData" @update:formData="handleUpdate"></FormFour>
      </el-form-item>
      <el-form-item label="Resources" prop="resource">
        <FormFive :formData="formData" @update:formData="handleUpdate"></FormFive>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script name="vue04" setup>
import { reactive, ref } from 'vue'
import FormOne from './vue/FormOne.vue'
import FormTwo from './vue/FormTwo.vue'
import FormThree from './vue/FormThree.vue'
import FormFour from './vue/FormFour.vue'
import FormFive from './vue/FormFive.vue'

const formData = ref({
  name: '',
  region: '',
  delivery: false,
  type: [],
  resource: '',
})
const formDataRules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    { required: true, message: 'Please select Activity zone', trigger: 'change' }
  ],
  type: [
    { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
  ],
  resource: [
    { required: true, message: 'Please select activity resource', trigger: 'change' }
  ],
})
const ruleFormRef = ref()

const onSubmit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', formData.value)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const handleUpdate = (val) => {
  formData.value = val
}
</script>
