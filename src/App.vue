<template>
  <div id="app">
    <div class="header">工业互联网重要资源测绘与安全分析平台</div>
    <div class="content">
      <div class="left">
        <chart
          class="block"
          id="leftTop"
          :option="leftTop.option"
          :labels="leftTop.labels"
          @change="leftTopLabelChange"
        />
        <chart
          class="block"
          id="leftCenter"
          :option="leftCenter.option"
          :labels="leftCenter.labels"
          @change="leftCenterLabelChange"
        />
        <chart class="block" id="leftBottom" :option="leftBottom.option" />
      </div>
      <div class="center">
        <chart class="block" id="centerTopLeft" :option="centerTopLeft.option" />
        <div id="centerTopCenter">
          <div class="block">
            中国工控资产：<count-up
              class="count-up"
              :endVal="centerTopCenter.assets"
              :options="centerTopCenter.assets | countUpOption"
            />个
          </div>
          <div class="block">
            工控蜜罐数量：<count-up
              class="count-up"
              :endVal="centerTopCenter.honeypotNum"
              :options="centerTopCenter.honeypotNum | countUpOption"
            />个
          </div>
          <div class="block">
            关联工控漏洞：<count-up
              class="count-up"
              :endVal="centerTopCenter.loophole"
              :options="centerTopCenter.loophole | countUpOption"
            />个
          </div>
        </div>
        <div class="block" id="centerTopRight">
          <div class="data-item">识别工种设备类型数：{{ centerTopRight.type }} 种</div>
          <div class="data-item">识别工种协议数：{{ centerTopRight.agreement }} 种</div>
          <div class="data-item">识别工种设备型号数：{{ centerTopRight.brand }} 种</div>
          <div class="data-item">识别工种漏洞类型：{{ centerTopRight.loopholeType }} 种</div>
          <div class="data-item">识别工种设备品牌数：{{ centerTopRight.model }} 种</div>
          <div class="data-item">识别工种蜜罐类型：{{ centerTopRight.honeypotType }} 种</div>
        </div>
        <chart-map id="map" :map-data="map" />
        <div class="block" id="mapLeftBottom">
          <table class="table">
            <tr>
              <th>国家</th>
              <th>工控数量</th>
            </tr>
            <tr v-for="(item, index) in control" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </table>
        </div>
        <chart class="block" id="centerCenter" :option="centerCenter.option" />
      </div>
      <div class="right">
        <chart class="block" id="rightTop" :option="rightTop.option" />
        <chart class="block" id="rightCenter" :option="rightCenter.option" />
        <div class="block" id="rightBottom">
          <div class="log-title">安全预警日志</div>
          <div class="log-content" v-html="log"></div>
        </div>
      </div>
    </div>
    <div class="footer">版权所有<i>2020</i>&copy;中国工业互联网研究院</div>
  </div>
</template>

<script>
  import Chart from './components/chart.vue'
  import ChartMap from './components/chart-map.vue'
  import CountUp from 'vue-countup-v2'
  import { getChartOption } from './libs/chart_options'
  import { getData, getLabels } from './test'

  export default {
    name: 'App',
    data() {
      return {
        leftTop: {
          option: {},
          labels: {}
        },
        leftCenter: {
          option: {},
          labels: {}
        },
        leftBottom: {
          option: {}
        },
        rightTop: {
          option: {}
        },
        rightCenter: {
          option: {}
        },
        centerCenter: {
          option: {}
        },
        centerTopLeft: {
          option: {}
        },
        centerTopCenter: {},
        centerTopRight: {},
        log: '',
        map: [],
        control: [],
        timer: null
      }
    },
    methods: {
      loadData() {
        this.leftTop.option = getChartOption('leftTop', getData('leftTop'))
        this.leftTop.labels = getLabels('leftTop')
        this.leftCenter.option = getChartOption('leftCenter', getData('leftCenter'))
        this.leftCenter.labels = getLabels('leftCenter')
        this.leftBottom.option = getChartOption('leftBottom', getData('leftBottom'))
        this.rightTop.option = getChartOption('rightTop', getData('rightTop'))
        this.rightCenter.option = getChartOption('rightCenter', getData('rightCenter'))
        this.centerCenter.option = getChartOption('centerCenter', getData('centerCenter'))
        this.centerTopLeft.option = getChartOption('centerTopLeft', getData('centerTopLeft'))
        this.centerTopCenter = getData('centerTopCenter')
        this.centerTopRight = getData('centerTopRight')
        this.map = getData('map')
        this.control = getData('control')
        this.log += getData('log')
        this.$nextTick(() => {
          const logContent = document.getElementsByClassName('log-content')[0]
          logContent.scrollTop = logContent.scrollHeight
        })
      },
      leftTopLabelChange(value) {
        this.leftTop.option = getChartOption('leftTop', getData('leftTop', value))
      },
      leftCenterLabelChange(value) {
        this.leftCenter.option = getChartOption('leftCenter', getData('leftCenter', value))
      }
    },
    created() {
      this.loadData()
      this.timer = setInterval(this.loadData, 5000)
    },
    filters: {
      countUpOption: function(value) {
        return {
          useEasing: true,
          useGrouping: false,
          prefix: '00000'.slice((value + '').length)
        }
      }
    },
    components: {
      Chart,
      ChartMap,
      CountUp
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
  }
  #app {
    width: 1920px;
    height: 1080px;
    display: flex;
    flex-direction: column;
    background: url('./assets/bg.png');
    background-size: cover;
    color: #fff;
  }
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #02234d;
    font-size: 24px;
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 20px;
    .block {
      box-sizing: border-box;
      padding: 10px;
      border: 2px solid #033d77;
      border-radius: 4px;
    }
    .left,
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .block {
        width: 380px;
        height: 300px;
      }
    }
    .center {
      margin: 0 20px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
    }
    #rightBottom {
      .log-title {
        margin-top: 10px;
        top: 0;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
      }
      .log-content {
        height: 80%;
        margin-top: 10px;
        overflow-y: scroll;
        font-size: 16px;
        line-height: 32px;
      }
    }
    #centerCenter {
      width: 1080px;
      height: 230px;
    }
    #centerTopLeft {
      width: 250px;
      height: 170px;
    }
    #centerTopCenter {
      width: 330px;
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      :nth-child(1) {
        color: #ffff00;
      }
      :nth-child(2) {
        color: #ffa500;
      }
      :nth-child(3) {
        color: #ff0000;
      }
      .block {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 14px;
      }
      .count-up {
        width: 160px;
        margin: 0 8px;
        padding: 0 8px;
        display: block;
        font-size: 18px;
        font-weight: bold;
        line-height: 32px;
        letter-spacing: 25px;
        background: linear-gradient(to right, rgba(3, 61, 119, 0.8) 70%, rgba(0, 0, 0, 0) 0);
        background-size: 36px;
      }
    }
    #centerTopRight {
      width: 460px;
      height: 170px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .data-item {
        width: 50%;
        font-size: 14px;
      }
    }
    #map {
      width: 100%;
      height: 500px;
    }
    #mapLeftBottom {
      width: 150px;
      position: absolute;
      bottom: 250px;
      .table {
        width: 100%;
        border-collapse: collapse;
        tr {
          height: 30px;
          border-bottom: 1px dashed #fff;
          font-size: 14px;
          :nth-child(1) {
            color: #fff;
            text-align: left;
          }
          :nth-child(2) {
            color: #fb3;
            text-align: right;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
</style>
