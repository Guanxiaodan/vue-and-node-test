import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import checkbox from '@/pages/vueCheckbox'
import keyup from '@/pages/keyup'
import text from '@/pages/bindText'

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
    },
    {
      path: '/keyup',
      name: 'keyup',
      component: keyup
    },
    {
      path: '/text',
      name: 'text',
      component: text
    }
  ]
})
