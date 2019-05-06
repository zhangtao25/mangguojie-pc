<template>
  <div id="home">
    <el-table :data="tData">
      <el-table-column label="状态" prop="state">
        <template slot-scope="scope">
          <span class="te" :style="{backgroundColor:scope.row.state}"></span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        tData:[
          {'state':'blue','name':'zt',age:12},
          {'state':'red','name':'zt',age:12},
          {'state':'green','name':'zt',age:12}
        ]
      }
    }
  }
</script>
<style>
  .te{
    display: block;height: 8px;width: 8px;
  }
</style>
