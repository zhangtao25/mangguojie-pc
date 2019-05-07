<template>
  <div id="app-header">
    <div class="margin">
      <img src="./../assets/xiaohongshu_logo.png" @click="goHome" alt="" class="logo"/>
      <div class="right">
        <el-button type="primary" size="mini" @click="goWrite">写笔记</el-button>
        <i class="el-icon-message-solid"></i>
        <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="./../assets/touxiang.jpg" alt="">
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="myhome">我的主页</el-dropdown-item>
            <el-dropdown-item>创作者中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      goHome() {
        this.$router.push({path: '/explorer'})
      },
      goWrite(){
        this.$router.push({path: '/write'})
      },
      handleCommand(command) {
        if (command == 'logout') {
          localStorage.removeItem('token');
          localStorage.removeItem('user_email');
          window.isLogin = false;
          this.$router.push({path: '/signup'});
          this.$message({
            message: '退出登录成功！',
            type: 'success'
          });
        } else if (command == 'myhome') {
          this.$router.push({path: '/people'});
        }
      }
    }
  }
</script>
<style>
  #app-header {
    position: fixed;
    background-color: white;
    width: 100%;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    z-index: 2000;
  }

  #app-header > .margin {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
  }

  #app-header .logo {
    height: 30px;
    cursor: pointer
  }
  #app-header .el-dropdown-link > img{
    width: 30px;height: 30px;cursor: pointer
  }
  .right{
    width: 150px;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  .el-icon-message-solid{
    font-size: 18px;
  }
</style>
