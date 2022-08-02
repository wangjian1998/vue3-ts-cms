<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapase" class="title">Vue3+Ts</span>
    </div>
    <div class="nav-container">
      <el-menu
        :default-active="defaultValue"
        class="el-menu-vertical"
        background-color="#0c2135"
        :collapse="isCollapase"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="item in menuList" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.id + ''">
              <template #title>
                <el-icon><Setting /></el-icon>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subitem in item.children" :key="subitem.id">
                <el-menu-item
                  :index="subitem.id + ''"
                  @click="handleClick(subitem)"
                >
                  <el-icon><Setting /></el-icon>
                  <span>{{ subitem.name }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.id + ''">
              <el-icon><Setting /></el-icon>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>

        <!-- <el-sub-menu
          v-for="item in menuList"
          :key="item.id"
          :index="item.id + ''"
        >
          <template #title>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-if="item.children.length"
            v-for="itemChildren in item.children"
            :key="itemChildren.id"
            :index="itemChildren.id + ''"
          >
            <span>{{ itemChildren.name }}</span>
          </el-menu-item>
        </el-sub-menu> -->
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LocalCache from '@/utils/cache'
import { useRouter, useRoute } from 'vue-router'
import { menuMapToRoute } from '@/utils/map-menus'

export default defineComponent({
  props: {
    isCollapase: Boolean
  },
  setup() {
    const router = useRouter()
    const menuRoute = useRoute()
    const currentPath = menuRoute.path
    const menuList = LocalCache.getCache('userMenus')
    const handleClick = (item: any) => {
      console.log(item)
      router.push({
        path: item.url ?? 'not-found'
      })
    }
    const menu = menuMapToRoute(menuList, currentPath)
    const defaultValue = ref(menu.id + '')
    return {
      menuList,
      currentPath,
      defaultValue,
      handleClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  width: 100%;
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    img {
      height: 1005;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
}
</style>
