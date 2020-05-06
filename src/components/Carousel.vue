<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="(img,index) in imgList" :key="index"> 
      <img v-bind:src="img.url" class="h-cover"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    name:"Carousel",
    data(){
        return{
            imgList:[
                {url:require("../assets/timg.jpg")},
                {url:require("../assets/banner.jpg")},
                {url:require("../assets/opcua.jpg")},
                {url:require("../assets/datav.png")},
                {url:require("../assets/datathree.png")},
                {url:require("../assets/bp.png")}
            ]
        }
    }
}
</script>

<style scoped>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 10px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .h-cover{
    width: 960px;
    height: 500px;
    object-fit: fill;
  }
</style>