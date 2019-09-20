

var app = new Vue({
  el: "#app",
  data: {
    classInfo: classInfo,
    classDetails: classDetails,
    tablesAllData: tablesData.slice(0, 5),
    showAllTables: false,
    ecahrtsData: ecahrtsData,
    showcode: true,
    allUserNumber: allUserNumber
  },
  methods: {
    changeSelectionFun: function() {
      window.location.href = "more.html"
    },
    showAllTablse: function () {
      this.tablesAllData = tablesData;
      this.showAllTables = true;
    },
    echartsCanvas: function () {
      let that = this;
      var myChart = echarts.init(this.$refs.echarts);
      var option = {
        title: {
          text: '累计使用',
          subtext: that.allUserNumber,
          left: 'center',
          top: '52%',
          textStyle: {
            color: '#909090',
            fontSize: 30,
            fontWeight: 400
          },
          subtextStyle: {
            color: '#031f2d',
            fontSize: 37,
            fontWeight: 400
          }
        },
        textStyle: {
          fontSize: 24,
        },
        color: ['#FFBA43', '#FA6700', '#FF5858', '#DC91FF', '#DB5DCB', '#FF9C77', '#7ACE4C', '#16D9B2', '#2878FF', '#7460EE', '#11A0F8'],
        legend: {
          itemGap: 20,
          top: '10'
        },
        series: [
          {
            type: 'pie',
            radius: [100, 130],
            center: ['50%', '60%'],
            data: that.ecahrtsData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              show: true,
              formatter: function (item) {
                return item.name + " " + item.value + " 次";
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
})

document.querySelector('#app').style.display = 'block';
app.echartsCanvas();