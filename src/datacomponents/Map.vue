<template>
  <div style="height:100%;width:100%;">
    <div style="height:100%;width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import world from "../lib/world.js";

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
      var geoCoordMap = {
        上海: [121.4648, 31.2891],
        北京: [116.4551, 40.2539],
        广州: [113.5107, 23.2196],
        莆田: [119.2733, 24.596],
        柏林: [113.5107, 23.2196],
        华盛顿: [-77.0218, 38.537],
        柏林: [13.2512, 52.3025],
        杭州: [119.5313, 29.8773],
        南京: [118.8062, 31.9208],
        哈尔滨: [127.9688, 45.368],
        长沙: [113.0823, 28.2568],
        乌鲁木齐: [87.9236, 43.5883],
        悉尼: [151.124, -33.5135],
        成都: [103.9526, 30.7617],
        昆明: [102.9199, 25.4663],
        新德里: [77.1203, 28.362],
        伦敦: [0.152, 51.3025],
        罗马: [14.296, 41.293],
        莫斯科: [37.356, 55.456],
        巴黎: [2.2012, 48.5139],
        东京: [139.462, 35.426],
        开罗: [31.1458, 30.0353],
        旧金山: [-122.25, 37.48],
        里约热内卢: [-43.1147, -22.543],
        开普敦: [19.2569, -33.5526],
        渥太华: [-73.5896, 45.2016],
        新加坡: [103.5123, 1.1859]
      };
      var PTData = [
        [
          {
            name: "莆田"
          },
          {
            name: "莆田",
            value: 200
          }
        ],
        [
          {
            name: "莆田"
          },
          {
            name: "上海",
            value: 120
          }
        ],
        [
          {
            name: "莆田"
          },
          {
            name: "广州",
            value: 80
          }
        ],
        [
          {
            name: "莆田"
          },
          {
            name: "华盛顿",
            value: 120
          }
        ],
        [
          {
            name: "莆田"
          },
          {
            name: "柏林",
            value: 80
          }
        ],
        [
          {
            name: "莆田"
          },
          {
            name: "新加坡",
            value: 80
          }
        ]
      ];
      var SHData = [
        // [
        //   {
        //     name: "上海"
        //   },
        //   {
        //     name: "上海",
        //     value: 100
        //   }
        // ],
        [
          {
            name: "上海"
          },
          {
            name: "北京",
            value: 60
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "长沙",
            value: 120
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "乌鲁木齐",
            value: 140
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "哈尔滨",
            value: 120
          }
        ],
        [
          {
            name: "上海"
          },
          {
            name: "东京",
            value: 120
          }
        ]
      ];
      var GZData = [
        // [
        //   {
        //     name: "广州"
        //   },
        //   {
        //     name: "广州",
        //     value: 100
        //   }
        // ],
        [
          {
            name: "广州"
          },
          {
            name: "新德里",
            value: 60
          }
        ],
        [
          {
            name: "广州"
          },
          {
            name: "昆明",
            value: 60
          }
        ],
        [
          {
            name: "广州"
          },
          {
            name: "悉尼",
            value: 120
          }
        ],
        [
          {
            name: "广州"
          },
          {
            name: "成都",
            value: 140
          }
        ],
        [
          {
            name: "广州"
          },
          {
            name: "成都",
            value: 140
          }
        ]
      ];
      var BLData = [
        // [
        //   {
        //     name: "柏林"
        //   },
        //   {
        //     name: "柏林",
        //     value: 100
        //   }
        // ],
        [
          {
            name: "柏林"
          },
          {
            name: "伦敦",
            value: 60
          }
        ],
        [
          {
            name: "柏林"
          },
          {
            name: "巴黎",
            value: 60
          }
        ],
        [
          {
            name: "柏林"
          },
          {
            name: "罗马",
            value: 120
          }
        ],
        [
          {
            name: "柏林"
          },
          {
            name: "莫斯科",
            value: 140
          }
        ]
      ];
      var WSDData = [
        // [
        //   {
        //     name: "华盛顿"
        //   },
        //   {
        //     name: "华盛顿",
        //     value: 100
        //   }
        // ],
        [
          {
            name: "华盛顿"
          },
          {
            name: "旧金山",
            value: 60
          }
        ],
        [
          {
            name: "华盛顿"
          },
          {
            name: "里约热内卢",
            value: 60
          }
        ],
        [
          {
            name: "华盛顿"
          },
          {
            name: "开普敦",
            value: 120
          }
        ],
        [
          {
            name: "华盛顿"
          },
          {
            name: "开罗",
            value: 140
          }
        ],
        [
          {
            name: "华盛顿"
          },
          {
            name: "渥太华",
            value: 140
          }
        ]
      ];
      var planePath =
        "path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705";

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push([
              {
                coord: fromCoord
              },
              {
                coord: toCoord
              }
            ]);
          }
        }
        return res;
      };
      var color = ["rgba(255,0,0,0.6)", "rgba(0,255,0,0.6)", "rgba(122,255,255,0.6)", "rgba(255,128,0,0.6)", "rgba(255,122,122,0.6)"];
      var series1 = [];
      [
        ["莆田", PTData],
        ["上海", SHData],
        ["广州", GZData],
        ["柏林", BLData],
        ["华盛顿", WSDData]
      ].forEach(function(item, i) {
        series1.push(
          {
            name: item[0],
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "#fff",
              symbolSize: 3
            },
            lineStyle: {
              normal: {
                color: "#3ed4ff",
                width: 0,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0],
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 2,
                opacity: 0.4,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0],
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
                fontSize: 16,
                fontWeight:800,
                fontFamily:"Arial, Helvetica, sans-serif",
              }
            },
            symbolSize: function(val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: color[i]
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value:
                  geoCoordMap[dataItem[1].name] != undefined
                    ? geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    : 0
              };
            })
          }
        );
      });
      // 绘制图表
      myChart.setOption({
        geo: {
          map: "world",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "rgba(0,255,255,.02)", 
              borderColor: "#00ffff", 
              borderWidth: 1.5,
              shadowColor: "#00ffff",
              shadowOffsetX: 0,
              shadowOffsetY: 2,
              shadowBlur: 20
            },
            emphasis: {
              areaColor: "#0b1c2d"
            }
          },
          aspectScale: 1, //长宽比
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [
            //画布设置，左上角经纬度和右下角经纬度
            [-140, 80],
            [160, -50]
          ]
        },
        series: series1
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