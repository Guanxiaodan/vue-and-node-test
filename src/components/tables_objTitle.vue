<template>
  <div>
    <table ref="table" class="tables" border="0" cellspacing="0" cellpadding="0" width="100%">
      <thead>
      <tr>
        <th v-for="titleItem in column" :key="titleItem.title">{{titleItem.title}}</th>
      </tr>
      </thead>
      <tbody>
      <!--列表-->
      <tr v-for="(item, index) in allData" :key="index">
        <td width="200" v-for="value in column" :key="value.key" v-if="item[value.key]">
          {{item[value.key]}}
        </td>

        <td v-else>
          <div class="btn" v-for="operat in operateArr" @click="operat.operateFn(index, item)">{{operat.operateTitle}}</div>
        </td>
      </tr>
      <!--暂无数据-->
      <tr v-if="allData.length === 0">
        <td :colspan="title.length" style="text-align: center;">
          <span>暂无数据</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  /**
   * 注意：
   * 表格目前的缺陷是不能设置每一列的宽度，现在是等分的
   * eg: <titles :column="egOne.title" :allData="egOne.tableData"></titles>
   * */

  /* eslint-disable no-trailing-spaces,object-shorthand */

  //  const _ = require('lodash')
  //  const debug = require('debug')('table')

  export default {
    data () {
      return {}
    },
    props: {
      column: { // 表格表头
        type: Array,
        default: [],
        require: true
      },
      allData: { // 表格展示数据
        type: Array,
        default: []
      },
      operate: { // 对表格数据的操作
        type: Object,
        default () {
          return {
            havaOperate: false,
            operateArr: [
              {
                operateTitle: '',
                operateFn: () => {
                }
              }
            ]
          }
        }
      },
      operateArr: { // 对表格数据的操作,返回该条数据的索引和值
        type: Array,
        default () {
          return [
            {
              operateTitle: '',
              operateFn: () => {
              }
            }
          ]
        }
      }
    },
    methods: {},
    created () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tables {
    border: 1px solid #e9eaec;
    /*position: absolute;*/
  }

  .tables .no-left {
    border-left: none;
  }

  .tables tr {
    height: 3rem;
    background: white;
    max-height: 80px;
    transition: all 0.5s;
  }

  .tables tr:hover {
    background: rgb(235, 247, 255);
  }

  .tables th {
    background: #f8f8f9;
    border-left: 1px solid #e9eaec;
    /*padding-left: 1.2rem;*/
    text-align: center;
  }

  .tables td {
    padding-right: 1.2rem;
    padding-left: 1.2rem;
    border-left: 1px solid #e9eaec;
    border-top: 1px solid #e9eaec;
  }

  .btn {
    color: #54c0f7;
    cursor: pointer;
  }
</style>
