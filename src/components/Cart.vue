<template>
  <div class="cart">
    <span class='price'>￥76</span>
    <span class='desc'>(含2元配送)</span>
    <button class='submit'>选好了</button>
  </div>
</template>

<script>

  export default {
    data () {
      return {
      }
    }
  }

</script>

<style lang='stylus'>

.cart
  width: 100%
  height: 44px
  background: #333
  line-height: 44px
  position: fixed
  bottom: 0
  z-index: 9
  
  .price
    margin-left: 15px
    font-size: (18 / 14)rem
    color: #fff

  .desc
    font-size: (12/ 14)rem
    color: #fff

  .submit
    float: right
    background: #ffe600
    border: none
    width: 130px
    text-align: center
    font-size: (16 / 14)rem
    vertical-align: top

</style>