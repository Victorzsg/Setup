import ElementUI from 'element-ui'
import Select from './Select'
import ObjectRender from './ObjectRender'
import RootObjectRender from './RootObjectRender'
import TableArrayNative from './TableArrayNative'
import TabArray from './TabArray'
import ElGroupSelect from '@/components/comm/ElGroupSelect'
// import ImgUploader from '@/components/comm/ImgUploader'
import ImgUploader from './ImgUploader'
import NativeTag from './NativeTag'
import DateTime from './DateTime'
import ImgMapping from '@/components/img-mapping'
import DapChooseButton from '@/components/DapChooseButton'
import SelectionChooseButton from '@/components/SelectionChooseButton'
import UserGroupSelect from './UserGroupSelect'
import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'
import CategoryChooseButton from '../../components/category-list/CategoryChooseButton'

const TypeControlMap = {
  'number': ElementUI.InputNumber,
  'string': ElementUI.Input,
  'boolean': ElementUI.Switch,
  'object': ObjectRender
}

const EditorControlMap = {
  'select': Select,
  'section': RootObjectRender,
  'color': ElementUI.ColorPicker,
  'date': ElementUI.DatePicker,
  'datetime': DateTime,
  'group-select': ElGroupSelect,
  'img-uploader': ImgUploader,
  'tab': TabArray,
  'img-mapping': ImgMapping,
  'dap-choose-button': DapChooseButton,
  'selection-choose-button': SelectionChooseButton,
  'user-group-select': UserGroupSelect,
  'checkbox-group': CheckboxGroup,
  'radio-group': RadioGroup,
  'category-choose-button': CategoryChooseButton
}

const DEFAULT_CONTROL = ElementUI.Input

export default function (schema) {
  const option = schema.option || {}
  const editor = option.editor

  const tag = option.tag
  if (tag) {
    return NativeTag(tag, option.template)
  }

  if (editor && EditorControlMap.hasOwnProperty(editor)) {
    return EditorControlMap[editor]
  }

  let type = schema.type
  if (!type) {
    if (schema.properties) {
      type = 'object'
    } else if (schema.items) {
      type = 'array'
    } else {
      type = 'string'
    }
  }

  if (type === 'array' && (schema.items.type === 'object' || schema.items.properties)) {
    return TableArrayNative
  }

  return TypeControlMap[type] || DEFAULT_CONTROL
}
