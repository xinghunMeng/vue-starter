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

      // 路由参数：分类
      var category = this.$route.params.category

      console.log('--- list component created.', category)

      // TODO: 这里其实是请求
      setTimeout(() => {

        itemList.map((v) => {

          v.title += category
          return v
        });

        console.log('--- category : hot')

        this.itemList = itemList
        
      }, 0);
    }
  }
</script>