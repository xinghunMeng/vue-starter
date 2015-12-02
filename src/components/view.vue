<template>
  <div>
    <comp-nav></comp-nav>
    <router-view></router-view>
  </div>
  <!-- <nav class="uk-navbar">
  	<ul class="uk-navbar-nav">
  	  <li><a v-link="{ path: '/' }">Home</a></li>
  	  <li><a v-link="{ path: '/about' }">About</a></li>
  	</ul>
  </nav> -->
</template>

<script>
  import CompNav from './nav.vue'

  export default {
    data () {
      return {
        // title: 'Hello world'
      }
    },
    components: {
      CompNav
    }
  }



</script>