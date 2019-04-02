import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 装载element ui
import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ele);
import AuthService from './service/auth'

router.beforeEach((to, from, next) => {
  if (to.path=='/signup'){
    console.log('登录')
    next()
  }else {
    if (!window.isLogin){
      next({path:'/signup'})
    } else {
      next()
    }
  }
});
Vue.config.productionTip = false;

window.isLogin = false
AuthService.autoLogin().then(res=>{
  window.isLogin = true
  // 实例化Vue对象并挂载到window
  window.gApp = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
  window.gApp.$router.push({path:'/home'})
})
