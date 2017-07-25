
<template>
  <div>
    键盘事件
    <input type="text" @keyup.enter="ok" @on-blur="oks">
  </div>


</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      ok () {
        console.log('监听到键盘函数了')
      },
      oks () {
        console.log('监听到onblur函数了')
      }
    }
  }
</script>

<style>
  li {
    list-style: none;
  }
</style>
