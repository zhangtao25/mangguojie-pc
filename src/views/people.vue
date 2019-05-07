<template>
  <div id="people">
    <!--<div class="margin">-->
      <profile-header></profile-header>
    <!--</div>-->
  </div>
</template>
<script>
  import ProfileHeader from './people/profile-header'
  export default {
    components:{
      'profile-header': ProfileHeader,
    },
    mounted() {
    }
  }
</script>
<style>
  /*#people{*/
    /*background-color: #f6f6f6;*/
    /*overflow: hidden;*/
  /*}*/
  /*#people .margin{*/
    /*width: 1000px;*/
    /*margin: 60px auto 0;*/
  /*}*/
</style>
