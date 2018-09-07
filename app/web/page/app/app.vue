<template>
  <Layout>
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </Layout>
</template>
<style lang="scss">
  @import "../style/global.scss";
</style>
<script type="ts">
import clientRender from 'client';
import router from './router';
import serverRender from 'server';
import store from './store/app';
import { sync } from 'vuex-router-sync';

sync(store, router);

export default {
  router,
  store
}
</script>
