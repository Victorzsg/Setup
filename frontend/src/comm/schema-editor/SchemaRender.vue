<template>
  <component
  :is="resolver(schema)"
  :schema="schema"
  :path="path"
  :data-schema-path="path"
  :value="value"
  :errors="errors"
  @input="emitValue"
  :disabled="disabled"
  v-bind="(schema.option && schema.option.editorOption) || {}
  "></component>
</template>

<script>
export default {
  name: 'SchemaRender',

  props: {
    disabled: Boolean,
    schema: Object,
    value: [Object, Number, String, Boolean, Array],
    errors: Object,
    path: {
      type: String,
      default: ''
    }
  },

  inject: ['resolver'],

  methods: {
    emitValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

