<style>
  :root{
    --main-color: #409EFF
  }
  #app>.container{
    background-color: #F6F6F6;
    padding-top: 62px;
  }
  #app>.container>.margin{
    width: 1000px;
    margin: 0 auto;
  }
</style>
<template>
  <div id="app">
    <top-nav-bar v-if="isRender"></top-nav-bar>
    <div class="container" v-if="isRender">
      <div class="margin">
        <router-view/>
      </div>
    </div>
    <router-view v-if="!isRender"/>
  </div>
</template>
<script>
  // import HeadTop from './components/head-top'
  import TopNavBar from './components/top-nav-bar'
  // import AuthService from './service/auth'
  import {mapActions} from 'vuex'
  export default {
    components:{
      // 'head-top': HeadTop,
      'top-nav-bar': TopNavBar
    },
    mounted(){

    },
    methods:{
      ...mapActions(['setUser','clearUser'])
    },
    computed:{
      isRender(){
        if (this.$route.path == '/signup'){
          return false
        } else {
          return true
        }
      }
    }
  }
</script>
