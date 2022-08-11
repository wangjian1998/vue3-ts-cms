<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick"
      ><ArrowLeft v-show="!isFold" /><ArrowRight v-show="isFold"
    /></el-icon>
    <div class="content">
      <avt-bread :breadList="breadList"></avt-bread>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              :size="30"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
            <span>{{ name }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
              <el-dropdown-item>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import AvtBread, { IBreadType } from '../../../base-ui/navBread'
import { menuMpToBread } from '../../../utils/map-menus'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: { AvtBread },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const name = 'wj'
    // const name = computed(() => useStore().state.login.userInfo.name)
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const breadList = computed(() => {
      const store = useStore()
      const route = useRoute()
      const menuList = store.state.login.userMenus
      const currentPath = route.path
      return menuMpToBread(menuList, currentPath)
    })
    return {
      isFold,
      name,
      breadList,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.fold-menu {
  font-size: 30px;
  cursor: pointer;
}
.el-dropdown-link {
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
</style>
