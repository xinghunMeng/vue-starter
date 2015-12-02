<template>
  <aside class="uk-navbar">
  	<ul class="uk-navbar-nav">
  	  <li><a v-link="{ path: '/' }">Home</a></li>
  	  <li><a v-link="{ path: '/about' }">About</a></li>
  	</ul>
  </nav>
</template>

<style lang='stylus'>
  aside
    width: 78px;
    background: #f5f0eb;
    float: left;
  /*header h1
    text-align: center
    height: 40px
    line-height: 40px

  header nav
    height: 72px
    background: #f5f0eb*/

</style>
