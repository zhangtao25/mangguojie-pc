<template>
  <div id="write">
    <el-input type="textarea"></el-input>
    <el-upload
            class="upload-demo"
            ref="upload"
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :http-request="fn">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button>上传</el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        fileList: []
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      fn(e){
        console.log(e)
        let formData = new FormData();
        formData.append('fileUpload1',e.file);
        axios.post('/api/userinfo/write',formData).then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>
