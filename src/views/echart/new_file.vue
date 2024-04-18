<template>
  <div id="charts" style="width: 600px; height: 400px"></div>
</template>

<script>
export default {
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const charts = this.$echarts.init(document.getElementById('charts'));
      const option = {
        title: {
          text: '逐月消费趋势', // 标题
          subtext: '柱状图' // 副标题
        },
        color: ['#1890ff', '#52c41a', '#faad14'], // 柱状图颜色
        dataset: {
          source: [ // 数据源
            ['月份', '项目1', '项目2', '项目3'],
            ['1月', 1330, 666, 560],
            ['2月', 820, 760, 660],
            ['3月', 1290, 1230, 780],
            ['4月', 832, 450, 890],
            ['5月', 901, 880, 360],
            ['6月', 934, 600, 700]
          ]
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          { type: 'bar', stack: 'total', name: '苹果' },
          { type: 'bar', stack: 'total', name: '梨子' },
          { type: 'bar', stack: 'total', name: '桃子' }
        ],
        tooltip: { // 提示框组件
          trigger: 'axis'
        }
      };
      charts.setOption(option);
    }
  }
};
</script>

<style scoped>
/* 在这里添加样式，如果需要的话 */
</style>
