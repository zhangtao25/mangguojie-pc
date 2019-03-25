<style>
  :root{
    --main-color: #409EFF
  }
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    mounted() {
      // axios.get('/api/users').then(res=>{
      //   console.log(res)
      // })
    }
  }
</script>
