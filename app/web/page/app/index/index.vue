<template>
  <div class="index">
    {{msg}}
  </div>
</template>
<style lang="scss">
  @import "./index.scss";
</style>
<script type="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data(){
      return {
        msg:'首页啊'
      }
    },
    computed:{
    },
    mounted(){
    }
  });
</script>
