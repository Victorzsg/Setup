import path from './path'

const ADD = path

class UrlMap {
    // 构造函数
    constructor() {
        // this.root = 'http://mst-nova.vip.com'
        // this.root = process.env.DEFAULT_API_ROOT
        this.root = location.href.indexOf('&debug=1') !== -1
            ? 'http://localhost:12306' : (process.env.DEFAULT_API_ROOT || '')
    }

    isUrlHasParams(url) {
        return ADD[url].url && /\{.*?\}/.test(ADD[url].url)
    }

    // 获取完整地址
    getUrl(url, params = {}) {
        const prefix = process.env.NODE_ENV === 'development' ? '/api' : ''
        let add = this.root + prefix + ADD[url].url

        for (const [key, value] of Object.entries(params)) {
            add = add.replace(`{${key}}`, value)
        }

        if (add) {
            return add
        } else {
            console.log('NO API:' + ADD[url].url)
            return ''
        }
    }

    // 获取图片地址
    getImgUrl() {
        switch (process.env.NODE_ENV) {
            case 'dev':
                return './src/static/images/'
            case 'test':
                return '../src/static/images/'
            case 'production':
                return '../src/static/images/'
            default:
                return './src/static/images/'
        }
    }

    // 获取主路径
    getRoot() {
        // return this.root
        return process.env.API_ROOT
    }
}

export default new UrlMap()
