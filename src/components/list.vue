<template>
  <div>
    <item :item="item" v-for="item in itemList"></item>
  </div>
</template>

<script>
  import Item from './item.vue'
  import Router from 'vue-router'

  // TODO: 测试数据
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


  let itemList2 = [
    {
      title: '红茶',
      rating: 1,
      price: 35
    },
    {
      title: '绿茶',
      rating: 5,
      price: 30
    },
    {
      title: '冰红茶',
      rating: 3,
      price: 25
    }
  ]


  export default {
    data () {
      return {
        itemList
      }
    },
    components: {
      Item
    },
    created () {

      // TODO: 这里其实是请求
      setTimeout(() => {

        this.itemList = itemList2

      }, 1000);
    }
  }
</script>