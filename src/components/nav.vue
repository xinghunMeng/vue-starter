<template>
  <aside class="navbar">
    <nav>
    	<ul class="uk-navbar-nav">
    	  <li><a v-link="{ path: '/' }">Home</a></li>
    	  <li><a v-link="{ path: '/about' }">About</a></li>
    	</ul>
    </nav>
  </aside>
</template>

<style lang='stylus'>

  aside.navbar
    position: absolute
    left: 0

    width: 78px
    height: 100%
    background: #f5f0eb
  
    ul
      height: 100%

    ul li
      height: 44px
      line-height: 44px
      text-align: center

</style>
