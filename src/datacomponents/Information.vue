<template>
  <div class="h-container">
    <dv-border-box-4>
      <div class="h-Iflex">
        <dv-digital-flop :config="config1" class="h-div" />
        <dv-digital-flop :config="config2" class="h-div" />
        <dv-digital-flop :config="config3" class="h-div" />
        <dv-digital-flop :config="config4" class="h-div" />
        <dv-digital-flop :config="config5" class="h-div" />
        <dv-digital-flop :config="config6" class="h-div" />
        <dv-digital-flop :config="config7" class="h-div" />
        <dv-digital-flop :config="config8" class="h-div" style="text-align:left;"/>
        <dv-digital-flop :config="config9" class="h-div" />
        <dv-digital-flop :config="config10" class="h-div" />
        <dv-digital-flop :config="config11" class="h-div" />
        <dv-digital-flop :config="config12" class="h-div" />
        <dv-digital-flop :config="config13" style="width:50%;height:20%;" />          
      </div>
    </dv-border-box-4>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: {},
  data() {
    return {
      config1: {
        number: [179],
        content: "机台编号: {nt}号",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow",
        }
      },
      config2: {
        number: [14.5],
        content: "牵拉密度: {nt}",
        textAlign:"left",
        toFixed: 2,
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      },
      config3: {
        number: [17.23],
        content: "卷布密度: {nt}",
        textAlign:"left",
        toFixed: 2,
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      }, 
      config4: {
        number: [443],
        content: "主轴转速: {nt}r/min",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      },
        config5: {
        number: [159],
        content: "计划产量: {nt}米",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      },
        config6: {
        number: [103],
        content: "当前产量: {nt}米",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      },
        config7: {
        number: [64.77],
        content: "当前进度: {nt}%",
        textAlign:"left",
        toFixed:2,
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      },
        config8: {
        number: [3],
        content: "停机次数: {nt}次",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow",
          textAlign:"start"
        }
      }, 
        config9: {
        number: [89.26],
        content: "开机效率: {nt}%",
        textAlign:"left",
        toFixed:2,
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      }, 
      config10: {
        content: "挡车工人: 王永华",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      }, 
        config11: {
        content: "胚布型号: BJS0005B",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      },  
      config12: {
        number:["2020-07-23"],
        content: "生产交期: {nt}",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      }, 
        config13: {
        content: "机台型号: 屹立普通7梳JP01C",
        textAlign:"left",
        style: {
          fontSize: 20,
          fill: "yellow"
        }
      },          
        
    };
  }
};
</script>

<style scoped>
.h-container{
  width: 700px;
  height: 320px;
}
.h-Iflex {
  display: flex;
  align-content: stretch;
  flex-wrap: wrap;
  width: 650px;
  height: 280px; 
  position: relative;
  top:20px;
  left:50px;
}
.h-div {
  width: 32%;
  height: 20%;
}
</style>