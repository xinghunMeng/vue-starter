<template>
  <div>
    <item :item="item"></item>
  </div>
</template>

<script>
  import Item from './item.vue'

  export default {
    data () {
      return {
        item: {
          title: '馥芮白（超大）',
          rating: 4,
          price: 35
        }
      }
    },
    components: {
      Item
    }
  }
</script>

<style lang='stylus'>
  

</style>