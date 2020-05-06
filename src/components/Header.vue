<template>
  <div class="h-font">
    <div class="h-image">
    </div>
    <div class="h-float">面向经编数字化车间的信息系统和生产调度优化研究</div>
    <div class="h-user">
      <el-avatar icon="el-icon-user-solid" size="small" :src="url" fit="fill"></el-avatar>
      <el-button type="text" class="h-span" @click="Load">登录</el-button>
      <el-button type="text" class="h-span" @click="unLoad">注销</el-button>
    </div>
  </div>
</template>

<script>
import Load from "./Load.vue"

export default {
    name:'HomeHeader',
    components:{
        Load
    },
    data(){
      return {
        url:require("../assets/头像.png"),
        loadVisible:false,
      }
    },
    methods:{
      Load(){
        this.$router.push("/Loading")
      },
      unLoad(){
        this.$store.commit('unload');
      }
    }
}
</script>

<style scoped>
  .h-font{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight:bolder;
    font-size:1rem;
    height: 39px;
    border-bottom:solid 1px white;
    display: flex;
    align-items: center;
   }
   .h-image{
     width:20px;
     height: 20px;
     background-image: url("../assets/屹立logo.jpg");
     background-size:contain;
     float:left;
     margin-left: 200px;
   }
  .h-float{
    margin-left:10px;
  }
  .h-span{
    margin-left: 20px;
    color: white;
  }
  .h-span:hover{
    color:#ccff00;
  }
  .h-user{
    position: relative;
    right:-50%;
    display: flex;
    align-items: center;
  }
</style>