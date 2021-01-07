<template>
  <div>
    <div v-for="item in this.$store.state.ask" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>