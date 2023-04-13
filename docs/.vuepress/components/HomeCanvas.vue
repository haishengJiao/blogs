<template>
  <div>
    <canvas id="moefy-canvas"></canvas>
  </div>
</template>

<script setup name="HomeCanvas">
import { Popper, PopperShape } from '@moefy-canvas/theme-popper'
import { Sparkler, SparklerMode } from '@moefy-canvas/theme-sparkler'
import { Ribbon } from '@moefy-canvas/theme-ribbon'
import { Sakura } from '@moefy-canvas/theme-sakura'
import { Meteor, MAX_Z_INDEX } from '@moefy-canvas/theme-meteor'
import { onMounted, ref } from 'vue';

// 鼠标周围的粒子
const handleSparkler = () => {
  const themeConfig = {
    mode: SparklerMode.TRAIL,
  }

  const canvasOptions = {
    opacity: 1,
    zIndex: MAX_Z_INDEX,
  }
  const el = document.getElementById('moefy-canvas')
  const sparkler = new Sparkler(themeConfig, canvasOptions)
  sparkler.mount(el)
}
// 点击鼠标出现小点
const handlePopper = () => {
  const themeConfig = {
   shape: PopperShape.Star,
   size: 1.75,
   numParticles: 10,
  }

  const canvasOptions = {
    opacity: 1,
    zIndex: MAX_Z_INDEX,
  }
  const el = document.getElementById('moefy-canvas')
  const popper = new Popper(themeConfig, canvasOptions)
  popper.mount(el)
}
// 背景的彩带效果
const handleRibbon = () => {
  const themeConfig = {
   size: 90,
  }
  const canvasOptions = {
    opacity: 1,
    zIndex: 0,
  }
  const el = document.getElementById('moefy-canvas')
  console.log(el);
  const sparkler = new Ribbon(themeConfig, canvasOptions)
  sparkler.mount(el)
}
// 花瓣效果
const handleSakura = () => {
  const themeConfig = {
    numPatels: 30,
  }
  const canvasOptions = {
    opacity: 1,
    zIndex: 0,
  }
  const el = document.getElementById('moefy-canvas')
  const sakura = new Sakura(themeConfig, canvasOptions)
  sakura.mount(el)
}
// 跟随鼠标滑动
const handleMeteor = () => {
  const themeConfig = {
     numParticles: null,
     particleColor: {
        light: 'rgba(102, 175, 239, .2)',
        dark: 'rgba(245, 236, 66, .2)',
     },
  }
  const canvasOptions = {
     opacity: 1,
     zIndex: 0,
  }
  const el = document.getElementById('moefy-canvas')
  console.log(el);
  const meteor = new Meteor(themeConfig, canvasOptions)
  meteor.mount(el)
}
const effectArr = [handleSparkler, handlePopper, handleRibbon, handleSakura, handleMeteor]
onMounted(() => {
  const randomNumber = Math.floor(Math.random() * effectArr.length)
  effectArr[randomNumber]()
})
</script>

<style lang='scss' scoped></style>
