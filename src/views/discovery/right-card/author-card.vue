<style>
  .author-card{
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 14px;
  }
  .author-card h3{
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
  }
  .author-card .author-info{
    display: flex;
    padding: 10px 20px;
  }

  .author-card .author-info>img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 14px;
  }

  .author-card .author-name{
    font-size: 16px;
  }

  .author-card .brief{
    color: #999;
  }

  .author-card .card-info>ul{
    display: flex;
    justify-content: space-between;
    margin: 0 20px 10px 20px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }
  .author-card .card-info>ul>li>p:nth-child(1){
    color: #999;
  }
</style>
<template>
  <div class="author-card">
    <h3>笔记作者</h3>
    <div class="author-info">
      <img src="https://img.xiaohongshu.com/avatar/5c164b16c42a150001e2ea66.jpg@80w_80h_90q_1e_1c_1x.jpg" alt="">
      <div>
        <p class="author-name">{{noteViewData.NoteView.noteInfo.user.nickname}}</p>
        <p class="brief">个性签名</p>
      </div>
    </div>
    <div class="card-info">
      <ul>
        <li>
          <p>笔记</p>
          <p>{{noteViewData.NoteView.noteInfo.user.notes}}</p>
        </li>
        <li>
          <p>粉丝</p>
          <p>{{noteViewData.NoteView.noteInfo.user.fans}}</p>
        </li>
        <li>
          <p>点赞数</p>
          <p>{{noteViewData.NoteView.noteInfo.user.liked}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props:['noteViewData']
  }
</script>
