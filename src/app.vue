<template>
  <comp-header></comp-header>
  <view></view>
  <!-- <h1>{{ title }}</h1> -->
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
