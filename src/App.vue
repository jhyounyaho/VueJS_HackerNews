<template>
  <div id="app">
    <Toolbar></Toolbar>
    <!-- url 주소에 따라 결과 화면 뿌려줌 -->
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';

export default {
  components: {
    Toolbar,
  },
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }

  /* Router Transition */
  .page-enter-active, .page-leave-active {
    transition: opacity .3s ease;
  }
  .page-enter, .page-leave-to
  /* .page-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
