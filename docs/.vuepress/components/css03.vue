<template>
  <div class="container">
    <div class="button">
      <div class="img facebook"></div>
    </div>
    <div class="button">
      <div class="img qq"></div>
    </div>
    <div class="button">
      <div class="img bilibili"></div>
    </div>
    <div class="button">
      <div class="img wechat"></div>
    </div>
    <div class="button">
      <div class="img tiktok"></div>
    </div>
  </div>
</template>

<script name="css03" setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  height: 500px;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.25rem;
    height: 6.25rem;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 18px 18px 30px rgb(0 0 0 / 20%),
      -18px -18px 30px rgb(255 255 255 / 100%);
    cursor: pointer;
    transition: all 0.2s ease-out;

    .img {
      width: 3.75rem;
      height: 3.75rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      transition: all 0.2s ease-out;
    }

    .facebook {
      background-image: url('../public/img/facebook.png');
    }

    .qq {
      background-image: url('../public/img/qq.png');
    }

    .bilibili {
      background-image: url('../public/img/bilibili.png');
    }

    .wechat {
      background-image: url('../public/img/wechat.png');
    }

    .tiktok {
      background-image: url('../public/img/tiktok.png');
    }

    &:hover {
      box-shadow: 0 0 0 rgb(0 0 0 / 20%), 0 0 0 rgb(255 255 255 / 80%),
        inset 18px 18px 30px rgb(0 0 0 / 10%),
        inset -18px -18px 30px rgb(255 255 255 / 100%);
    }

    &:hover .img {
      width: 58px;
      height: 58px;
    }
  }
}
</style>
