<style scoped>
  .col-3 {
    float: left;
    width: 27.33%;
    /* margin: 40px 3%; */
    position: relative;
  }
  input[type="text"] {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }
  :focus {
    outline: none;
  }
  .effect-9 {
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
  }
  .effect-9 ~ .focus-border:before,
  .effect-9 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.2s;
    transition-delay: 0.2s;
  }

  .effect-9 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }

  .effect-9 ~ .focus-border i:before,
  .effect-9 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.2s;
  }

  .effect-9 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }

  .effect-9:focus ~ .focus-border:before,
  .effect-9:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
  }

  .effect-9:focus ~ .focus-border:after {
    transition-delay: 0.2s;
  }

  .effect-9:focus ~ .focus-border i:before,
  .effect-9:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.2s;
  }

  .effect-9:focus ~ .focus-border i:after {
    transition-delay: 0.4s;
  }
</style>


<template>

  <div class="col-3">
    <input class="effect-9" type="text" :placeholder="holder" v-model="value" v-on:input="updateValue">
    <span class="focus-border"><i></i></span>
  </div>
</template>


<script>

  export default{
    data () {
      return {
        value: ''
      }
    },
    components: {},
    props: {
      holder: {
        default: '请输入内容',
        type: String
      }
    },
    methods: {
      updateValue () {
        this.$emit('input', this.value)
      }
    },
    async created () {},
    mounted () {}
  }
</script>
