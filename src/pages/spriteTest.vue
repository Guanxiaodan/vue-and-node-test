
<template>
  <div>
    <ul>
      <li class="one">老夫聊发少年狂</li>
      <li class="two">风云变幻</li>
    </ul>
  </div>
</template>

<script>
  /*
  * img标签
  * 2倍图
  * 多文件怎么解决，一个页面一张精灵兔
  * */
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style>
  .one {
    width: 100px;
    height: 100px;
    background: url("../../static/img/sign.png") no-repeat center;
    background-size: contain;
  }
  .two {
    width: 400px;
    height: 400px;
    border: 1px solid pink;
    background: url("../../static/img/getphoto.png") no-repeat center center;
  }
</style>
