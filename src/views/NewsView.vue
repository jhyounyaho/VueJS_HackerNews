<template>
  <div>
    <div v-for="user in news" v-bind:key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      news: state => state.news,
    })
    /*
      ...mapGetters({
        news: 'fetchedNews',
      })
      ...mapGetters([
        'fetchedNews',
      ]),
    */
    /* 
      #2
      ...mapState({
        news: state => state.news,
      })
    */
    /*
      #1
      news() {
        return this.$store.state.news;
      }
    */
  },
  created() {
    this.$store.dispatch ('FETCH_NEWS');
  },
}
</script>

<style>

</style>