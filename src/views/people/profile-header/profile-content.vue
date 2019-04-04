<template>
  <div class="profile-content">
    <div class="head">
      <span class="nikename">张涛</span>
      <span class="introduce">JavaScript</span>
    </div>
    <div class="content">
      <el-button @click="show3 = !show3">Click Me</el-button>
      <div v-show="!show3">
        计算机软件徒手攀岩（纪录片）凯文·凯利（Kevin Kelly）
        淮南师范学院计算机科学与技术专业学生
      </div>

      <div style="margin-top: 20px; height: 200px;">
        <el-collapse-transition>
          <div v-show="show3" class="detail">
            <ul>
              <li>
                <span>居住地</span>
                <span>现居马鞍山，曾在南京、上海住过</span>
              </li>
              <li>
                <span>所在行业</span>
                <span>徒手攀岩（纪录片） · 凯文·凯利（Kevin Kelly）</span>
              </li>
              <li>
                <span>职业经历</span>
                <span>现居马鞍山，曾在南京、上海住过</span>
              </li>
              <li>
                <span>居住地</span>
                <span>现居马鞍山，曾在南京、上海住过</span>
              </li>
            </ul>
          </div>
        </el-collapse-transition>
      </div>
    </div>
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
      qiehuan(){
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
  .profile-content{
    background-color: white;
  }
  .profile-content .nikename{
    font-size: 26px;
  }
  .introduce{
    font-size: 18px;
  }
  .detail{
  }
  .detail>ul>li>span:nth-child(1){
    font-weight: bolder;
    display: inline-block;
    width: 60px;
  }

  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
