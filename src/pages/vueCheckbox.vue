
<template>
  <div>
    <p>{{choosed}}</p>
    <ul>
      <li v-for="m in msg">
        <input type="checkbox"  :value="m" v-model="choosed">{{m}}
      </li>
    </ul>
  </div>


</template>

<script>
  export default {
    data () {
      return {
        msg: ['荔枝', '西瓜', '樱桃', '蓝莓', '木瓜', '芒果', '香橙', '桂圆', '红龙果', '香蕉'],
        choosed: []
      }
    }
  }
</script>

<style>
  li {
    list-style: none;
  }
</style>
