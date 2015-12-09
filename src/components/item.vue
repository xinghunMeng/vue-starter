<template>
  <div class='item'>
    <img class='pic' :src='item.Image' alt=''>
    <div class='operate'>
      <button class='sub' @click='removeFromCart(item, this)'></button>
      <span>{{total}}</span>
      <button class='add' @click='addToCart(item, this)'></button>
    </div>
    <div class="title">{{item.Name}}</div>
    <div class="rating">{{'★★★★★☆☆☆☆☆'.substring(5 - item.Rating / 10, 10 - item.Rating / 10)}}</div>
    <div class="price">
      <span>
        <i>￥</i>
        {{item.UnitPrice / 100}}
      </span>
      <span>/份</span>
    </div>
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
      // this.item.rating = '★★★★★☆☆☆☆☆'.substring(5 - this.item.Rating / 10, 10 - this.item.Rating / 10);
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

  > .rating
    padding-top: 5px
    padding-bottom: 5px

    span
      position: relative
      top: 1px

  > .price
    position: relative
    left: -7px

    > :first-child
      color: #ff6800
      font-size: (16 / 14)rem

      i
        font-style: normal
        font-size: (12 / 14)rem
        position: relative
        top: -1px
        left: 5px

    > :last-child
      color: #999
      font-size: (12 / 14)rem
      position: relative
      top: -1px

  > .operate
    float: right
    margin-top: 30px
    line-height: 22px
    position: relative
    z-index: 1

    button
      border: none
      width: 22px
      height: 22px
      vertical-align: top

      background-size: 100%
      background-repeat: no-repeat
      background-color: transparent
      margin: 0 5px
  
      &:active
        background-color: transparent      

    .add
      background-image: url(/src/assets/images/add.png)

      // 如果使用hover，在ios端这个状态会被保留
      &:active
        background-image: url(/src/assets/images/add_hover.png)        


    .sub
      background-image: url(/src/assets/images/sub.png)

      &:active
        background-image: url(/src/assets/images/sub_hover.png)

</style>