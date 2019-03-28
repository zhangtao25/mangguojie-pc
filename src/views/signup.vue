<template>
  <div id="signup">
    <div class="wrap">
      <div>芒果街</div>
      <!--reg-->
      <el-form :model="regForm" :rules="regRule" v-show="mode == 0" ref="regForm">
        <el-form-item prop="user_email">
          <el-input placeholder="请输入邮箱" v-model="regForm.user_email"></el-input>
        </el-form-item>
        <el-form-item prop="user_password">
          <el-input placeholder="请输入密码" type="password" v-model="regForm.user_password"></el-input>
        </el-form-item>
        <el-form-item prop="user_password_v">
          <el-input placeholder="再次输入密码" type="password" v-model="regForm.user_password_v"></el-input>
        </el-form-item>
        <el-form-item prop="user_vcode">
          <el-input placeholder="请输入验证码" v-model="regForm.user_vcode"></el-input>
        </el-form-item>
        <p style="text-align: right" @click="getVcode"><span>{{countdown}}</span>获取验证码</p>
        <el-button style="width: 100%" @click="onClickReg">注册</el-button>
      </el-form>

      <!--login-->
      <el-form :model="loginForm" :rules="loginRule" ref="loginForm" v-show="mode == 1">
        <el-form-item>
          <el-input placeholder="请输入邮箱" v-model="loginForm.user_email"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input placeholder="请输入密码" v-model="loginForm.user_password"></el-input>
        </el-form-item>
        <el-button style="width: 100%" @click="onClickLogin">登录</el-button>
      </el-form>
      <el-button @click="tokenLogin">token校验</el-button>
      <p>已有账号？<span @click="onChangeMode">{{mode==0?"注册":"登录"}}</span></p>
    </div>
  </div>
</template>
<script>
  import AuthService from './../service/auth'
  import Regular from './../common/regular'

  export default {
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.regForm.user_password_v !== '') {
            this.$refs.regForm.validateField('user_password_v');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regForm.user_password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        mode: 0,
        regForm: {
          user_email: '',
          user_vcode: '',
          user_password: '',
          user_password_v: ''
        },
        loginForm: {
          user_email: '',
          user_password: ''
        },
        regRule: {
          user_email: [
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          user_vcode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          user_password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          user_password_v: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        },
        loginRule: {
          user_email: [
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          user_password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        countdowntimer: null,
        countdown: 60
      }
    },
    mounted(){
      // console.log(localStorage.getItem('token'))
      // let token = localStorage.getItem('token')
      // if (token){
      //   AuthService.autoLogin().then(res=>{
      //     console.log(res)
      //   })
      // }
    },
    methods: {
      onChangeMode() {
        if (this.mode == 0) {
          this.mode = 1
        } else {
          this.mode = 0
        }
      },
      onClickReg() {
        this.$refs['regForm'].validate((valid) => {
          if (valid) {
            AuthService.reg(
                this.regForm.user_email,
                this.regForm.user_password,
                this.regForm.user_vcode).then(res => {
              console.log(res)
            })
          } else {
            return false;
          }
        });
      },
      onClickLogin() {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            AuthService.login(
                this.loginForm.user_email,
                this.loginForm.user_password).then(res=>{
                  localStorage.setItem('user_email',this.loginForm.user_email)
                  localStorage.setItem('token',res)
            })
          } else {
            return false;
          }
        });
      },
      getVcode() {
        let email_reg = Regular.email;
        if (this.countdown == 60) {
          if (email_reg.test(this.regForm.user_email)){
            AuthService.getVcode(this.regForm.user_email).then(res => {
              console.log(res)
              this.startCountdown()
            })
          }else {
            console.log('请输入正确邮箱')
          }
        } else {
          console.log('60秒内只能发送一次验证码')
        }
      },
      startCountdown() {
        this.countdowntimer = setInterval(() => {
          if (this.countdown == 0) {
            this.countdown = 60
            clearInterval(this.countdowntimer)
          } else {
            this.countdown--
          }
        }, 1000)
      },
      tokenLogin(){
        AuthService.autoLogin().then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>
<style>
  #signup > .wrap {
    width: 432px;
    margin: 0 auto;
  }
</style>
