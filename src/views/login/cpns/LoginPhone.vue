<template>
  <div class="login-account">
    <el-form :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="phone.name"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <el-input v-model="phone.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
/**
 * 手机登录
 */
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      name: '',
      password: ''
    })

    const rules = {
      name: [
        { required: true, trigger: 'blur', message: '请输入用户名' },
        {
          pattern: /^[0-9]{11}$/,
          trigger: 'blur',
          message: '请输入正确的手机号码'
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
    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped lang="less"></style>
