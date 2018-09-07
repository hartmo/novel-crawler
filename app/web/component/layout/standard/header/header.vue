<template>
  <header class="header">
    <div class="container"><h1>
      <a href="/" class="router-link-active">node爬虫</a></h1>
      <ul class="nav">
        <li class="nav-item"><a href="/" :class="{'active' : selectedMenu === '/'}">首页</a></li>
      </ul>
    </div>
  </header>
</template>
<style>
  @import "./header.css";
</style>
<script type="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data(){
      return {
        selectedMenu : '/'
      }
    },
    computed:{
    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase();
    }
  });
</script>
