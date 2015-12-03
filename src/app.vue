<template>
  <comp-header></comp-header>
  <view></view>
</template>

<script>

/**
 * Module dependencies.
 */
import CompHeader from './components/header.vue'
import View from './components/view.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    CompHeader,
    View
  }
}
</script>

<style lang="stylus">
  @require './styles/style'
</style>
