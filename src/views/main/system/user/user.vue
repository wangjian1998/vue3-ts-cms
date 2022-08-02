<template>
  <div class="user">
    <!-- <AvtForm v-bind="formConfig"></AvtForm> -->
    <AvtForm
      :formItem="fromItem"
      :labelWidth="labelWidth"
      :colWidth="colWidth"
      :itemStyle="itemStyle"
      :formData="formData"
    >
      <template #footer>
        <div class="btn">
          <el-button type="primary">搜索</el-button>
          <el-button>取消</el-button>
        </div>
      </template>
    </AvtForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import AvtForm from '@/base-ui/src/form.vue'
import AvtForm, { IFormType, IForm } from '../../../../base-ui'

export default defineComponent({
  components: { AvtForm },
  name: 'user',
  setup() {
    const formData = reactive({
      name: '',
      password: '',
      sport: '',
      time: ''
    })
    const fromItem: IFormType[] = [
      {
        type: 'input',
        placeholder: '请输入内容',
        label: '用户名',
        field: 'name'
      },
      {
        type: 'password',
        placeholder: '请输入内容',
        label: '密码',
        field: 'password'
      },
      {
        type: 'select',
        field: 'sport',
        placeholder: '请选择内容',
        label: '喜欢的运动',
        options: [
          { label: '足球', value: 1 },
          { label: '篮球', value: 2 }
        ]
      },
      {
        field: 'time',
        label: '选择时间',
        type: 'datePicker',
        otherOptions: {
          'start-placeholder': '开始时间',
          'end-placeholder': '结束时间'
        }
      }
    ]
    const labelWidth = '120px'
    const colWidth = { span: 8 }
    const itemStyle = { padding: '10px 20px' }

    // const formConfig: IForm = {
    //   labelWidth: '120px',
    //   colWidth: { span: 8 },
    //   itemStyle: { padding: '10px 20px' },
    //   fromItem: [
    //     { type: 'input', placeholder: '请输入内容', label: '用户名' },
    //     { type: 'password', placeholder: '请输入内容', label: '密码' },
    //     {
    //       type: 'select',
    //       placeholder: '请选择内容',
    //       label: '喜欢的运动',
    //       options: [
    //         { label: '足球', value: 1 },
    //         { label: '篮球', value: 2 }
    //       ]
    //     },
    //     {
    //       label: '选择时间',
    //       type: 'datePicker',
    //       otherOptions: {
    //         'start-placeholder': '开始时间',
    //         'end-placeholder': '结束时间'
    //       }
    //     }
    //   ]
    // }
    return {
      fromItem,
      labelWidth,
      // colWidth,
      itemStyle,
      formData
      // formConfig
    }
  }
})
</script>

<style scoped lang="less">
.btn {
  text-align: right;
  margin-right: 20px;
}
</style>
