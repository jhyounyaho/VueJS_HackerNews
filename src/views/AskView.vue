<template>
  <div>
    <p v-for="item in ask" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      ask: state => state.ask,
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>