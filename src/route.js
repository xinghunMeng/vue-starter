import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'

import About from './components/about.vue'
import List from './components/list.vue'

Vue.use(Router);
var router = new Router();

router.map({
  '/': {
    component: List
  },
  '/list/:category': {
    component: List
  },
  '/about': {
    component: About
  }
});

router.start(App, '#app');