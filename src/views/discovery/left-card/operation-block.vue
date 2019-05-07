<template>
  <div class="operation-block">
    <p>
      <i>like</i>
      <span>{{noteViewData.NoteView.noteInfo.likes}}</span>
    </p>

    <p>
      <i>comment</i>
      <span>{{noteViewData.NoteView.noteInfo.comments}}</span>
    </p>

    <p>
      <i>star</i>
      <span>{{noteViewData.NoteView.noteInfo.collects}}</span>
    </p>
  </div>
</template>
<script>
  export default {
    props:['noteViewData']
  }
</script>
