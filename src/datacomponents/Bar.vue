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