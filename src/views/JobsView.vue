<template>
  <div>
    <div v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
}
</script>

<style>

</style>