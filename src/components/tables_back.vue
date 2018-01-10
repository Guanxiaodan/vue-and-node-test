<template>
  <div>
    <table ref="table" class="tables" border="0" cellspacing="0" cellpadding="0" width="100%">
      <thead>
      <tr>
        <th v-for="titleItem in title" :key="titleItem">{{titleItem}}</th>
      </tr>
      </thead>
      <tbody>
      <!--列表-->
      <tr v-for="(item, index) in pageData" :key="index">
        <td width="200" v-for="value in item" :key="value">
          {{value}}
        </td>
        <td v-if="operate.havaOperate" style="display: flex;flex-direction: row; justify-content: space-around;">
          <div class="btn" v-for="operat in operate.operateArr" @click="operat.operateFn">{{operat.operateTitle}}</div>
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
    <div class="page" :style="{marginTop: pageMarginTop+'px'}" ref="page">
      <Page v-if="perPageCount!==0 && allData.length>0" :page-size="perPageCount" :total="allData.length"
            @on-change="changePage" style="text-align: center;"></Page>
    </div>
  </div>
</template>

<script>
  /**
   * 注意：
   * title和allData中对象的键值对相对位置要保持一致，所以用这个组件一般情况下获取到数据后是要重新整合数据的
   * 基于iview(主要是分页的部分)
   * 表格目前的缺陷是不能设置每一列的宽度，现在是等分的
   * eg: <tables :title="sub.title" :allData="sub.giveToTable" :perPageCount="8" ></tables>
   * */

  /* eslint-disable no-trailing-spaces,object-shorthand */

  const _ = require('lodash')
  const debug = require('debug')('table')

  export default {
    data () {
      return {
        curPage: 1,
        pageData: [],
        pageMarginTop: 0
      }
    },
    props: {
      title: { // 表格表头
        type: Array,
        default: [],
        require: true
      },
      allData: { // 表格展示数据
        type: Array,
        default: []
      },
      perPageCount: { // 表格每页展示多少条数据， 如果没传，就不设置分页
        type: Number,
        default: 0
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
      }
    },
    methods: {
      // 点击分页,划分每页数据
      changePage (page) {
        this.curPage = page
        const startItem = (page - 1) * this.perPageCount
        const endItem = ((page - 1) * this.perPageCount) + this.perPageCount
        this.pageData = _.slice(this.allData, startItem, endItem)
        debug('本页数据,第几页', this.pageData, this.curPage)
      }
    },
    watch: {
      allData () {
        this.pageData = _.slice(this.allData, 0, this.perPageCount)
        setTimeout(() => {
          const hei = this.$refs.table.offsetHeight
          this.pageMarginTop = hei + 50
          debug('分页marginTop', this.pageMarginTop)
        }, 100)
      }
    },
    created () {
      if (this.perPageCount === 0) {
        this.pageData = this.allData
      }
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

  .page {
    position: absolute;
    width: 100%;
  }
</style>
