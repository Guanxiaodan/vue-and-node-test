
<template>
  <div>
    <h1 @click="sendToFather">我是子组件，点击我向父组件发送一句话</h1>
  </div>

</template>

<script>
  const debug = require('debug')('son')

  export default {
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      sendToFather () {
        debug('点击儿子了')
        this.$emit('sonSay', '爸爸，我考了50分！')
      }
    }
  }
</script>

<style>

</style>
