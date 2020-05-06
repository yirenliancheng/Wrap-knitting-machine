<template>
    <div class="h-container h-font">
        <div class="h-float">
            <div class="h-imgdiv">
            <img src="../assets/微信二维码.jpg" class="h-img">                
            </div>
            <p style="margin-top:5px;">我的微信</p>
        </div>
        <div class="h-text"> 
            <h3>站点声明：</h3>
            <p class="p-text">本站所有内容均为作者设计，允许借鉴，但是不能用于商业用途目的。</p>
            <h3>友情链接：</h3>
            <p class="p-text1"><a href="https://github.com/yirenliancheng">
               <div class="a-div"></div>GitHub 个人主页</a></p>
            <p class="p-text1"><a href="https://blog.csdn.net/weixin_44287121">
               <div class="a-div2"></div>CSDN 个人博客</a></p>
            <p>版权所有 © 忆人恋城   上海市东华大学机械工程学院</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
.h-container{
    width: 800px;
    height: 150px;
}
.h-font{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.h-float{
    float: left;
    margin-right: 100px;
}
.h-imgdiv{
    width: 120px;
    height: 120px;
    background-color: white;  
    display: flex;
    justify-content: center;
    align-items: center;  
}
.h-text{
    text-align: left;
    line-height: 1.5rem;
}
.h-img{
    width: 100px;
    height: 100px;
    object-fit: fill;
}
.p-text{
    text-indent: 2rem;
}
.p-text1{
    text-indent: 0.5rem;
}
a:-webkit-any-link{
    color:#999;
    text-decoration: none;
}
a:hover{
    color:#ccff00;
}
.a-div{
    background-image: url(../assets/github.jpg);
    width: 20px;
    height:20px;
    background-size: contain;
    float: left;
    margin-left: 2rem;
    opacity: 0.5;
}
.a-div2{
    background-image: url(../assets/csdn.jpg);
    width: 40px;
    height:20px;
    background-size: contain;
    float: left;
    margin-left: 2rem;
    opacity: 0.5;
}
</style>