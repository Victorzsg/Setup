import {Loading} from 'element-ui'
import axios from 'axios'
import Vue from 'vue'
import LDIsPlainObject from 'lodash-es/isPlainObject'
import urlMap from './url-map'

let globalLoading = null

function getRequestInstance(option = {}) {
    const instance = axios.create()
    instance.interceptors.request.use(config => {
        const headers = {}

        Object.assign(headers, {'Content-Type': 'application/x-www-form-urlencoded'})
        // 添加 X-Requested-With
        Object.assign(headers, {'X-Requested-With': 'XMLHttpRequest'})

        Object.assign(config, {
            responseType: 'json',
            withCredentials: true,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN'
        })

        // 使用传入的设置覆盖默认的设置
        Object.assign(config, option)

        globalLoading = Loading.service({
            lock: true,
            background: 'rgba(255,255,255, 0.3)'
        })

        return Object.assign(config, {headers: headers})
    })

    instance.interceptors.response.use(response => {
        globalLoading && globalLoading.close()

        if (response.status === 200) {
            if (response.data.code === API_OPERATE_SUCCESS_CODE) {
                return Promise.resolve(response.data)
            } else {
                if (response.data.code === SESSION_EXPIRED) {
                    Vue.bus.emit('session-expired')
                    return Promise.reject({
                        code: SESSION_EXPIRED,
                        msg: '登陆已过期，请重新登录'
                    })
                }

                // 处理错误为对象的情况
                if (LDIsPlainObject(response.data.msg)) {
                    let moreMsg = []
                    for (var prop in response.data.msg) {
                        moreMsg.push(response.data.msg[prop])
                    }
                    response.data.msg = moreMsg.join(', ')
                }
                console.error(`接口 ${response.config.url} 的错误消息：${response.data.msg}`)
                return Promise.reject(response.data)
            }
        }
        return Promise.reject({
            code: response.code,
            msg: response.statusText
        })
    }, response => {
        console.error(response.message)
        return Promise.reject({
            msg: '网络连接失败，请稍候尝试'
        })
    })

    return instance
}

const getRequest = function (method, config = {}) {
    return function (url, urlParam, data) {
        if (!urlMap.isUrlHasParams(url) && arguments.length === 2) {
            data = urlParam
            urlParam = {}
        }

        url = urlMap.getUrl(url, urlParam)

        const instance = getRequestInstance(config)
        if (method === 'get') {
            return instance.get(url, {params: data})
        } else if (method === 'post') {
            return instance.post(url, data)
        } else if (method === 'postFile') {
            if (urlParam) {
                url = url + '?' + qs.stringify(urlParam)
            }
            return instance.post(url, data)
        }
    }
}

const API = getRequestInstance().request

/**
 * 发起返回值为 JSON 类型的 GET 请求
 * @param {String} url
 * @param {Object} [urlParam]
 * @param {*} data
 * @example
 * this.$getJson('apiName', data).then(() => console.log('done'))
 */
const getJson = getRequest('get')

/**
 * 发起请求参数和返回数据都为 JSON 类型的 POST 请求
 * @param {string} url
 * @param {object} [urlParam]
 * @param {*} data
 * @example
 * this.$postJson('apiName', data).then(() => console.log('done'))
 */
const postJson = getRequest('post', {
    transformRequest: [function (data, headers) {
        // headers['Content-Type'] = 'application/json'
        return JSON.stringify(data)
    }]
})

export {API, getJson, postJson,}
