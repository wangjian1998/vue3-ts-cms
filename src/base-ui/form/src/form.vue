<template>
  <div class="avt-form">
    <div>
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" :rules="ruleData">
      <el-row>
        <template v-for="(item, i) in formItem" :key="i">
          <el-col v-bind="colWidth">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              :prop="item.field"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="item in item.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datePicker'">
                <el-date-picker
                  v-model="formData[`${item.field}`]"
                  type="daterange"
                  range-separator="至"
                  v-bind="item.otherOptions"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormType } from '../types'

export default defineComponent({
  props: {
    formItem: {
      type: Array as PropType<IFormType[]>
      // default: () => {
      //   []
      // }
    },
    formData: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colWidth: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.avt-form {
  padding: 20px 0;
}
</style>
