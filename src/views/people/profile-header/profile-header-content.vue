<template>
  <div class="profile-header-content">
    <div class="content-head">
      <span>张涛</span>
      <span>JavaScript</span>
    </div>
    <div class="content-body">
      <ul class="simple" v-show="isActive=='simple'">
        <li>
          <span>计算机软件</span>
          <span class="vertical">|</span>
          <span>徒手攀岩（纪录片）</span>
        </li>
        <li>
          <span>淮南师范学院</span>
          <span class="vertical">|</span>
          <span>计算机科学与技术专业</span>
          <span class="vertical">|</span>
          <span>学生</span>
          <span class="vertical">|</span>
          <span></span>
        </li>
      </ul>
      <ul class="detail" v-show="isActive=='detail'">
        <li>
          <span>居住地</span>
          <span>现居马鞍山，曾在南京、上海住过</span>
        </li>
        <li>
          <span>所在行业</span>
          <span>计算机软件</span>
        </li>
        <li>
          <span>职业经历</span>
          <span>上海联想</span>
        </li>
        <li>
          <span>个人简介</span>
          <span>一个H5小萌新过</span>
        </li>
      </ul>
    </div>
    <div class="content-footer" @click="onSwitchClick">
      <i :class="{'el-icon-arrow-up':isActive == 'detail','el-icon-arrow-down':isActive=='simple'}"></i>
      <span>{{isActive=='simple'?'查看详细资料':'收起详细资料'}}</span>
    </div>
    <el-button class="content-edit-btn">编辑个人资料</el-button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isActive:'simple',
        show3:true
      }
    },
    methods:{
      onSwitchClick(){
        if (this.isActive=='simple'){
          this.isActive = 'detail'
        } else {
          this.isActive = 'simple'
        }
      }
    }
  }
</script>
<style>
  .profile-header-content .vertical{
    color: #ebebeb;
    margin: 0 12px;
  }
  .profile-header-content{
    padding: 16px 0 0 32px;
    /*background-color: skyblue;*/
    width: 100%;
    position: relative;
  }
  .profile-header-content>.content-head{
    margin-bottom: 18px;
  }
  .profile-header-content>.content-head span:nth-child(1){
    font-size: 30px;
    font-weight: bolder;
  }
  .profile-header-content>.content-head span:nth-child(1){
    font-size: 20px;
  }

  .profile-header-content>.content-body .detail li{
    margin-bottom: 18px;
  }
  .profile-header-content>.content-body .detail li span:nth-child(1){
    display: inline-block;
    width: 100px;
    font-weight: bolder;
  }
  .profile-header-content>.content-body .simple li{
    line-height: 2;
  }
  .profile-header-content>.content-footer{
    color: #8590a6;
    cursor: pointer;
  }
  .profile-header-content>.content-footer>i{margin-right: 14px}
  .profile-header-content .content-edit-btn{
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
