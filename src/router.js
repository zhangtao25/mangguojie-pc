import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pubuliu',
      component: ()=> import('./views/pubuliu')
    },
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
