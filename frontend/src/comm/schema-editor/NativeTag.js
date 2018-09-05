export default function (tag, template) {
  if (!template) {
    template = `<${tag} :data-schema-path="path">{{ value }}</${tag}>`

    if (tag === 'input') {
      template = `<input :data-schema-path="path" @input="emitValue($event)" :value="value">`
    }

    if (tag === 'img') {
      template = `<img :data-schema-path="path" :src="value">`
    }
  }

  return {
    name: 'native-' + tag,
    template,
    props: {
      schema: Object,
      path: String,
      value: [String, Number, Boolean]
    },
    methods: {
      emitValue (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
}
