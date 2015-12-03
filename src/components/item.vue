<template>
  <div class="item">
    <img class="pic" src="http://wx.qlogo.cn/mmopen/qE9MKluetOntzRtRbNltRhIpicn8ktDDNbTPiaGCv1CrIFrdcW67s0gr4cRG2z79LFt6wNGBddjOAOL3xUaPczDQ/0" alt="">
    <div class="title">{{item.title}}</div>
    <div class="rating">{{item.rating}}</div>
    <div class="price">{{item.price}}</div>
    <div class="operate">+</div>
  </div>
</template>

<script>

  export default {
    props: ['item'],
    activate: function(done) {
      this.item.rating = '★★★★★☆☆☆☆☆'.substring(5 - this.item.rating, 10 - this.item.rating);
      done();
    },
    data () {
      return {
      }
    }
  }

</script>

<style lang='stylus'>

.item
  padding: 10px 15px 10px 143px
  border-bottom: 1px solid #dfd9d3
  position: relative
  height: 120px

  > .pic
    position: absolute
    left: 10px
    max-width: 120px
    max-height: 120px

  > .title 
    font-size: 1.5rem

</style>