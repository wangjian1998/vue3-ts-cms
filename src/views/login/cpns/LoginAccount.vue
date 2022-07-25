<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
/**
 * 账号登录
 */
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })

    const rules = {
      name: [
        { required: true, trigger: 'blur', message: '请输入用户名' },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          trigger: 'blur',
          message: '用户名长度为5~10个字符'
        }
      ],
      password: [
        { required: true, trigger: 'blur', message: '请输入密码' },
        {
          pattern: /^[a-z0-9]{3,}$/,
          trigger: 'blur',
          message: '请输入3位以上密码'
        }
      ]
    }

    const formRef = ref<InstanceType<typeof ElForm>>()

    const LoginAction = (keepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('keyizhixing ')
          if (keepPassword) {
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }
          // 进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      LoginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
