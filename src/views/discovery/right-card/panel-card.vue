<style>
  .panel-card{
    margin-top: 20px;
    border: 1px solid #eee;
    border-radius: 4px;
    cursor: pointer;
    padding-bottom: 9px;
  }
  .panel-card h3{
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
  }
  .panel-card .panel-list{
    height: 400px;
    overflow-y: scroll;
  }
  .panel-card .panel-list li{
    margin: 10px 0 0 20px;
    display: flex;
  }
  .panel-card .panel-list li:hover .content .desc{
    color: #ff2741;
  }
  .panel-card .picture{
    width: 80px;
    height: 80px;
    overflow: hidden;
    background-size: cover;
    margin-right: 10px;
  }
  .panel-card .content{
    width: 190px;
    color: #555;
  }
  .panel-card .content .desc{
    font-size: 14px;
    height: 38px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    margin-right:10px;
    color: #555;
  }
  .panel-card .info{
    margin-top: 17px;
  }
</style>
<template>
  <div class="panel-card">
    <h3>相关笔记</h3>
    <ul class="panel-list">
      <li v-for="(item,index) of noteViewData.NoteView.panelData" :key="index">
        <div class="picture" :style="{backgroundImage:'url('+item.cover.original+')'}">
        </div>
        <div class="content">
          <p class="desc">{{item.title}}</p>
          <div class="info">
            <i>like</i>
            <span>{{item.likes}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:['noteViewData']
  }
</script>
