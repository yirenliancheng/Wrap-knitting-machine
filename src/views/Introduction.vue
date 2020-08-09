<template>
<el-container>
  <el-header height="100px">
      <HomeHeader/>
      <Nav/>
  </el-header>
  <el-container class="h-container">
    <el-aside width="300px">
        <NavAside/>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
import HomeHeader from "../components/Header.vue";
import Nav from "../components/Nav.vue";
import NavAside from "../components/NavAside.vue";

export default {
   name:"Introduction",
   components:{
       HomeHeader,
       Nav,
       NavAside
   }
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
  .el-aside {
    background-color: white;
    color: #333;
    text-align: center;
    height: 100%;
    position:fixed;
    top:100px;
    left: 0px;
  }
    .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
  }
  .h-container{
      position: relative;
      top:100px;
      left:0px;
  }
</style>