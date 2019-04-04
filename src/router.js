import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=> import('./views/home')
    },
    {
      path: '/signup',
      component: ()=> import('./views/signup')
    },
    {
      path: '/people',
      component: ()=> import('./views/people')
    }
  ]
})
