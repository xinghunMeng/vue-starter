<template>
  <div class='wrapper'>
    <comp-nav></comp-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import CompNav from './nav.vue'

  export default {
    data () {
      return {}
    },
    components: {
      CompNav
    }
  }
</script>

<style lang='stylus'>
  
  .wrapper
    padding-left: 80px

</style>