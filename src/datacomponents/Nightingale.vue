<template>
  <div>
    <div style="height:300px;width:300px;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "Nightingale",
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

      // 绘制图表
      myChart.setOption({
        backgroundColor: "Transparent",
        title: {
          text: "机台运行状态",
          left: "25%",
          textStyle: {
            color: "white",
            fontFamily: "sans-serif"
          }
        },
        tooltip: {},
        series: [
          {
            name: "机台运行状态",
            type: "pie",
            radius: [20, 80],
            data: [
              { value: 235, name: "超前" },
              { value: 153, name: "滞后" },
              { value: 56, name: "计划" },
              { value: 65, name: "停机" },
              { value: 38, name: "断开" }
            ],
            roseType: "angle",
            label: {
            //     normal:{
            //   fontStyle:"normal",
            //   fontWeight:"bolder",
            //   fontSize:20                    
            //     }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  width: 2
                }
              }
            },
            minAngle: "5",
            minShowLabelAngel: "5",
            tooltip: {
              formatter: "{b}<hr/>{c}台 ({d}%)"
            },
            label: {
              alignTo: "labelLine"
            }
          }
        ],
        color: ["green", "blue", "yellow", "red", "pink"]
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