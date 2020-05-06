<template>
  <el-container>
    <el-header height="100px">
      <HomeHeader />
      <Nav />
    </el-header>
    <el-main>
      <Carousel/>
    </el-main>
    <el-footer height="200px">
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script>
import HomeHeader from "../components/Header.vue";
import Nav from "../components/Nav.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    Nav,
    Carousel,
    Footer
  }
};
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
.el-footer {
  background-color: #242a37;
  color: #999;
  text-align: center;
  padding: 0;
  margin:0;
  position: relative;
  top:110px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>