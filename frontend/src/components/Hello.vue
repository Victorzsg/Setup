<template>
  <div>
    <DateTime v-model="value" :timeOption="timeOption" :dateOption="dateOption"></DateTime>
  </div>
</template>

<script>
import DateTime from '../comm/schema-editor/DateTime'

export default {
  data () {
    return {
      timeOption: {
        type: 'time',
        pickerOptions: {
          start: '08:30',
          step: '00:15',
          end: '18:30'
        },
        placeholder: '请先选择时间'
      },
      dateOption: {
        type: 'date',
        valueFormat: 'yyyy-MM-dd HH:mm:ss',
        placeholder: '请先选择日期'
      },
      value: ''
    }
  },
  components: {
    DateTime
  }
}
</script>

<style scoped>

</style>
