<template>
   <div style="height:100%;width:100%;" ref="echarts"></div>
</template>

<script>
import echarts from "echarts";
import datajson from "../data/tree.json";

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
      var myChart = echarts.init(this.$refs.echarts);
      // 绘制图表
      myChart.setOption({
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [datajson],

                top: '1%',
                left: '23%',
                bottom: '1%',
                right: '20%',

                symbolSize: 10,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    color:'white',
                    fontSize: 10
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },
                emphasis:{
                     itemStyle:{
                       color:"red"
                     },
                     lineStyle:{
                       color:"red",
                       width:2.5,
                     },
                     label:{
                      show:true,
                     }
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
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