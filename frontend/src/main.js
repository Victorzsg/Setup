// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

import {API, getJson, postJson} from './service/api'

Vue.use(Vue => {
    Vue.prototype.$API = API
    Vue.prototype.$getJson = getJson
    Vue.prototype.$postJson = postJson
})

/* eslint-disable */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
