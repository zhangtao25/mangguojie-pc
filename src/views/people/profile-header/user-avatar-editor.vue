<template>
  <div class="user-avatar-editor">
    <div class="useravatar-wrap" @click="onEditClick">
      <div class="useravatar-dialog">
        <i class="icon-zhaoxiangji iconfont" style="font-size: 30px"></i>
        <p>修改我的头像</p>
      </div>
      <img class="useravatar-img" :src="useravatar" style="width: 168px;border-radius: 4px" alt="">
    </div>
    <input type="file" ref="userAvatarFile" @change="onChange" v-show="false">
    <el-dialog
            append-to-body
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
      <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center">
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
                style="height: 240px;width: 240px"
        ></VueCropper>
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="onSaveClick">保存</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
  import UserinfoService from './../../../service/userinfo'
  export default {
    data() {
      return {
        useravatar: '/api/useravatar/' + localStorage.getItem('user_email') + '.png',
        dialogVisible: false,
        option: {
          img: "",
          full: false,
          outputType: "png",
          canMove: true,
          fixedBox: true,
          canMoveBox: false,
          autoCrop: true,
          autoCropWidth: 180,
          autoCropHeight: 180,
          centerBox: true,
          high: false,
          mode: 'cover'
        },
      }
    },
    methods: {
      onEditClick() {
        this.$refs.userAvatarFile.click()
      },
      onChange() {
        let self = this;
        let reads = new FileReader();
        let f = this.$refs.userAvatarFile.files[0];
        reads.readAsDataURL(f);
        reads.onload = function () {
          self.option.img = this.result
        };
      },
      onSaveClick() {
        this.$refs.cropper.getCropData(data => {
          UserinfoService.updateUserAvatar(data).then(res => {
            this.useravatar = '/api/useravatar/' + localStorage.getItem('user_email') + '.png?t=' + Math.random()
            this.dialogVisible=false
            console.log(res)
          })
        });
      }
    },
    watch: {
      'option.img': function () {
        this.dialogVisible = true
      }
    }
  }
</script>
<style>
  .user-avatar-editor{
    position: relative;
    transform: translate(0,-18px);
    margin-left: 18px;
    /*left: 18px;*/
    /*top: -18px;*/
  }
  .useravatar-wrap{
    width: 176px;
    height: 176px;
    padding: 4px;
    border-radius: 8px;
    background-color: white;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
  }
  .useravatar-img{
    position: absolute;
  }
  .useravatar-dialog{
    width: 168px;
    height: 168px;
    background-color: rgba(0,0,0,0);
    position: absolute;
    z-index: 2003;
    color: white;
    font-size: 15px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: .5s;
  }
  .useravatar-dialog:hover{
    background-color: rgba(0,0,0,.4);
    transition: .5s;
    opacity: 1;
  }
</style>
