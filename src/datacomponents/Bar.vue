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
      //   count:1
    };
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
          text: "柱状图",
          left: "40%",
          textStyle: {
            color: "white"
          }
        },
        tooltip: {},
        xAxis: {
          data: this.chartData,
          axisLine: {
            lineStyle: {
              color: "white"
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "white"
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: "价格",
            type: "bar",
            data: [25, 15, 9, 32, 42, 26]
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