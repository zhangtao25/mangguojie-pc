<style>
  .t{
    background-color: skyblue;height: 20px;
    margin-top: 10px;
    break-inside: avoid;
  }
</style>
<template>
  <div>
    <ul style="column-count: 4; column-gap: 10px;">
      <li class="t" :style="{height:item.h+'px',background:item.rgb}" v-for="(item,index) of testArr">1</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        testArr:[]
      }
    },
    mounted(){
      this.getrandom()
    },
    methods:{
      getrandom(){
        for (let i=0;i<30;i++){

          let r = Math.floor(Math.random()*255)
          let g = Math.floor(Math.random()*255)
          let b = Math.floor(Math.random()*255)

          this.testArr.push({
            h:Math.floor(Math.random()*200+400),
            rgb:`rgb(${r},${g},${b})`
          })
        }
      }
    }
  }
</script>
