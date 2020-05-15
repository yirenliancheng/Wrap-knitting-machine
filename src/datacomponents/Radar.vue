<template>
    <div  style="height:320px;width:300px;" ref="echarts"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Rader",
  props: {
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echarts);
      var dataTotal = [[83.36, 88.26, 86.21, 63.58, 11.83]];
      var data3 = [[60.36, 79.26, 66.21, 96.25, 17.83]];
      var data7 = [[93.36, 96.26, 93.21, 50.58, 9.83]];
      var data11 = [[28.36, 60.36, 89.21, 77.25, 12.35]];
      var data15 = [[76.36, 39.26, 75.21, 82.58, 43.83]];
      var lineStyle = {
        normal: {
          width: 2,
          opacity: 0.5
        }
      };
      // 绘制图表
      myChart.setOption({
        title: {
          text: "车间进度雷达图",
          left: "center",
          textStyle: {
            color: "white"
          }
        },
        tooltip: {},
        legend: {
          bottom: 2,
          data: ["总览", "3号车间", "7号车间", "11号车间", "15号车间"],
          itemGap: 20,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
        },
        radar: {
          indicator: [
            { name: "开机率", max: 100 },
            { name: "进度", max: 100 },
            { name: "良品率", max: 100 },
            { name: "OEE", max: 100 },
            { name: "故障率", max: 100 }
          ],
          shape: "circle",
          splitNumber: 5,
          splitSize:10,
          radius:80,
          name: {
            textStyle: {
              color: "white",
              fontSize:16,
              fontWeight:500,
            }
          },
          splitLine: {
            lineStyle: {
              width:2,
              color: [
                "rgba(238, 197, 102, 0.1)",
                "rgba(238, 197, 102, 0.2)",
                "rgba(238, 197, 102, 0.4)",
                "rgba(238, 197, 102, 0.6)",
                "rgba(238, 197, 102, 0.8)",
                "rgba(238, 197, 102, 1)"
              ]
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 1)"
            }
          }
        },
        series: [
          {
            name: "总览",
            type: "radar",
            lineStyle: lineStyle,
            data: dataTotal,
            symbol: "none",
            itemStyle: {
              color: "maroon",
            },
            areaStyle: {
              opacity: 0.2
            },
          },
          {
            name: "3号车间",
            type: "radar",
            lineStyle: lineStyle,
            data: data3,
            symbol: "none",
            itemStyle: {
              color: "green"
            },
            areaStyle: {
              opacity: 0.2
            }
          },
          {
            name: "7号车间",
            type: "radar",
            lineStyle: lineStyle,
            data: data7,
            symbol: "none",
            itemStyle: {
              color: "yellow"
            },
            areaStyle: {
              opacity: 0.2
            }
          },
          {
            name: "11号车间",
            type: "radar",
            lineStyle: lineStyle,
            data: data11,
            symbol: "none",
            itemStyle: {
              color: "red"
            },
            areaStyle: {
              opacity: 0.2
            }
          },
          {
            name: "15号车间",
            type: "radar",
            lineStyle: lineStyle,
            data: data15,
            symbol: "none",
            itemStyle: {
              color: "blue"
            },
            areaStyle: {
              opacity: 0.2
            }
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
  }
};
</script>

<style scoped>
</style>