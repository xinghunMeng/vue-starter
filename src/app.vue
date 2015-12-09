<template>
  <comp-header :brand='brand' :menus='menus'></comp-header>
  <router-view></router-view>
</template>

<script>

/**
 * Module dependencies.
 */
import CompHeader from './components/Header.vue';
import Store from './store';
import request from 'superagent';

export default {
  data () {
    return {
      brand: {},
      menus: []
    }
  },
  components: {
    CompHeader
  },
  created () {
    
    let url = '/api/brand/menu/get/hash_id/json/';

    var param = {
      utoken: '',
      wechat_openid: 'osK-xjrdD16J2SugNbYfZjY7HIK0',
      hash_id: 'vjxll4nVsJWZ1FgFjR4g0WZKQBYB7TRa'
    }

    request
      .get(url, param)
      .end((err, res) => {
        console.log('response: ', res);
        console.log('brand: ', res.body.data.brand);
        console.log('menus: ', res.body.data.menus);

        let data = res.body.data;
        
        this.brand = data.brand;
        this.menus = data.menus;
      });      
  }
}
</script>

<style lang="stylus">
  @require './styles/layout'
</style>
