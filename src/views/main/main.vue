<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapase ? '60px' : '210px'" class="main-aside">
        <NavMenu :isCollapase="isCollapase" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-main">
          <div class="page-info">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    const isCollapase = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapase.value = isFold
    }
    return {
      isCollapase,
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  .main-container {
    width: 100%;
    height: 100%;
    display: flex;
    .main-aside {
      background: rgb(2, 2, 51);
    }
    .page {
      flex: 1;
      display: flex;
      .page-header {
        height: 48px;
      }
      .page-main {
        flex: 1;
        text-align: center;
        background: #e3e3e3a1;
        .page-info {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
