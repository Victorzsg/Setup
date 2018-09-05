<template>
  <el-radio-group :value="value" @input="val => $emit('input', val)" :disabled="disabled">
    <el-radio v-for="option in options" :label="option.value" :key="option.value">
      {{option.text}}</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    value: [Number, String, Object, Boolean],
    options: Array
  }
}
</script>
