<template>
  <div class="profile-header">
    <div class="user-cover">
      <!--<img style="width: 100%" src="./../../assets/user_bg.jpg" alt="">-->
      <user-cover-editor></user-cover-editor>
    </div>
  </div>
</template>
<script>
  import UserCoverEditor from './profile-header/user-cover-editor'
  export default {
    components:{
      'user-cover-editor': UserCoverEditor
    }
  }
</script>
