<template>
  <div>
    <table :class="tableClass" v-if="value && value.length">
      <thead>
        <tr>
          <th v-if="showIndexColumn"></th>
          <th v-for="(propSchema, prop) in schema.items.properties"
            v-if="!(propSchema.option && propSchema.option.noRender)"
            :key="prop">
            {{ propSchema.title || prop }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in value" :key="row[keyField] || index">
          <th v-if="showIndexColumn">{{ getColumnIndex(index+1) }}</th>
          <td v-for="(propSchema, prop) in schema.items.properties" :key="prop"
            v-if="!(propSchema.option && propSchema.option.noRender)"
            :class="{'has-error': errors[getCellPath(index, prop)]}">
            <component
              :class="{'is-error': errors[getCellPath(index, prop)]}"
              :is="resolver(propSchema)"
              :schema="propSchema"
              :path="getCellPath(index, prop)"
              v-model="value[index][prop]"
              @input="(value) => validate(getCellPath(index, prop), value)"
              v-bind="(propSchema.option && propSchema.option.editorOption) || {}"></component>
              <ul class="errors">
                <li v-for="error in errors[getCellPath(index, prop)]" :key="error">
                  {{error}}
                </li>
              </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="!(value && value.length)">{{ emptyTips }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tableClass: {
      type: String,
      default: 'table table-bordered'
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
    showIndexColumn: Boolean,
    indexTemplate: String
  },

  inject: ['resolver', 'validate'],

  methods: {
    getColumnIndex (index) {
      return this.indexTemplate ? this.indexTemplate.replace(/\{index\}/g, index) : index
    },

    getCellPath (index, prop) {
      return this.path + '/' + index + '/' + prop
    }
  },

  computed: {
    schemaOption () {
      return this.schema.option || {}
    },
    editorOption () {
      return this.schemaOption.editorOption || {}
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

