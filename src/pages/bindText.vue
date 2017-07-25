
<template>
  <div>
    <span>出不来吗</span>
    <span v-bind:data="msg"></span>
  </div>


</template>

<script>
  export default {
    data () {
      return {
        msg: '内容'
      }
    },
    methods: {

    }
  }
</script>

<style>
  li {
    list-style: none;
  }
</style>
