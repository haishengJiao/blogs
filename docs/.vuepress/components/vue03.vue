<template>
  <div class="vue03" v-size-ob:border-box="handleSizeChange">
    <div>{{ width }}px</div>
    <div>{{ height }}px</div>
  </div>
</template>

<script setup name="vue03">
import { ref } from 'vue'

const width = ref(0)
const height = ref(0)

const handleSizeChange = (size) => {
  width.value = size.width
  height.value = size.height
}
</script>

<style lang="scss" scoped>
.vue03 {
  width: 500px;
  height: 500px;
  overflow: auto;
  background-color: #0f2f54;
  resize: both;

  & > div {
    color: #fff;
    font-size: 2rem;
    text-align: center;
  }
}
</style>
