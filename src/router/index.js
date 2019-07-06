import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Scrollbar from '@/components/Scrollbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'Scrollbar',
      component: Scrollbar
    }
  ]
})

