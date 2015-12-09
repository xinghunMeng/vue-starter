<template>
  <div>
    <item :item="item" v-for="item in itemList"></item>
    <cart></cart>
  </div>
</template>

<script>
  import Item from './Item.vue'
  import Router from 'vue-router'
  import Cart from './Cart.vue'

  // TODO: 测试数据
  // let itemList = []

  export default {
    data () {
      return {
        itemList: [],
        bill: []
        // menus: []
      }
    },
    components: {
      Item,
      Cart
    },
    route: {
      data ({ to }) {

        let category = to.params.category;

        // console.log('在这里初始化数据，List route: ', to);
        // this.menus = App.menus;


        this.itemList = [{
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
        }]
      }
    }
    // created () {

    //   // 路由参数：分类
    //   var category = this.$route.params.category
    //   console.log('--- list component created.', category)

    //   // TODO: 这里其实是请求
    //   setTimeout(() => {

    //     itemList.map((v) => {
    //       v.title += category

    //       return v
    //     });

    //     this.itemList = itemList
        
    //   }, 0);
    // }
  }
</script>