<template>
  <div id="app">
    <Toolbar></Toolbar>
    <!-- url 주소에 따라 결과 화면 뿌려줌 -->
    <router-view></router-view>
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
</style>
