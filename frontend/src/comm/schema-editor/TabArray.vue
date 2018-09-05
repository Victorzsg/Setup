<template>
  <div>
    <el-tabs :type="type" v-show="value && value.length" v-model="activeIndex" @tab-click="tabClick">
      <el-tab-pane v-for="(row, index) in value" :key="row[keyField] || index"
        :name="index.toString()"
        :label="getLabel(index, row[labelField])">
        <component
          :is="resolver(schema.items)"
          :schema="schema.items"
          :path="path + '/' + index"
          v-model="value[index]"
          :errors="errors"
          :tab-name="getLabel(index, row[labelField])"
          v-bind="getCompBindProps(schema.items)"></component>
      </el-tab-pane>
    </el-tabs>
    <p v-show="!value || !value.length">{{ emptyTips }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'border-card' // card border-card
    },
    emptyTips: {
      type: String,
      default: '无数据'
    },
    schema: Object,
    value: Array,
    errors: Object,
    path: String,
    keyField: String,
    labelField: {
      type: String,
      default: 'label'
    },
    labelTemplate: String
  },

  data () {
    return {
      activeIndex: '0'
    }
  },

  inject: ['resolver'],

  watch: {
    value (val) {
      if (val.length) {
        if (this.activeIndex === '0') return
        this.activeIndex = (val.length - 1).toString()
      }
    }
  },

  methods: {
    getLabel (index, label = index) {
      return this.labelTemplate
        ? this.labelTemplate.replace(/\{index\}/g, index + 1).replace(/\{label\}/g, label)
        : (label || index)
    },

    getCompBindProps (option = {}) {
      let props = Object.assign({}, option.editorOption || {})

      if (option.props) {
        for (const [bindProp, valueProp] of Object.entries(option.props)) {
          props[bindProp] = this.value[valueProp]
        }
      }

      return props
    },

    tabClick (item) {
      this.$bus.emit('tab-click', {
        label: item.label
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.errors{
  color: #fa5555;
  font-size: 12px;
  line-height: 1;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
</style>

