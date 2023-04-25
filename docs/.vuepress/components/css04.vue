<template>
  <div class="container">
    <img src="../public/img/avatar_female.png" alt="" @click.stop="" />
  </div>
</template>

<script name="css04" setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  img {
    --s: 280px;
    --c1: #c02942;
    --c2: #ecd078;
    --b: 5px; // 边框宽度
    --f: 1; // 放大倍率
    --bg-options: content-box no-repeat center / calc(100% / var(--f)) 100%; // 背景图
    --shrink: calc((var(--s) / var(--f) - var(--s)) / 2 - var(--b));

    width: var(--s);
    height: var(--s);

    // 解决上边框挡住头发的问题
    padding-top: 30px;

    // 限制圆的扩散范围  closest-side 表示以最短边作为圆的半径
    // 即使整个元素放大了，要始终保持这个背景图横向尺寸看上去是不变的 calc(100% / 放大倍数)
    // 解决设置padding-top之后背景整体上移的问题 content-box 让背景覆盖是内容盒
    background: radial-gradient(
        circle closest-side,
        var(--c2) calc(99% - var(--b)),
        var(--c1) calc(100% - var(--b)),
        var(--c1) 99%,
        transparent 100%
      )
      var(--bg-options);

    // 设置右下方和左下方的圆角
    border-radius: 0 0 999px 999px;
    outline: var(--b) solid var(--c1);

    // 设置外边框和元素之间的距离
    outline-offset: var(--shrink);
    transform: scale(var(--f));
    cursor: pointer;
    transition: 0.5s !important;

    // 只显示被覆盖的区域 其他地方不会显示

    mask: linear-gradient(#000 0 0) no-repeat center
        (calc(0px - var(--shrink) - -1px) / calc(100% / var(--f) - 2 * 6px)) 50%,
      radial-gradient(circle closest-side, #000 99%, transparent)
        var(--bg-options);

    // mask: linear-gradient(#000 0 0) no-repeat center
    //     (calc(0px - var(--shrink)) / calc(100% / var(--f) - 2 * var(--b))) 50%,
    //   radial-gradient(circle closest-side, #000 99%, transparent)
    //     var(--bg-options);

    &:hover {
      --f: 1.35;
    }
  }
}
</style>
