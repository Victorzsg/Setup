import _clone from 'lodash-es/clone'
// import _merge from 'lodash-es/merge'

function parseType (schema, path) {
  let type = schema.type

  if (!type) {
    if (schema.properties) {
      type = 'object'
    } else if (schema.items) {
      type = 'array'
    }
  }

  if (!type) {
    throw new Error('Schema type of ' + path + ' no provide')
  }

  return type
}

function isType (type, value) {
  return type === 'array' ? Array.isArray(value) : typeof value === type
}

const VALUE_TYPE = ['number', 'boolean', 'string']

export default function resolveDefalut (schema, path, value, typeDefault = {
  'string': '',
  'number': 0,
  'boolean': false
}) {
  let type = parseType(schema, path)
  const valueTypeVaild = isType(type, value)

  if (valueTypeVaild && VALUE_TYPE.includes(value)) return value

  const hasDefault = schema.hasOwnProperty('default')

  switch (type) {
    case 'string':
      return hasDefault ? schema.default : typeDefault['string']
    case 'number':
      return hasDefault ? schema.default : typeDefault['number']
    case 'boolean':
      return hasDefault ? schema.default : typeDefault['boolean']
    case 'object':
      let obj = {}

      if (valueTypeVaild) {
        obj = value
      } else if (hasDefault) {
        if (!isType('object', schema.default)) {
          throw new Error('The default value type of ' + path + ' not be object')
        } else if (!schema.default) {
          throw new Error('Object default value of ' + path + ' can not be null or undefined')
        }
      }

      for (const [prop, propSchema] of Object.entries(schema.properties)) {
        const propPath = path + '/' + prop
        const propValue = obj[prop]
        const propType = parseType(propSchema, propPath)

        if (obj.hasOwnProperty(prop)) {
          if (!isType(propType, propValue)) {
            throw new Error('The default value type of ' + propPath + ' not be ' + propType)
          }

          if (!VALUE_TYPE.includes(propType)) {
            resolveDefalut(propSchema, propPath, propValue, typeDefault)
            // let propDefault = resolveDefalut(propSchema, propPath, propValue)
            // _merge(obj[prop], propDefault)
          }
        } else {
          obj[prop] = resolveDefalut(propSchema, propPath, propValue, typeDefault)
        }
      }

      return obj
    case 'array':
      let array = []

      if (valueTypeVaild) {
        array = value
      } else if (hasDefault) {
        if (!isType('array', schema.default)) {
          throw new Error('The default value type of ' + path + ' not be array')
        } else {
          array = _clone(schema.default)
        }
      }

      if (schema.items) {
        let itemsType = parseType(schema.items, path + '/items')

        array = array.map((item, i) => {
          const itemPath = path + '/' + i

          if (!isType(itemsType, item)) {
            throw new Error('The default value type of [' + itemPath + '] not be ' + itemsType)
          }

          if (!VALUE_TYPE.includes(itemsType)) {
            item = resolveDefalut(schema.items, itemPath, item)
            // let itemDefault = resolveDefalut(schema.items, itemPath, item)
            // _merge(item, itemDefault)
          }

          return item
        })
      }

      return array
  }
}
