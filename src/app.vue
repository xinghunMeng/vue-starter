<template>
  <comp-header></comp-header>
  <router-view></router-view>
</template>

<script>

/**
 * Module dependencies.
 */
import CompHeader from './components/Header.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    CompHeader
  }
}
</script>

<style lang="stylus">
  @require './styles/layout'
</style>
