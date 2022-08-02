<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="物镜">
        <btn-list :btnList="btnList" @save="onSave" />
      </el-form-item>
      <el-form-item label="曝光时间">
        <el-input v-model="form.time" class="input-time"></el-input>ms
        <el-checkbox v-model="form.check">自动曝光</el-checkbox>
      </el-form-item>
      <el-form-item label="现场选择">
        <btn-list :btnList="selectBtn" @save="onSave1" />
      </el-form-item>
      <el-form-item label="对焦模式">
        <btn-list :btnList="djBtn" @save="onSave2" />
      </el-form-item>
      <el-form-item label="拼图模式">
        <btn-list :btnList="ptBtn" @save="onSave3" />
      </el-form-item>
      <el-form-item label="选择算法">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="拍照数量">
        <el-input v-model="form.num" class="input-time"></el-input>张
      </el-form-item>
      <el-form-item label="z轴间距">
        <el-input v-model="form.len" class="input-time"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import BtnList from '@/base-ui/btn-list.vue'

export default defineComponent({
  components: { BtnList },
  setup() {
    const form = reactive({
      time: '',
      check: true,
      region: '',
      num: '',
      len: ''
    })
    const btnList = ['2X', '3X', '4X']
    const selectBtn = ['BF', 'Green', 'Blue', 'Red1', 'Red2']
    const djBtn = ['快速对焦', '精准对焦', '手动对焦']
    const ptBtn = ['单帧', '2x2', '3x3', '4x4']
    const onSave = (data: any) => {
      console.log(data)
    }
    const onSave1 = (data: any) => {
      console.log(data)
    }
    const onSave2 = (data: any) => {
      console.log(data)
    }
    const onSave3 = (data: any) => {
      console.log(data)
    }
    return {
      btnList,
      selectBtn,
      djBtn,
      ptBtn,
      onSave,
      onSave1,
      onSave2,
      onSave3,
      form
    }
  }
})
</script>

<style scoped lang="less">
.active {
  background: blue;
}
.input-time {
  width: 60px;
  margin-right: 10px;
}
.el-checkbox {
  margin-left: 20px;
}
</style>
