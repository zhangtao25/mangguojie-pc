<template>
  <div id="signup">
    <div class="wrap">
      <div class="form-wrap">
        <div style="text-align: center;font-size: 60px;color: #0084ff;line-height: 100px">芒果街</div>
        <p style="color: #0084ff;font-size: 22px;text-align: center;margin-bottom: 40px">{{mode==1?"注册":"登录"}}芒果街，发现更多可信赖的解答</p>
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
          <p style="text-align: right;color: #175199;margin-bottom: 10px;cursor: pointer" @click="getVcode"><span>{{countdown}}</span>获取验证码</p>
          <el-button style="width: 100%" type="primary" @click="onClickReg">注册</el-button>
        </el-form>
        <!--login-->
        <el-form :model="loginForm" :rules="loginRule" ref="loginForm" v-show="mode == 1">
          <el-form-item prop="user_email">
            <el-input placeholder="请输入邮箱" v-model="loginForm.user_email"></el-input>
          </el-form-item>

          <el-form-item prop="user_password">
            <el-input placeholder="请输入密码" type="password" v-model="loginForm.user_password"></el-input>
          </el-form-item>
          <el-button style="width: 100%" type="primary" @click="onClickLogin">登录</el-button>
        </el-form>
      </div>
      <p class="SignContainer-switch">
        已有账号？
        <span style="color: #175199;cursor: pointer" @click="onChangeMode">{{mode==1?"注册":"登录"}}</span>
      </p>
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
      if (window.isLogin){
        this.$router.push({path:'/home'})
      }
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
                  this.$message.success('注册成功！')
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
              this.$message.success('登陆成功！')
              this.$router.push({path:'/home'})
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
              this.$message.success(res)
              this.startCountdown()
            })
          }else {
            this.$message.error('请输入正确邮箱')
            // console.log('请输入正确邮箱')
          }
        } else {
          this.$message.error('60秒内只能发送一次验证码')
          // console.log('60秒内只能发送一次验证码')
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
      }
    }
  }
</script>
<style>
  #signup{
    width: 100vw;
    height: 100vh;
    background-image: url("./../assets/sign_bg.png");
    background-color: #b8e5f8;
    overflow: hidden;
    position: relative;
  }
  #signup >.wrap{
    border-radius: 2px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  #signup>.wrap> .form-wrap {
    width: 352px;
    padding: 0 40px 40px 40px;
    background-color: white;
  }
  #signup >.wrap>.SignContainer-switch{
    margin: 0 auto;
    width:432px;
    line-height: 60px;
    border-top: 1px solid #ebebeb;
    background-color: #f6f6f6;
    text-align: center;
    font-size: 16px;
  }
</style>
