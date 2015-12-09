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

  export default {
    props: ['menus'],
    data () {
      return {
        itemList: [],
        bill: []
      }
    },
    components: {
      Item,
      Cart
    },
    route: {
      data ({ to }) {

        // 默认取第一个列表
        let menuId = to.params.category || 1;

        setTimeout(() => {
          this.itemList = this.menus[menuId - 1].Skus
        }, 0)
      }
    }
  }
</script>