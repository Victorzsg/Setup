<template>
  <el-form :model="value" :label-width="editorOption.showLabel === false ? '' : editorOption.labelWidth || defaultLabelWidth">
    <el-form-item
      :data-schema-path="path + '/' + prop"
      :label="editorOption.showLabel === false ? '' : propSchema.title || prop"
      v-for="(propSchema, prop) in schema.properties"
      :class="{'is-error': errors[path + '/' + prop]}"
      v-if="!(propSchema.option && propSchema.option.noRender)"
      v-show="!attributeMap[prop].hidden && !(propSchema.option && propSchema.option.hidden)"
      :key="prop">
      <component
        :is="resolver(propSchema)"
        :schema="propSchema"
        :path="path + '/' + prop"
        v-model="value[prop]"
        :errors="errors"
        @input="(value) => validate(path + '/' + prop, value)"
        :disabled="attributeMap[prop].disabled"
        v-bind="getCompBindProps(propSchema.option)"
        :tab-name="$props.tabName"></component>
       <p
        class="input-helper"
        v-if="propSchema.description"
        type="info">{{ propSchema.description }} </p>

      <div class="el-form-item__error" v-if="errors[path + '/' + prop]">
        <ul>
          <li v-for="error in errors[path + '/' + prop]" :key="error">
            {{error}}
          </li>
        </ul>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import _merge from 'lodash-es/merge'
import _clone from 'lodash-es/clone'

export default {
  props: {
    schema: Object,
    value: Object,
    errors: Object,
    path: String,
    tabName: String
  },

  inject: ['resolver', 'validate'],

  computed: {
    schemaOption () {
      return this.schema.option || {}
    },
    editorOption () {
      return this.schemaOption.editorOption || {}
    }
  },

  data () {
    return {
      defaultLabelWidth: '80px',
      attributeMap: {},
      attributeMapForUser: {}
    }
  },

  methods: {
    getCompBindProps (option = {}) {
      let props = Object.assign({}, option.editorOption || {})

      if (option.props) {
        for (const [bindProp, valueProp] of Object.entries(option.props)) {
          props[bindProp] = this.value[valueProp]
        }
      }

      return props
    }
  },

  created () {
    for (const prop in this.schema.properties) {
      this.attributeMap[prop] = {
        hidden: false,
        disabled: false
      }
    }

    const wathes = this.schemaOption.watch || {}
    for (let [path, handler] of Object.entries(wathes)) {
      /* eslint-disable no-eval */
      // @todo 直接连接会导致代码变量冲突，捕获错误并提醒，
      // 使用 action 方法代替传代码 syncLength: {watch: 'field'}，这样可以利用代码
      if (Array.isArray(handler)) handler = handler.join(';')
      let newHandler = eval('(function($value, $lastValue, $parent, $dom) {' + handler + '})')
      let self = this
      let wrapHandler = function (newVal, oldVal) {
        // console.log(newVal, oldVal)
        self.attributeMapForUser = _clone(self.attributeMap)
        newHandler(newVal, oldVal, self.value, self.attributeMapForUser) || {}
        _merge(self.attributeMap, self.attributeMapForUser)
      }

      // console.log('watch ' + path)
      this.$watch('value.' + path, wrapHandler)

      wrapHandler(this.value[path], this.value[path], this.value, this.attributeMap)
    }

    /*
    for (let [prop, define] of Object.entries(this.schema.properties)) {
      if (define.type === 'array' || define.items) {
        this.$watch(`value.${prop}`, (val) => {
          this.validate(this.path + '/' + prop, val)
        })
      }
    }
    */
  }
}
</script>

<style lang="scss" scoped>
.el-form-item__error{
  position: initial;
  ul {
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
}

.el-form .el-form {
  margin-bottom: -22px;
}

.input-helper {
  color: #909399;
  margin-bottom: 0;
}
</style>


