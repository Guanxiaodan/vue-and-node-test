
<template>
  <div>
    <countDown :time="time1"></countDown>
    <countDown :time="time2"></countDown>
    <countDown :time="time3"></countDown>
    <countDown :time="time4"></countDown>
    <countDown :time="time5"></countDown>

  </div>


</template>

<script>
  const countDown = require('../components/countDown.vue')

  export default {
    data () {
      return {
        time1: 8,
        time5: 29,
        time4: 2,
        time3: 21,
        time2: 5
      }
    },
    components: {
      countDown
    }
  }
</script>

<style>
  li {
    list-style: none;
  }
</style>
