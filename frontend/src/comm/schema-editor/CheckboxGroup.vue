<template>
  <el-checkbox-group :value="value" @input="val => $emit('input', val)" :disabled="disabled">
    <el-checkbox v-for="option in options" :label="option.value" :key="option.value">
      {{option.text}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    value: Array,
    options: Array
  }
}
</script>

