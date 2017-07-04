import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import checkbox from '@/pages/vueCheckbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox
    }
  ]
})
