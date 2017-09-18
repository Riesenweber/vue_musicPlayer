// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    isPlaying: false,
    DOM:{},
    isShowPlay:true
  },
  mutations: {
    play(state, flag) {
      state.isPlaying = flag;
    },
    findDOM(state, payload) {
      state.DOM[payload.name] = payload.dom;
    },
    isShowIndex(state,show){
      state.isShowPlay=show;
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
