
<template>
  <div>
    <h1>我是父亲</h1>
    <son @sonSay="fromSon"></son>
    <h2>这是来自儿子的话： {{msg}}</h2>
  </div>

</template>

<script>
  import son from '../components/son.vue'

  const debug = require('debug')('father')

  export default {
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      fromSon (res) {
        debug('这里是父亲打印的来自儿子的话', res)
        this.msg = res
      }
    },
    components: {
      son
    }
  }
</script>

<style>

</style>
