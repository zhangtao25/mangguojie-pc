import './assets/css/init.css'
import './assets/css/iconfont.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 装载element ui
import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ele);

// 装载vue裁剪组件
import VueCropper from 'vue-cropper';
Vue.use(VueCropper);

// import TestZttr from 'test-zttr'
// Vue.use(TestZttr)

// 全局登录校验路由守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/signup') {
    next()
  } else {
    if (!window.isLogin) {
      next({path: '/signup'})
    } else {
      next()
    }
  }
});

// 阻止启动生产消息
Vue.config.productionTip = false;

import AuthService from './service/auth';
window.isLogin = false;

AuthService.autoLogin().then(res => {
  window.isLogin = true;
  // 实例化Vue对象并挂载到window
  window.gApp = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}).catch(
    res => {
      window.isLogin = false
      // 实例化Vue对象并挂载到window
      window.gApp = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app');
      window.gApp.$router.push({path: '/signup'})
    }
)
