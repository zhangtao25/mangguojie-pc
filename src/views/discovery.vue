<style>
  #discovery>.margin{
    width: 850px;
    height: 1000px;
    /*border: 1px solid salmon;*/
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }
</style>
<template>
  <div id="discovery" class="card-note">
    <div class="margin" v-if="isRender">
      <left-card :note-view-data="noteViewData"></left-card>
      <right-card :note-view-data="noteViewData"></right-card>
    </div>
  </div>
</template>
<script>
  import LeftCard from './discovery/left-card'
  import RightCard from './discovery/right-card'
  import axios from 'axios'
  export default {
    components:{
      'left-card': LeftCard,
      'right-card': RightCard
    },
    data(){
      return{
        noteViewData:{NoteView:{}},
        isRender:false
      }
    },
    mounted(){
      axios.get('/noteDetail.json').then(res=>{
        console.log(this.$route.query.id)
        let id = this.$route.query.id
        let arr = res.data.arr
        for (let i=0;i<arr.length;i++){
          if (id==arr[i]['noteInfo']['id']){
            this.noteViewData.NoteView = arr[i]
            this.isRender = true
          }
        }
      })

    }
  }
</script>
