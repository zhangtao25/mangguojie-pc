<template>
  <div id="signup">
    <div class="wrap">
      <div>芒果街</div>
      <!--reg-->
      <el-form :model="regForm" v-show="mode == 0">
        <el-form-item prop="user_email">
          <el-input placeholder="请输入邮箱" v-model="regForm.user_email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="regForm.user_password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="再次输入密码" v-model="regForm.user_password_v"></el-input>
        </el-form-item>

        <el-form-item prop="user_vcode">
          <el-input placeholder="请输入验证码" v-model="regForm.user_vcode"></el-input>
        </el-form-item>
        <p style="text-align: right" @click="getVcode"><span>{{countdown}}</span>获取验证码</p>
        <el-button style="width: 100%" @click="onClickReg">注册</el-button>
      </el-form>
      <!--login-->
      <el-form :model="loginForm" v-show="mode == 1">
        <el-form-item>
          <el-input placeholder="请输入邮箱" v-model="loginForm.user_email"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input placeholder="请输入密码" v-model="loginForm.user_password"></el-input>
        </el-form-item>
        <el-button style="width: 100%">登录</el-button>
      </el-form>

      <p>已有账号？<span @click="onChangeMode">{{mode==0?"注册":"登录"}}</span></p>
    </div>
  </div>
</template>
<script>
  import AuthService from './../service/auth'
  export default {
    data(){
      return{
        mode:0,
        regForm:{
          user_email:'',
          user_vcode:'',
          user_password:'',
          user_password_v:''
        },
        loginForm:{
          user_email:'',
          user_password: ''
        },
        countdowntimer:null,
        countdown:60
      }
    },
    methods:{
      onChangeMode(){
        if (this.mode==0){
          this.mode=1
        } else {
          this.mode=0
        }
      },
      onClickReg(){
        AuthService.reg(
            this.regForm.user_email,
            this.regForm.user_password,
            this.regForm.user_vcode).then(res=>{
          console.log(res)
        })
      },
      onClickLogin(){

      },
      getVcode(){
        AuthService.getVcode(this.regForm.user_email).then(res=>{
          console.log(res)
          this.startCountdown()
        })
      },
      startCountdown(){
        this.countdowntimer = setInterval(()=>{
          if (this.countdown==0){
            this.countdown=60
            clearInterval(this.countdowntimer)
          } else {
            console.log(1111)
            this.countdown--
          }
        },1000)
      }
    }
  }
</script>
<style>
  #signup>.wrap{
    width: 432px;
    margin: 0 auto;
  }
</style>
