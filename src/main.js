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

// 校验登录状态
function getLoginStatus(){
  return new Promise((resolve, reject)=>{
    AuthService.autoLogin().then(res => {
      resolve(true)
    }).catch(
        res => {
          resolve(false)
        }
    )
  })
}
async function verifyLoginStatus (){
  let loginStatus = await getLoginStatus();
  window.isLogin = loginStatus
}
verifyLoginStatus();

window.gApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

