<template>
  <div class="header">
    <span><router-link to="/news">News</router-link></span> | 
    <span><router-link to="/ask">Ask</router-link></span> | 
    <span><router-link to="/jobs">Jobs</router-link></span> |
  </div>
</template>

<style scoped>
  .header {
    color: #ffffff;
    background-color: #42b883;  
    display: flex;
    padding: 8px;
  }
  .header .router-link-exact-active {
    color: #35495e
  }
  .header a {
    color: #ffffff;
  }
  .header span {
    padding: 0 5px;
  }
</style>>