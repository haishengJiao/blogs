<template>
  <div class="content">
    <div class="container">
      <div class="item" v-for="item in 9" :key="item"></div>
    </div>
  </div>
</template>

<script name="css02" setup></script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: #23262d;

  .container {
    --c1: 1fr;
    --c2: 1fr;
    --c3: 1fr;
    --r1: 1fr;
    --r2: 1fr;
    --r3: 1fr;

    // 网格布局
    display: grid;
    grid-gap: 10px;
    grid-template-rows: var(--r1) var(--r2) var(--r3);
    grid-template-columns: var(--c1) var(--c2) var(--c3);
    width: 400px;
    height: 400px;
    margin: 0 auto;
    transition: 0.5s;
  }

  // scss 循环
  @for $i from 0 to 9 {
    .item:nth-child(#{$i + 1}) {
      // 360 度平均成9份。一份40度
      background-color: hsl($i * 40, 100%, 64%);
      cursor: pointer;
    }

    // :has 进行约束（移入子元素改变父元素）
    .container:has(.item:nth-child(#{$i + 1}):hover) {
      // 计算列
      $c: $i % 3 + 1;

      // 计算行
      /* stylelint-disable-next-line scss/no-global-function-names */
      $r: floor($i / 3) + 1;

      --c#{$c}: 2fr;
      --r#{$r}: 2fr;
    }
  }
}
</style>
