<template>
  <div id="top-nav-bar">
    <div class="margin">
      <app-header-inner></app-header-inner>
    </div>
  </div>
</template>
<script>
  import AppHeaderInner from './head-top/app-header-inner'
  export default {
    components:{
      'app-header-inner': AppHeaderInner
    }
  }
</script>
<style>
  #top-nav-bar{
    position: fixed;
    background-color: white;
    width: 100%;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    z-index: 2000;
  }
  #top-nav-bar>.margin{
    width: 1000px;
    margin: 0 auto;
  }
</style>
