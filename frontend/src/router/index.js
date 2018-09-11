import Vue from 'vue'
import Router from 'vue-router'
import ActivityList from '@/pages/activity-list'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ActivityList',
      component: ActivityList
    }
    // {
    //   path: '/hello',
    //   name: 'Hello',
    //   component: Hello
    // }
  ]
})
