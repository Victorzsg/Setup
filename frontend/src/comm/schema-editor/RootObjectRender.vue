<template>
  <article>
    <section v-for="(propSchema, prop) in schema.properties" :key="prop">
      <h3>{{propSchema.title || prop}}</h3>
       <component
        :is="resolver(propSchema)"
        :schema="propSchema"
        :path="path + '/' + prop"
        v-model="value[prop]"
        :errors="errors"
        v-bind="(propSchema.option && propSchema.option.editorOption) || {}"></component>
    </section>
  </article>
</template>

<script>
// import resolveDefalut from './schema-default'

export default {
  props: {
    schema: Object,
    value: Object,
    errors: Object,
    path: String
  },

  inject: ['resolver'],

  created () {
    // console.log('resolveDefalut')
    // let newValue = Object.assign({}, resolveDefalut(this.schema, '#', this.value))
    // this.$emit('input', newValue, this.value)
  }
}
</script>

<style lang="scss" scoped>
h3{
  font-size: 18px;
  margin: 20px 0;
  &::before{
    content: '\258E';
  }
}
</style>
