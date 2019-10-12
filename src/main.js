import Vue from 'vue'
import App from './App.vue'

import store from './vuex/store';
import BScroll from '@better-scroll/core'
import './mock/mockServer'
import 'lib-flexible'
Vue.config.productionTip = false

import router from './router'

Vue.prototype.$bus = new Vue({
  methods: {
    creatBs(ref, one, two) {
      this.bs = new BScroll(ref, {
        click: true,
        scrollX: one,
        scrollY: two,
      })
    }
  }
})

new Vue({
  render: h => h(App), 
  router,
  store
}).$mount('#app')
