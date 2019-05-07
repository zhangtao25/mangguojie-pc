<style>
  :root{
    --main-color: #409EFF
  }
  #app{
    overflow: hidden;
    background-color: #f6f6f6;
  }
  .margin{
    width: 1000px;
    margin: 60px auto 0;
  }
  .yincang{
    display: none;
  }
</style>
<template>
  <div id="app">
    <app-header :class="{yincang:!isActive}"></app-header>
    <div :class="{'margin':isActive}">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import AppHeader from './components/app-header'
  export default {
    components:{
      'app-header': AppHeader
    },
    mounted(){

    },
    methods:{
    },
    computed:{
      isActive(){
        if(this.$route.path=='/signup'){
          return false
        }else {
          return true
        }
      }
    }
  }
</script>
