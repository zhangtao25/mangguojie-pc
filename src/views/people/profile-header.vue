<template>
  <div class="profile-header">
    <user-cover-editor></user-cover-editor>
    <user-avatar-editor></user-avatar-editor>
  </div>
</template>
<script>
  import UserCoverEditor from './profile-header/user-cover-editor'
  import UserAvatarEditor from './profile-header/user-avatar-editor'
  export default {
    components:{
      'user-cover-editor': UserCoverEditor,
      'user-avatar-editor': UserAvatarEditor
    },
    data(){
      return{
      }
    },
    methods:{

    }
  }
</script>
<style>
  .profile-header{
    position: relative;
  }
</style>
