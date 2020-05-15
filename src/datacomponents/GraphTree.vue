<template>
  <div>
    <div style="width:500px;height:500px;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "",
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
      var colors = [
        "#00ADD0",
        "#FFA12F",
        "#B62AFF",
        "#604BFF",
        "#6E35FF",
        "#002AFF",
        "#20C0F4",
        "#95F300",
        "#04FDB8",
        "#AF5AFF"
      ];
      var getdata = function getData() {
        let data = {
          name: `经编车间
汇总`,
          value: 0,
          children: []
        };
        let workshops=[3,7,11,15];
        let machineid=[1,3,6,8,9,179,196,197,208,209,300,301,302,303,305,353,355,356,357,358];
        for (let i = 1; i <=4; i++) {
          let obj = {
            name: `${workshops[i-1]}号车间`,
            value: i,
            children: []
          };
          for (let j = 0; j <5; j++) {
              let k=5*(i-1)+j;
            let obj2 = {
              name: `${machineid[k]}号机台`,
              value: k
            };
            obj.children.push(obj2);
          }

          data.children.push(obj);
        }
        let arr = [];
        arr.push(data);
        //
        arr = handle(arr, 0);
        return arr;
      };
      var handle = function handleData(data, index, color = "#00f6ff") {
        //index标识第几层
        return data.map((item, index2) => {
          //计算出颜色
          if (index == 1) {
            color = colors.find((item, eq) => eq == index2 % 10);
          }
          // 设置节点大小
          if (index === 0 || index === 1) {
            item.label = {
              position: "inside"
              //   rotate: 0,
              //   borderRadius: "50%",
            };
          }
          // 设置label大小
          switch (index) {
            case 0:
              item.symbolSize = 70;
              break;
            case 1:
              item.symbolSize = 60;
              break;
            default:
              item.symbolSize = 10;
              break;
          }
          // 设置线条颜色
          item.lineStyle = { color: color };

          if (item.children) {
            //存在子节点
            item.itemStyle = {
              borderColor: color,
              color: color
            };
            item.children = handle(item.children, index + 1, color);
          } else {
            //不存在
            item.itemStyle = {
              color: "transparent",
              borderColor: color
            };
          }
          return item;
        });
      };
      // 绘制图表
      myChart.setOption({
        type: "tree",
        backgroundColor: "Transparent",
        toolbox: {
          //工具栏
          show: true,
          iconStyle: {
            borderColor: "#03ceda"
          },
          feature: {
            restore: {}
          }
        },
        tooltip: {
          //提示框
          trigger: "item",
          triggerOn: "mousemove",
          backgroundColor: "rgba(1,70,86,1)",
          borderColor: "rgba(0,246,255,1)",
          borderWidth: 0.5,
          textStyle: {
            fontSize: 10
          }
        },
        series: [
          {
            type: "tree",
            hoverAnimation: true, //hover样式
            data: getdata(),
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            layout: "radial",
            symbol: "circle",
            symbolSize: 10,
            nodePadding: 20,
            animationDurationUpdate: 750,
            expandAndCollapse: true, //子树折叠和展开的交互，默认打开
            initialTreeDepth: 2,
            //roam: true, 是否开启鼠标缩放和平移漫游。scale/move/true
            focusNodeAdjacency: true,
            itemStyle: {
              borderWidth: 2
            },
            label: {
              //标签样式
              color: "#fff",
              fontSize: 14,
              fontFamily: "SourceHanSansCN",
              position: "inside",
              rotate: 0
            },
            lineStyle: {
              width: 1,
              curveness: 0.5
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