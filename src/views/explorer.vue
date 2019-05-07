<style>
  #explorer>.margin{
    padding-top: 10px;
    width: 1100px;
    margin: 0 auto;
  }

  #explorer .note-tab{
    display: flex;
    border-bottom: 1px solid #eee
  }
  #explorer .note-tab > li{
    width: 110px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #explorer .note-tab > li > a >i{
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
  }

  /*hover后的样式*/
  #explorer .note-tab > li > a{
    display: inline-block;
    color: #555;
    width: 68px;
    text-align: center;
  }
  #explorer .note-tab > li > a >span{
    height: 30px;
    display: block;
    line-height: 30px;
  }
  #explorer .note-tab > li >a:hover{
    color: #000;
    font-weight: bolder;
  }
  #explorer .note-tab > li >a:hover>i{
    background-color: var(--main-color)
  }
  /*激活后的样式*/
  #explorer .note-tab > li > a.active{
    color: #000;
    font-weight: bolder;
  }
  #explorer .note-tab > li > a.active i {
    background-color: var(--main-color);
  }

  .note-box{
    column-count: 4; column-gap: 30px;
  }
</style>
<template>
  <div id="explorer">
    <div class="margin">
      <ul class="note-tab">
        <li v-for="(item,index) of menuNavArr" :key="index">
          <a :class="{active:index == activeIndex}" @click="onSelectMenu(index)">
            <span>{{item.name}}</span>
            <i></i>
          </a>
        </li>
      </ul>
      <div class="note-box">
        <ul>
          <li v-for="(item,index) of noteData" :key="index" @click="onClickNote(item)">
            <note :note-data="item"></note>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>
<script>
  import Note from './explorer/note'
  import test from './../assets/test-data/noteData'
  import NoteService from './../service/note'

  import axios from 'axios'
  export default {
    components:{
      'note': Note,
    },
    data(){
      return{
        activeIndex: 0,
        menuNavArr:[
          {name:'推荐'},
          {name:'时尚'},
          {name:'美妆'},
          {name:'美食'},
          {name:'运动'},
          {name:'影音'},
          {name:'旅行'},
          {name:'居家'},
          {name:'母婴'},
          {name:'读书'},
          {name:'数码'},
          {name:'时尚男士'},
          {name:'医药'},
          {name:'动漫'}
        ],
        noteData:[],
        noteDetail:[]
      }
    },
    mounted(){
      this.initTest()
    },
    methods:{
      onSelectMenu(index){
        this.activeIndex = index
      },
      initTest(){
        let testData = test.Explore.fourColumnNotes
        let testArr = []
        for (let i=0;i<testData.length;i++){
          for (let j=0;j<testData[i].length;j++){
            testArr.push(testData[i][j])
          }
        }
        this.noteData = testArr
      },
      onClickNote(item){

        this.$router.push({path:'/discovery',query:{id:item.id}})

      }
    }
  }
</script>
