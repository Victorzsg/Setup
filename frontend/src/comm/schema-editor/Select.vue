<template>
  <el-select :value="value" @change="emitValue" :disabled="disabled" :multiple="multiple">
    <el-option
      v-for="item in options"
      :key="item[keyField]"
      :label="item[labelField]"
      :value="item[valueField]">
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    multiple: Boolean,
    disabled: Boolean,
    options: {
      type: Array
    },
    labelField: {
      type: String,
      default: 'label'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    keyField: {
      type: String,
      default: 'value'
    },
    value: {
      type: [Number, String, Boolean]
    }
  },

  methods: {
    emitValue (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

