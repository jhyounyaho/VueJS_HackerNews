<template>
  <div>
    <p v-for="item in news" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by 
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
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