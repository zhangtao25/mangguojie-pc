<template>
  <div class="user-avatar-editor">
    <div class="useravatar-wrap">
      <img :src="useravatar" style="width: 168px;border-radius: 4px" alt="" @click="onEditClick">
    </div>
    <input type="file" ref="userAvatarFile" @change="onChange" v-show="false">
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
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
        useravatar: 'http://localhost:3000/useravatar/' + localStorage.getItem('user_email') + '.png',
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
        reads.onload = function (e) {
          self.option.img = this.result
        };
      },
      onSaveClick() {
        this.$refs.cropper.getCropData(data => {
          UserinfoService.updateUserAvatar(data).then(res => {
            this.useravatar = 'http://localhost:3000/useravatar/' + localStorage.getItem('user_email') + '.png?t=' + Math.random()
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
    /*z-index: 1999;*/
  }
  .useravatar-wrap{
    width: 168px;
    padding: 4px;
    border-radius: 8px;
    background-color: white;
  }
</style>
