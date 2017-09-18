import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Body from '@/components/Body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Body',
      component:Body
    }
  ]
})
