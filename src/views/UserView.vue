<template>
  <div>
    <p>user : {{ user.id }}</p>
    <p>created : {{ user.created }}</p>
    <p>karma : {{ user.karma }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      user: state => state.user,
    })
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userId);
  }
}
</script>

<style>

</style>