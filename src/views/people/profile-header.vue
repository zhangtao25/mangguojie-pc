<template>
  <div class="profile-header">
    <user-cover-editor></user-cover-editor>
    <div class="profile-header-main">
      <user-avatar-editor></user-avatar-editor>
      <profile-header-content></profile-header-content>
    </div>
  </div>
</template>
<script>
  import UserCoverEditor from './profile-header/user-cover-editor'
  import UserAvatarEditor from './profile-header/user-avatar-editor'
  import ProfileHeaderContent from './profile-header/profile-header-content'
  export default {
    components:{
      'user-cover-editor': UserCoverEditor,
      'user-avatar-editor': UserAvatarEditor,
      'profile-header-content': ProfileHeaderContent
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
  .profile-header-main{
    display: flex;
    background-color: white;
  }
</style>
