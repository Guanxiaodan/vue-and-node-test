import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import checkbox from '@/pages/vueCheckbox'
import keyup from '@/pages/keyup'
import father from '@/pages/father'
import table from '@/pages/table'
import title from '@/pages/table_objTitle'
import notice from '@/pages/notice'

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
      path: '/father',
      name: 'father',
      component: father
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/title',
      name: 'title',
      component: title
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    }
  ]
})
