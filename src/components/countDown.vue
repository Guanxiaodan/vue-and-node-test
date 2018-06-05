
<template>
  <div>
    <span style="color: red">{{days}}</span>
    <span>{{hours}}</span>
    <span>:</span>
    <span>{{mins}}</span>
    <span>:</span>
    <span>{{sec}}</span>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        sec: 0,
        mins: 0,
        hours: 0,
        days: 0,
        hourAll: 0,
        cache: null
      }
    },
    props: {
      time: {
        type: Number
      }
    },
    methods: {
      times (time) {
        console.log('函数执行了', time)
        const that = this
        this.cache = time
        const timer = setInterval(function () {
          console.log('timer cache:', timer, that.cache)
          if (time <= 0) {
            clearInterval(timer)
            console.log('清理之后timer', timer)
          }
          that.hourAll = Math.floor(time / 3600)
          that.mins = Math.floor(time / 60) - Math.floor(time / 3600) * 60
          that.sec = time % 60
          that.days = Math.floor(Math.floor(time / 3600) / 24)
          that.hours = Math.floor(time / 3600) % 24
          time--
        }, 1000)
      }
    },
    mounted () {
      this.times(this.time)
    }
  }
</script>

<style>

</style>
