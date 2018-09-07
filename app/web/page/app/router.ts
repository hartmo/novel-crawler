import Vue from 'vue';

import VueRouter from 'vue-router';
import indexView from './index/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/app',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexView
    },
  ]
});

export default router;