<template>
  <el-group-select multiple
    :options="options"
    :value="value"
    @input="onInput"
    groupOptionsKey="options"
    optionLabelKey="label"
    optionValueKey="value"
    :perLineOptions="perLineOptions"
    :optionWidth="optionWidth"></el-group-select>
</template>

<script>
import ElGroupSelect from '@/components/comm/ElGroupSelect'
import { PEOPLE_GROUP_TYPE } from '@/comm/constant'

function convertOption ({id, name}) {
  return {
    label: name,
    value: {
      label: name,
      value: id
    }
  }
}

export default {
  props: {
    disabled: Boolean,
    value: {
      type: [String, Array],
      default () {
        return this.multiple ? [] : ''
      }
    },
    perLineOptions: {
      type: Number,
      default: 3
    },
    optionWidth: {
      type: Number,
      default: 150
    }
  },
  data () {
    return {
      options: []
    }
  },
  methods: {
    onInput (newValue) {
      this.$emit('input', newValue)
    }
  },
  created () {
    this.$getJson('getPeopleGroupList').then(({data}) => {
      const mostlyGroups = data.filter(item => item.type === PEOPLE_GROUP_TYPE.mostly).map(convertOption)
      const normalGroups = data.filter(item => item.type === PEOPLE_GROUP_TYPE.normal).map(convertOption)

      this.options = [{
        label: '常用人群',
        options: mostlyGroups
      }, {
        label: '细分人群',
        options: normalGroups
      }]
    })
  },
  components: {
    ElGroupSelect
  }
}
</script>
