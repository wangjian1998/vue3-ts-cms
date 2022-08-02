<template>
  <div class="main">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="item in MenuList"
        :key="item.index"
        :index="item.component"
      >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
    <div class="main-container">
      <component :is="activeIndex"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import autoScan from './cpns/autoScan.vue'
import batchScan from './cpns/batchScan.vue'
import statistics from './cpns/statistics.vue'
import setting from './cpns/setting.vue'
import handleScan from './cpns/handleScan.vue'

export default defineComponent({
  components: { handleScan, autoScan, batchScan, statistics, setting },
  setup() {
    const MenuList = [
      { name: '手动扫描', component: 'handleScan', index: '1' },
      { name: '自动扫描', component: 'autoScan', index: '2' },
      { name: '批量扫描', component: 'batchScan', index: '3' },
      { name: '查询统计', component: 'statistics', index: '4' },
      { name: '设置', component: 'setting', index: '5' }
    ]
    const activeIndex = ref('handleScan')
    const handleSelect = (key: string) => {
      activeIndex.value = key
    }
    return {
      MenuList,
      activeIndex,
      handleSelect
    }
  }
})
</script>

<style scoped lang="less">
.main {
  width: 800px;
  height: 100%;
  margin: auto;
  .main-container {
    padding: 20px;
    box-sizing: border-box;
  }
}
.el-menu--horizontal {
  justify-content: space-around;
}
</style>
