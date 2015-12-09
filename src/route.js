import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import About from './components/About.vue';
import List from './components/List.vue';

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

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/'
});

router.start(App, '#app');