<template>
  <div>
    <div @click="notice('提示一')">提示一</div>
    <div @click="notice('提示二')">提示二</div>
    <div @click="notice('提示三')">提示三</div>
    <div class="notice" v-if="message !== ''">{{message}}</div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      /*
      * 还不够完善，还有问题
      * */
      notice (msg) {
        const that = this
        var timeId = ''
        const timeFn = function () {
          timeId = setTimeout(function () {
            that.message = ''
          }, 3000)
        }
        if (!this.message) {
          this.message = msg
          timeFn()
        } else {
          clearTimeout(timeId)
          this.message = msg
          timeFn()
        }
      }
    }
  }
</script>

<style>
  .notice {
    width: 100%;
    font-size: 20px;
    color: deeppink;
  }
</style>
