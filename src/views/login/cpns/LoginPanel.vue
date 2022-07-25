<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="keepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="onSubmit"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
/**
 * 登录面板
 */
import { defineComponent, ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'

// import { Avatar, Search } from '@element-plus/icons-vue'

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const keepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')
    const onSubmit = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.LoginAction(keepPassword.value)
        console.log(accountRef.value?.account)
      } else {
        console.log('LoginPhone中调用的登录方法')
      }
    }
    return { keepPassword, onSubmit, accountRef, currentTab, phoneRef }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
