<template>
  <div class="app-container">
    <template>
      <dv-border-box-11 title="系统监控" :style="'width: auto;height:' +windowHeight+'px'">
      </dv-border-box-11>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: document.documentElement.clientHeight * 0.9
    }
  },
  created() {
  },
  watch:{
    windowHeight (val) {
      let that = this;
      console.log("实时屏幕高度：",val, that.windowHeight );
    },
  },
  mounted() {
    const _this = this
    window.onresize = () => {
      return (() => {
        console.log("==============")
        window.fullHeight = document.documentElement.clientHeight
        _this.windowHeight = window.fullHeight* 0.9
      })()
    }
  },
  methods: {}
}
</script>
<style lang="scss">
</style>
