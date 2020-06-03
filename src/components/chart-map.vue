<template>
  <div class="map">
    <div ref="map" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script>
  import china from 'echarts/map/json/china.json'
  export default {
    name: 'chart-map',
    props: {
      mapData: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        chart: null,
        option: {
          visualMap: {
            show: false,
            min: 0,
            max: 400,
            inRange: {
              color: ['#84affc', '#3c80fa', '#0e63f9', '#064fd3', '#043da4', '#032c76']
            }
          },
          series: [
            {
              name: '',
              type: 'map',
              map: 'china',
              zoom: 1.2,
              data: this.mapData
            }
          ]
        }
      }
    },
    mounted() {
      this.$chart.registerMap('china', china)
      this.chart = this.$chart.init(this.$refs.map)
      this.chart.setOption(this.option)
    }
  }
</script>

<style lang="less" scoped>
  .map {
    width: 100%;
    height: 100%;
  }
</style>
