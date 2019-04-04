<template>
  <div class="user-cover-editor" style="height: 200px">
    <div class="under-wrap">
      <img style="width: 100%" :src="usercover" alt="">
      <el-button class="edit-btn" @click="onEditClick">编辑封面图片</el-button>
      <input type="file" ref="userCoverFile" @change="onChange" v-show="false"></input>
    </div>
    <div class="cropper-wrap" v-show="isShow">
      <VueCropper
              ref="cropper"
              :img="option.img"
              :outputType="option.outputType"
              :full="option.full"
              :canMove="option.canMove"
              :canMoveBox="option.canMoveBox"
              :fixedBox="option.fixedBox"
              :autoCrop="option.autoCrop"
              :autoCropWidth="option.autoCropWidth"
              :autoCropHeight="option.autoCropHeight"
              :centerBox="option.centerBox"
              :high="option.high"
              :mode="option.mode"
              style="height: 240px"
      ></VueCropper>
      <el-button @click="onSaveClick">保存</el-button>
    </div>
  </div>
</template>
<script>
  import UserinfoService from './../../../service/userinfo'
  export default {
    data() {
      return {
        usercover:'http://localhost:3000/usercover/'+localStorage.getItem('user_email')+'.png',
        option: {
          img: "",
          full: false,
          outputType: "png",
          canMove: true,
          fixedBox: true,
          canMoveBox: false,
          autoCrop: true,
          autoCropWidth: 1000,
          autoCropHeight: 240,
          centerBox: true,
          high: false,
          mode: 'cover'
        },
        isShow:false
      }
    },
    methods: {
      onEditClick(){
        this.$refs.userCoverFile.click()
      },
      onChange(){
        this.isShow=true
        let self = this;
        let reads= new FileReader();
        let f=this.$refs.userCoverFile.files[0];
        reads.readAsDataURL(f);
        reads.onload= function(e){
          self.option.img = this.result;
        };
      },
      onSaveClick() {
        this.$refs.cropper.getCropData(data => {
          UserinfoService.updateUserCover(data).then(res=>{
            this.isShow = false;
            this.usercover = 'http://localhost:3000/usercover/'+localStorage.getItem('user_email')+'.png?t='+Math.random()
          })
        });
      }
    }
  }
</script>

<style>
  .user-cover-editor{
    position: relative;
  }
  .under-wrap{
    position: absolute;
  }
  .cropper-wrap{
    position: absolute;
    width: 1000px;
  }
  .edit-btn{
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .user-cover-editor .vue-cropper{
    background-image: none;
  }
</style>

