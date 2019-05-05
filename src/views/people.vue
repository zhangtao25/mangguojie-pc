<template>
  <div id="people">
    <profile-header></profile-header>
    <TestZttr></TestZttr>
    <!--<VueImageCropUpload></VueImageCropUpload>-->
    <!--<a class="btn" @click="toggleShow">set avatar</a>-->
    <!--<VueImageCropUpload></VueImageCropUpload>-->
    <!--<img :src="imgDataUrl">-->
    <!--1038 1120 1805 0015 13-->
  </div>
</template>
<script>
  import ProfileHeader from './people/profile-header'
  // import {TestZttr} from 'test-zttr'
  import VueImageCropUpload from 'vue-image-crop-upload'
  export default {
    components:{
      'profile-header': ProfileHeader,
      // 'TestZttr': TestZttr,
      'VueImageCropUpload':VueImageCropUpload
    },
    mounted() {
      // console.log(TestZttr)
    }
  }
</script>
<style>

</style>
