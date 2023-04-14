<template>
  <div class="content">
    <MyInput ref="myInputRef" v-model="inputValue" size="large" placeholder="测试placeholder" @blur="inputBlur">
      <template #prepend>
        <el-select placeholder="Select" v-model="selectValue" size="large" style="width: 150px;">
          <el-option label="RestAurant" value="1"></el-option>
          <el-option label="Order No." value="2"></el-option>
          <el-option label="Tel" value="3"></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search"></el-button>
      </template>
    </MyInput>
  </div>
</template>

<script name="vue01" setup>
import MyInput from './vue/MyInput.vue'
import { onMounted, ref } from 'vue';
import { Search } from '@element-plus/icons-vue'

const inputValue = ref('')
const myInputRef = ref(null)
const selectValue = ref('')

const inputBlur = () => {
  console.log('失去焦点');
}

onMounted(() => {
  // 使用 el-input 的方法
  myInputRef.value.focus()
})
</script>

<style lang='scss' scoped>
.content {
  margin-top: calc(0.5rem - var(--navbar-height));
  padding-top: calc(1rem + var(--navbar-height));
}
</style>
