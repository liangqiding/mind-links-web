<template>
  <div class="app-container">
    <div id="main" style="width: 500px;height: 500px">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
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
    }
  },
  created() {
  },
  watch: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const myChart = this.$echarts.init(document.getElementById('main'));
// 绘制图表
      myChart.setOption(this.option);
    }
  }
}
</script>
<style lang="scss">
</style>
