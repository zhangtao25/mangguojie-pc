<style>
  .right-card{
    width: 320px;
  }
</style>
<template>
  <div class="right-card">
    <author-card :note-view-data="noteViewData"></author-card>
    <panel-card :note-view-data="noteViewData"></panel-card>
  </div>
</template>
<script>
  import AuthorCard from './right-card/author-card'
  import PanelCard from './right-card/panel-card'
  export default {
    components:{
      'author-card': AuthorCard,
      'panel-card': PanelCard
    },
    props:['noteViewData']
  }
</script>
