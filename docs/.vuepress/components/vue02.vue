<template>
  <div class="vue-container">
    <ContentMenu
      class="block-one"
      :menu="menuOne"
      @select="choose1 = $event.label"
    >
      <div>{{ choose1 }}</div>
    </ContentMenu>
    <ContentMenu
      class="block-two"
      :menu="menuTwo"
      @select="choose2 = $event.label"
    >
      <div>{{ choose2 }}</div>
      <ContentMenu
        class="block-three"
        :menu="menuThree"
        @select="choose3 = $event.label"
      >
        <div>{{ choose3 }}</div>
      </ContentMenu>
    </ContentMenu>
  </div>
</template>

<script setup name="vue02">
import { reactive, ref } from 'vue'
import ContentMenu from './vue/ContentMenu.vue'

const menuOne = reactive([
  { label: '添加' },
  { label: '编辑' },
  { label: '删除' },
  { label: '查看' },
  { label: '复制' }
])
const choose1 = ref('')
const menuTwo = reactive([
  { label: '员工' },
  { label: '部门' },
  { label: '角色' },
  { label: '权限' },
  { label: '菜单' }
])
const choose2 = ref('')
const menuThree = reactive([
  { label: '嵌套菜单1' },
  { label: '嵌套菜单2' },
  { label: '嵌套菜单3' },
  { label: '嵌套菜单4' }
])
const choose3 = ref('')
</script>

<style lang="scss" scoped>
.vue-container {
  .block-one,
  .block-two {
    width: 500px;
    height: 500px;
  }

  .block-one,
  .block-two,
  .block-three {
    & > div {
      color: #fff;
      font-size: 2rem;
      text-align: center;
    }
  }

  .block-one {
    background-color: #e65e52;
  }

  .block-two {
    position: relative;
    margin-top: 20px;
    background-color: #f1b445;
  }

  .block-three {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: 400px;
    height: 250px;
    background-color: #55bd48;
    transform: translate(-50%);
  }
}
</style>
