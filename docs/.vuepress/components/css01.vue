<template>
  <div class="container">
    <span class="text">君子泰然自若 不会骄傲</span>
  </div>
</template>

<script setup name="css01"></script>

<style lang='scss' scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  text-align: center;
  background-color: #000;
  filter: contrast(30);
  .text {
    font-size: 2.6rem;
    color: #fff;
    animation: showUp 3s forwards;
  }
}
@keyframes showUp {
  from {
    letter-spacing: -40px;
    filter: blur(10px);
  }
  to {
    letter-spacing: 10px;
    filter: blur(2px);
  }
}
</style>
