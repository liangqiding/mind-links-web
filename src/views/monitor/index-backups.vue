<template>
  <div class="app-container">
    <!--      <dv-border-box-11 title="系统监控" :style="'width: auto;height:' +windowHeight+'px'">-->
    <!--      </dv-border-box-11>-->
    <div id="main" style="width: 500px;height: 500px">
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      windowHeight: document.documentElement.clientHeight * 0.9,
      series: [
        {
          type: 'gauge',
          progress: {
            show: true,
            width: 18
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 20
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10
            }
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '70%']
          },
          data: [
            {
              value: 70
            }
          ]
        }
      ]
    }
  },
  created() {
  },
  watch: {
    windowHeight(val) {
      let that = this;
      console.log("实时屏幕高度：", val, that.windowHeight);
    },
  },
  mounted() {
    const _this = this
    // window.onresize = () => {
    //   return (() => {
    //     console.log("==============")
    //     window.fullHeight = document.documentElement.clientHeight
    //     _this.windowHeight = window.fullHeight * 0.9
    //   })()
    // }
    this.init()
  },
  methods: {
    init() {
      var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
}
</script>
<style lang="scss">
</style>
