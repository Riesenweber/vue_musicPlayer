import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/Body'
import Search from '@/components/Search'
import Topic from '@/components/Topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'/',
      component:Body
    },
    {
      path:'/body',
      name:'Body',
      component:Body
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/topic',
      name:'Topic',
      component:Topic
    }
  ]
})
