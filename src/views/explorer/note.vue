<style>
  .note{
    break-inside: avoid;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    cursor: pointer;
    position: relative;
    margin-bottom: 30px;
  }
  .note img{
    width: 100%;
    margin-right: 14px;
  }

  .note .bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 15px 13px 15px;
    color: #555;
  }

  .note .title{
    color: #000;
    font-size: 16px;
    overflow: initial;
    white-space: initial;
    font-weight: normal;
    margin: 12px 15px;
    line-height: 23px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .note .user{
    display: flex;
    align-items: center;
  }
  .note .user>img{
    width: 30px;
    border-radius: 50%;
  }
  .note .mask-layer{
    background-color: rgba(0,2,4,0);
  }
  .note:hover .mask-layer{
    width: 100%;
    height: 100%;
    background-color: rgba(0,2,4,.2);
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
<template>
  <div class="note">
    <div class="top">
      <img :src="noteData.cover.url" alt="">
      <p class="title">{{noteData.title}}</p>
    </div>

    <div class="bottom">
      <div class="user">
        <img :src="noteData.user.image" alt="">
        <span>{{noteData.user.nickname}}</span>
      </div>

      <div class="like">
        <i></i>
        <span>{{noteData.likes}}</span>
      </div>
    </div>

    <div class="mask-layer"></div>
  </div>
</template>
<script>
  export default {
    props:['noteData']
  }
</script>
