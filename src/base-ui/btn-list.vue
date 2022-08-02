<template>
  <div>
    <el-button
      v-for="(item, i) in btnList"
      :key="i"
      :class="[ActiveColor === i ? 'active' : '']"
      @click="changeColor(i, item)"
      >{{ item }}</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    btnList: Array
  },
  emits: ['save'],
  setup(props, { emit }) {
    const ActiveColor = ref(0)
    const changeColor = (index: number, data: any) => {
      ActiveColor.value = index
      emit('save', data)
    }
    return {
      ActiveColor,
      changeColor
    }
  }
})
</script>

<style scoped lang="less">
.active {
  background: blue;
}
</style>
