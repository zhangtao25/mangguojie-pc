<template>
  <div class="profile-header">
    <user-cover-editor></user-cover-editor>
    <div style="display: flex">
      <user-avatar-editor></user-avatar-editor>
      <profile-content></profile-content>
    </div>
  </div>
</template>
<script>
  import UserCoverEditor from './profile-header/user-cover-editor'
  import UserAvatarEditor from './profile-header/user-avatar-editor'
  import ProfileContent from './profile-header/profile-content'
  export default {
    components:{
      'user-cover-editor': UserCoverEditor,
      'user-avatar-editor': UserAvatarEditor,
      'profile-content': ProfileContent
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
