<template>
  <div class="container">
    <h1>表格组件</h1>
    <div>
      <h2>例子一：最简单的table，只有表头和数据</h2>
      <tables :title="egOne.title" :allData="egOne.tableData"></tables>
    </div>
    <div>
      <h2>例子二：带操作的表格</h2>
      <tables :title="egTwo.title" :allData="egTwo.tableData" :operateArr="egTwo.operate"></tables>
    </div>
  </div>
</template>

<script>
  import tables from '../components/tables.vue'

  export default {
    data () {
      return {
        egOne: {
          title: ['试题名称', '得分/总分', '答题用时', '答题时间'],
          tableData: [
            {
              examName: '期末语文考试',
              score: '97/100',
              during: '2 hours',
              date: '2018-01-10 12:30'
            },
            {
              examName: '期末数学考试',
              score: '90/100',
              during: '1.5 hours',
              date: '2018-01-11 12:30'
            }
          ]
        },
        egTwo: {
          title: ['试题名称', '得分/总分', '答题用时', '答题时间', '操作'],
          tableData: [
            {
              examName: '期末语文考试',
              score: '97/100',
              during: '2 hours',
              date: '2018-01-10 12:30'
            },
            {
              examName: '期末数学考试',
              score: '90/100',
              during: '1.5 hours',
              date: '2018-01-11 12:30'
            },
            {
              examName: '期末英语考试',
              score: '83/100',
              during: '1.5 hours',
              date: '2018-01-12 14:00'
            }
          ],
          operate: [{
            operateTitle: '删除',
            operateFn: (index, item) => {
              this.egTwo.tableData.splice(index, 1)
            }
          }]
        }
      }
    },
    components: {
      tables
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    text-align: left;
  }

  .container {
    box-sizing: border-box;
  }
</style>
