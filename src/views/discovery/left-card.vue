<style>
  .left-card{
    width: 500px;
  }

</style>
<template>
  <div class="left-card">
    <carousel :note-view-data="noteViewData"></carousel>
    <div class="content">
    </div>
    <operation-block :note-view-data="noteViewData"></operation-block>
  </div>
</template>
<script>
  import Carousel from './left-card/carousel'
  import OperationBlock from './left-card/operation-block'
  export default {
    props:['noteViewData'],
    components:{
      'carousel': Carousel,
      'operation-block': OperationBlock
    }
  }
</script>
