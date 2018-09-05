<template>
  <el-table :data="value">
    <el-table-column
      type="index" v-if="showIndexColumn"></el-table-column>

    <el-table-column
        v-for="(propSchema, prop) in schema.items.properties" :key="prop"
        v-if="!(propSchema.option && propSchema.option.noRender)"
        :prop="prop"
        :label="propSchema.title || prop">
        <template slot-scope="scope">
          <component
            :class="{'is-error': errors[getCellPath(scope.$index, prop)]}"
            :is="resolver(propSchema)"
            :schema="propSchema"
            :path="getCellPath(scope.$index, prop)"
            v-model="scope.row[prop]"
            v-bind="(propSchema.option && propSchema.option.editorOption) || {}"></component>
          <div class="table-form-item__error" v-if="errors[getCellPath(scope.$index, prop)]">
            <ul>
              <li v-for="error in errors[getCellPath(scope.$index, prop)]" :key="error">
                {{error}}
              </li>
            </ul>
          </div>
        </template>
     </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    schema: Object,
    value: Array,
    path: String,
    keyField: String,
    showIndexColumn: Boolean,
    indexTemplate: String
  },

  inject: ['errors', 'resolver'],

  methods: {
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
.table-form-item__error{
  color: #fa5555;
  font-size: 12px;
  line-height: 1;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
}
</style>

