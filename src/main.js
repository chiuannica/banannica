// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from '@/components/Header'
import Scrollbar from '@/components/Scrollbar'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
new Vue({
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>'
})
new Vue({
  el: '#scrollbar',
  router,
  components: { Scrollbar },
  template: '<Scrollbar/>'
})
