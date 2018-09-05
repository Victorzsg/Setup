<template>
  <el-upload
    class="img-uploader"
    :action="action"
    :show-file-list="false"
    :on-success="handleSuccess"
    :before-upload="beforeUpload"
    accept="image/*"
    :headers="headers"
    with-credentials>
    <div class="el-upload-wrap">
      <img v-if="value || imageUrl" :src="imageUrl || value">
      <i v-else class="el-icon-plus img-uploader-icon"></i>
      <p class="ma-text" v-show="(imageUrl || value)">修改</p>
    </div>
    <i class="el-icon-error" v-show="(imageUrl || value) && clearable" @click.stop="clear"></i>
  </el-upload>
</template>

<script>
import ElUpload from 'element-ui'
import urlMap from '../../service/api/url-map'

function getCookie (name) {
  let tokenRE = new RegExp('(?:; )?' + name + '=([^;]*);?')
  return tokenRE.test(document.cookie) ? decodeURIComponent(RegExp.$1) : ''
}

export default {
  props: Object.assign({}, ElUpload.props, {
    clearable: {
      type: Boolean,
      default: true
    },
    action: {
      type: String,
      default: urlMap.getUrl('saveImg')
    },

    value: String,

    valueKey: {
      type: String,
      default: 'url'
    },

    headers: {
      type: Object,
      default () {
        return {
          'X-XSRF-TOKEN': getCookie('XSRF-TOKEN')
        }
      }
    },

    imgMaxWidth: Number, // px
    imgMaxHeight: Number, // px

    iconWidth: {
      type: String,
      default: '100px'
    },
    iconHeight: {
      type: String,
      default: '100px'
    },

    maxSizeInKB: {
      type: Number,
      default: 2000
    }
  }),

  data () {
    return {
      imageUrl: ''
    }
  },

  methods: {
    clear () {
      this.imageUrl = ''
      this.$emit('input', '')
    },

    handleSuccess (res, file) {
      if (res.code === 1) {
        this.$emit('input', res.data[this.valueKey])
        this.imageUrl = URL.createObjectURL(file.raw)
      }
    },

    beforeUpload (file) {
      return new Promise((resolve, reject) => {
        const isImg = ['image/jpeg', 'image/png'].includes(file.type)
        const isSizeValid = (file.size / 1024) < this.maxSizeInKB

        if (!isImg) {
          this.$message.error('请上传 jpg 或 png 图片！')
        }

        if (!isSizeValid) {
          this.$message.error('上传图片大小不能超过 ' + this.maxSizeInKB / 1024 + 'MB!')
        }

        if (!isImg || !isSizeValid) {
          reject()
        }

        if (this.imgMaxWidth || this.imgMaxHeight) {
          let image = new Image()
          image.onload = () => {
            let widthVaild = true
            let heightValid = true

            if (this.imgMaxWidth && image.width > this.imgMaxWidth) {
              widthVaild = false
              this.$message('图片宽度不能超过' + this.imgMaxWidth + 'px')
            }

            if (this.imgMaxHeight && image.height > this.imgMaxHeight) {
              heightValid = false
              this.$message('图片高度不能超过' + this.imgMaxHeight + 'px')
            }

            if (widthVaild && heightValid) {
              resolve()
            } else {
              reject()
            }
          }
          image.src = URL.createObjectURL(file)
        } else {
          resolve()
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .img-uploader {
    .el-upload-wrap {
      width: 100px;
      height: 100px;
      border-radius: 3px;
      cursor: pointer;
      border: 1px dashed #d9d9d9;
      overflow: hidden;
      position: relative;

      .ma-text {
        width: 100%;
        height: 24px;
        line-height: 24px;
        color: #fff;
        background-color: rgba(0, 0 ,0, 0.5);
        position: absolute;
        bottom: 0;
        left: 0;
        margin:0;
        display: none;
      }

      &:hover {
        border-color: #409EFF;
        
        .ma-text {
          display: block;
        }
      }
    }

    .el-upload {
      position: relative;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
    }

    .el-icon-error {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 0;
      right: 0;
      margin: -8px -8px 0 0;
      z-index: 1;
      opacity: 0.7;

      &:hover {
        color: #c00;
      }
    }
  }

  .img-uploader-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    color: #8c939d;
    text-align: center;
  }
</style>
