<template>
<el-container>
  <!-- <el-header height="100px">
      <HomeHeader/>
      <Nav/>
  </el-header> -->
  <el-main style="width:100%;height:1080px" class="h-flex">
    
    <Map class="h-fixed"/>
    <div style="height:100%;width:20%;float:left">
      <Tree/>
    </div>
    <div style="height:100%;width:80%;" class="h-dflex">
    <Information/>
    <Nightingale/>
    <Rader/>
    <Candlestick/>
    <Bar/>
    </div>
  </el-main>
</el-container>
</template>

<script>
// import HomeHeader from "../components/Header.vue";
// import Nav from "../components/Nav.vue";
import Nightingale from "../datacomponents/Nightingale.vue";
import Map from "../datacomponents/Map.vue";
import Rader from "../datacomponents/Radar.vue";
import Candlestick from "../datacomponents/Candlestick.vue";
import Tree from "../datacomponents/Tree.vue";
import Information from "../datacomponents/Information.vue";
import Bar from "../datacomponents/Bar.vue"

export default {
    name:"DataVisualization",
    components:{
        // HomeHeader,
        // Nav,
        Nightingale,
        Map,
        Rader,
        Candlestick,
        Tree,
        Information,
        Bar
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
  /* width: 100%; */
  position: relative;
  /* top: 100px; */
  left: 0;
  margin:0;
  padding: 0;
}
.h-flex{
  background-color: #181F4E;
  opacity: 0.8;
  z-index: 0;
}
.h-fixed{
  position: fixed;
  z-index: -1;
  /* opacity: 0.4; */
}
.h-dflex{
  display: flex;
  /* justify-content: space-around; */
  align-content: stretch;
  flex-wrap: wrap;
}
</style>