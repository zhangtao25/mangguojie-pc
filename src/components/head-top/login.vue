<style>
  .login-dialog .el-dialog__header{
    padding: 0;
  }
</style>
<template>
  <div id="login">
    <el-dialog
      :visible.sync="dialogVisible"
      width="400px"
      :append-to-body="true"
      custom-class="login-dialog">
      <div style="text-align: center">
        <p style="text-align: center;font-size: 24px;line-height: 2;margin-bottom: 24px">登录</p>
        <el-form style="text-align: center">
          <el-form-item>
            <el-input style="width: 300px" v-model="ruleForm.user_phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input style="width: 300px" v-model="ruleForm.user_password" type="password"></el-input>
          </el-form-item>
        </el-form>
        <el-button
          style="width: 150px;margin-bottom: 14px;margin-top: 10px"
          type="primary"
          @click="onClickLoginBtn(ruleForm.user_phone,ruleForm.user_password)"
          :loading="loading">登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import AuthService from './../../service/auth'
  import {mapActions} from 'vuex'
  export default {
    data(){
      return{
        dialogVisible:false,
        ruleForm:{
          user_phone:'',
          user_password:'',
        },
        loading:false
      }
    },
    methods:{
      ...mapActions(['login']),
      onClickLoginBtn(user_phone,user_password){
        this.loading = true;
        AuthService.login(user_phone,user_password).then(res=>{
          setTimeout(()=>{
            this.$message({
              message: '手机号、密码校验通过，登录成功！',
              type: 'success'
            });
            this.login(res);
            this.dialogVisible = false;
            this.loading = false;
          },500)
        }).catch(error=>{
          setTimeout(()=>{
            this.$message.error(error);
            this.loading = false;
          },500)

        })
      }
    }
  }
</script>
