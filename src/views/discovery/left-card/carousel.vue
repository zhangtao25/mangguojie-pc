<template>
  <div class="carousel">
    <el-carousel indicator-position="outside" height="500px">
      <el-carousel-item v-for="(item,index) in noteViewData.NoteView.noteInfo.images" :key="index">
        <img style="width: 100%;border-radius: 4px" :src="item.original" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    props:['noteViewData']
  }
</script>
