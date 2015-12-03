<template>
  <aside class="navbar">
    <nav>
    	<ul>
        <li v-for="(k, v) in ROUTE_MAP">
          <a v-link="{ path: k }">{{v}}</a>
        </li>
    	</ul>
    </nav>
  </aside>
</template>

<script>

  const ROUTE_MAP = {
    '/list/hot': '热咖啡',
    '/list/ice': '冰咖啡',
    '/list/frappuccino': '星冰乐',
    '/about': '测试'
  }
    
  export default {
    data() {
      return {
        ROUTE_MAP
      }
    }
  }

</script>

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
