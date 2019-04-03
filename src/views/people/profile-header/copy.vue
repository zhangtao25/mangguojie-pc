<template>
  <div class="user-cover-editor">
    <div class="user-cover-wrap">
      <img style="width: 100%" :src="user_cover" alt="">
      <input type="file" name="file" @change="onChange" v-show="false" ref="coverFile">
      <el-button class="editor-btn" @click="onEditor">编辑封面图片</el-button>
    </div>
    <div class="dialog" v-show="isShow">
      <div class="editor">
        <canvas
                id="userCoverCanvas"
                width="1000"
                height="240"
                @mousedown="onMouseDown"
                @mousemove="onMouseMove"
                @mouseup="onMouseUp"
                @mouseleave="onMouseLeave"
        ></canvas>
      </div>
      <ul class="action">
        <li>
          <p>调整图片尺寸与位置</p>
          <p>遮罩覆盖区域在移动端设备上可能会被裁切</p>
        </li>
        <li>
          <div class="block" style="width: 300px">
            <el-slider v-model="scale"></el-slider>
          </div>
        </li>
        <li>
          <el-button @click="onSave">保存</el-button>
          <el-button @click="isShow=false">取消</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Userservice from './../../../service/user'
  import UserinfoService from './../../../service/userinfo'
  export default {
    data() {
      return {
        isShow:false,
        user_cover:'',
        canvas:{},
        scale: 50,
        ctx: {},
        img: {},
        isDown: false,
        XY:{x:0, y:0},
        startXY:{x:0, y:0},
        endXY:{x:0, y:0}
      }
    },
    mounted() {
      Userservice.getUserInfo().then(res=>{
        console.log(res)
        this.user_cover = res.user_cover
      })
    },
    methods: {
      loadImg(imgBase) {
        this.canvas = document.getElementById("userCoverCanvas");
        if (this.canvas.getContext) {
          this.ctx = this.canvas.getContext("2d");
        }
        this.img = new Image();
        this.img.src = imgBase;
        this.img.onload = () => {
          this.drawImage(this.XY.x+this.endXY.x,this.XY.y+this.endXY.y);
        };
      },
      drawImage(x,y) {
        this.ctx.clearRect(0, 0, 1000, 240);
        this.ctx.drawImage(
            this.img,
            0, 0,
            this.img.width, this.img.height,
            x,y,
            this.img.width*this.scale/100, this.img.height*this.scale/100
        );
      },
      onMouseDown(e){
        this.isDown = true;
        this.startXY.x = e.offsetX;
        this.startXY.y = e.offsetY;
      },
      onMouseMove(e){
        if (this.isDown){
          console.log(e.offsetX,e.offsetY)
          this.XY.x = e.offsetX-this.startXY.x;
          this.XY.y = e.offsetY-this.startXY.y;
          this.drawImage(this.XY.x+this.endXY.x,this.XY.y+this.endXY.y);
        }
      },
      onMouseUp(){
        this.endXY.x = this.XY.x+this.endXY.x;
        this.endXY.y = this.XY.y+this.endXY.y;
        this.isDown = false;
      },
      onMouseLeave(){
        this.endXY.x = this.XY.x+this.endXY.x;
        this.endXY.y = this.XY.y+this.endXY.y;
        this.isDown = false;
      },
      onEditor(){
        this.$refs.coverFile.click();
      },
      onChange(){
        let self = this
        let reads= new FileReader();
        let f=this.$refs.coverFile.files[0];
        reads.readAsDataURL(f);
        reads.onload= function(e){
          self.loadImg(this.result);
          self.isShow=true;
        };
      },
      onSave(){
        UserinfoService.updateUserCover({user_cover:this.canvas.toDataURL()}).then(res=>{
          console.log(res)
        })
      }
    },
    watch:{
      scale(){
        this.drawImage(this.endXY.x,this.endXY.y);
      }
    }
  }
</script>
<style>
  .user-cover-editor {
    position: relative;
  }

  .user-cover-editor > .user-cover-wrap .editor-btn {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .dialog{
    background-color: white;
    position: absolute;
    top: 0;
  }
  .action {
    display: flex;
    justify-content: space-between;
  }
</style>
