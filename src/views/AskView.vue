<template>
  <div>
    <div v-for="item in ask" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      ask: [],
    }
  },
  created() {
    fetchAskList()
      .then(res => this.ask = res.data)
      .catch(err => console.log(err))
  },
}
</script>

<style>

</style>