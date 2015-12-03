<template>
  <div>
    <item :item="item" v-for="item in itemList"></item>
  </div>
</template>

<script>
  import Item from './item.vue'

  let itemList = [
    {
      title: '馥芮白（超大）',
      rating: 4,
      price: 35
    },
    {
      title: '馥芮白（中）',
      rating: 5,
      price: 30
    },
    {
      title: '摩卡（大）',
      rating: 0,
      price: 25
    }
  ]

  export default {
    data () {
      return {
        itemList
        // item: item
      }
    },
    components: {
      Item
    }
  }
</script>

<style lang='stylus'>
  

</style>