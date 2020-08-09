<template>
  <div style="width:25%;height:25%;">
    <div style="width:100%;height:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "Bar",
  props: {
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echarts);

      // 绘制图表
      myChart.setOption({
    title: {
        text: '停机事件瀑布图',
        left: "25%",
          textStyle: {
            color: "white",
            fontFamily: "sans-serif"
          }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['断面纱','断连接纱', '断底纱', '换织针','上轴', '了机', '设备检修'],
        textStyle:{
          color:"white",
          fontSize:12
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: function () {
            var list = [];
            var timer=new Date();
            var tyear=timer.getFullYear();
            var tmonth=timer.getMonth();
            var tday=timer.getDate();

            // if 
            // // for (var i = 1; i <= 7; i++) {
            // //     while(day>=1)
            // //     list.push(month+'月' + day+ '日');
            // // }
            // return list;
        }()
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ]
      });
    }
  },
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scoped>
</style>