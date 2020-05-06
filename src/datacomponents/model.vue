<template>
    <div style="height:15%;width:15%;">
        <div style="height:100%;width:100%;" ref="echarts"></div>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
    name:"",
    props:{
        chartData:{
            type:Array,
            default:()=>[]
        }
    },
    data(){
        return{

        }
    },
    methods:{
      drawChart () {
      const vm = this
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echarts)

      // 绘制图表
      myChart.setOption({
        title: {
          text: ' '
        },
        tooltip: {},
        xAxis: {
          data: this.chartData
        },
        yAxis: {},
        series: [

        ]
      })
    }  
    },
    mounted:function(){
        const vm = this
        vm.$nextTick(()=> {
            vm.drawChart()
      })        
    }
}
</script>

<style scoped>

</style>