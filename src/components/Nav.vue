<template>
<div>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color=Transparent
  text-color=white
  active-text-color=#ccff00>
  <el-menu-item index="1" @click="homeClick">首页</el-menu-item>
  <el-menu-item index="2" @click="introductionClick">文档</el-menu-item>
  <el-menu-item index="3" @click="datavClick">经编数据可视化</el-menu-item>
  <el-menu-item index="4" @click="aiClick">AI调度算法</el-menu-item>
  <el-menu-item index="5" @click="aboutClick">作者简介</el-menu-item>
  </el-menu>
  </div>

</template>

<script>
export default {
    name:'Nav',
    data(){
        return {
            activeIndex2:"1",
        }
    },
    methods:{
      homeClick(){
          this.activeIndex2="1";
          this.$router.push("/Home").catch(err => {err});
      },
      introductionClick(){
          this.activeIndex2="2";
          this.$router.push("/Introduction").catch(err => {err});
      },
      datavClick(){
          //先验证登录的状态，再决定是哪个路由
          console.log(this.$store.state.loadFlag)
          if(this.$store.state.loadFlag==true){
              this.activeIndex2="3";
              this.$router.push("/DataVisualization").catch(err => {err});  
          }else{
              this.$router.push("/Loading");
          }
      },
      aiClick(){
          this.activeIndex2="4";
          this.$router.push("/AIalgorithm").catch(err => {err});
      },
      aboutClick(){
          this.activeIndex2="5";
          this.$router.push("/About").catch(err => {err}); 
      },
    }
}
</script>

<style scoped>
   div{
       display: flex;
       justify-content: center;
       align-items: center;
   }
</style>