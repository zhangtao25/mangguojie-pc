<template>
  <div>
    <VueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            style="height: 240px"
    ></VueCropper>
    <a :href="downImg" download="demo.png" ref="downloadDom"></a>
    <el-button @click="fn">sss</el-button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        option:{
          img:'http://localhost:3000/test.jpg',
          size:0.5,
          outputSize:0.5,
          outputType:'png'
        },
        downImg:''
      }
    },
    methods:{
      fn(){
        this.$refs.cropper.getCropBlob(data => {
          this.downImg = window.URL.createObjectURL(data);
          if (window.navigator.msSaveBlob) {
            var blobObject = new Blob([data]);
            window.navigator.msSaveBlob(blobObject, "demo.png");
          } else {
            this.$nextTick(() => {
              this.$refs.downloadDom.click();
            });
          }
        });
      }
    }
  }
</script>
