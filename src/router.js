import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      component: ()=> import('./views/signup')
    },
    {
      path: '/home',
      component: ()=> import('./views/home')
    }
  ]
})
