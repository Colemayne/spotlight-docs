import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Service from '@/views/Service'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/docs',
      alias: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/docs/api/:app/:service',
      name: 'Service',
      component: Service
    }
  ]
})