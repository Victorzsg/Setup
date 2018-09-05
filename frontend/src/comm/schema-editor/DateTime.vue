<template>
  <div>
    <el-date-picker
      class="date"
      :class="{'date-range': isDateTimeRange}"
      :disabled="disabled"
      v-model="date"
      v-bind="getDateOption()">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    option: Object,
    timeOption: {
      type: Object,
      default: function () {
        return {
          placeholder: '请先选择日期'
        }
      }
    },
    dateOption: {
      type: Object,
      default () {
        return {}
      }
    },
    value: [String, Array]
  },
  // data () {
  //   return {
  //     date: ''
  //   }
  // },
  computed: {
    date: {
      get () {
        return this.value
      },
      set (newDate) {
        this.$emit('input', newDate)
      }
    }
  },
  methods: {
    isDateTimeRange () {
      const dateOption = this.dateOption || {}
      return dateOption.type === 'datetimerange'
    },
    getDateOption () {
      return {...this.option || {}, ...this.dateOption}
    }
  }
}
</script>

<style lang="scss" scoped>
.date {
  width: 220px;
}

.date-range {
  width: 400px;
}

.time {
  width: 100px;
}
</style>
