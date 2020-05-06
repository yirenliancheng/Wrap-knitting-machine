<template>
<el-container>
  <el-header height="100px">
      <HomeHeader/>
      <Nav/>
  </el-header>
  <el-main style="height:1080px" class="h-flex">
    <Bar/>
    <Nightingale/>
  </el-main>
</el-container>
</template>

<script>
import HomeHeader from "../components/Header.vue";
import Nav from "../components/Nav.vue";
import Bar from "../datacomponents/Bar.vue";
import Nightingale from "../datacomponents/Nightingale.vue";

export default {
    name:"DataVisualization",
    components:{
        HomeHeader,
        Nav,
        Bar,
        Nightingale
    },
    // data(){
    //  activeIndex2:"3",
    // }
}
</script>

<style scoped>
.el-header {
  background: #2b2f33;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  z-index: 20;
}
.el-main {
  text-align: center;
  width: 100%;
  position: relative;
  top: 100px;
  left: 0;
  margin:0;
  padding: 0;
}
.h-flex{
  display: flex;
  justify-content: space-around;
  background-image: url(../assets/科技感数据几何背景11.jpg);
}
</style>