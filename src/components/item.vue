<template>
  <div class='item'>
    <img class='pic' src='http://wx.qlogo.cn/mmopen/qE9MKluetOntzRtRbNltRhIpicn8ktDDNbTPiaGCv1CrIFrdcW67s0gr4cRG2z79LFt6wNGBddjOAOL3xUaPczDQ/0' alt=''>
    <div class='operate'>
      <button class='sub' @click='removeFromCart(item, this)'></button>
      <span>{{total}}</span>
      <button class='add' @click='addToCart(item, this)'></button>
    </div>
    <div class="title">{{item.title}}</div>
    <div class="rating">{{item.rating}}</div>
    <div class="price">{{item.price}}</div>
  </div>
</template>

<script>

  // 添加到购物车
  let addToCart = (item, self) => {
    return ++self.total;
  }

  // 从购物车移除
  let removeFromCart = (item, self) => {
    return self.total > 0 ? --self.total : 0;
  }

  export default {
    props: ['item'],
    data () {
      return {
        total: 0
      }
    },
    created () {
      this.item.rating = '★★★★★☆☆☆☆☆'.substring(5 - this.item.rating, 10 - this.item.rating);
      this.item.price = '￥' + this.item.price;
    },
    methods: {
      addToCart,
      removeFromCart
    }
  }

</script>

<style lang='stylus'>

.item
  padding: 15px
  padding-left: 65px
  border-bottom: 1px solid #dfd9d3
  position: relative
  height: 50px
  line-height: 1

  > .pic
    position: absolute
    left: 10px
    max-width: 40px
    max-height: 40px

  > .title 
    font-size: (16 / 14)rem

  > .operate
    float: right
    margin-top: 30px
    line-height: 22px

    button
      border: none
      width: 22px
      height: 22px
      vertical-align: top

      background-size: 100%
      background-repeat: no-repeat
      background-color: transparent
  

    .add
      background-image: url(/src/assets/images/add.png)

    .sub
      background-image: url(/src/assets/images/sub.png)      
</style>