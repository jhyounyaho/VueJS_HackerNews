<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <UserProfile :info="itemInfo">
        <router-link slot="username" :to="`/user/${itemInfo.user}`">
          {{ itemInfo.user }}
        </router-link>
        <template slot="time">
          {{ `Posted ${itemInfo.time_ago}` }}
        </template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ itemInfo.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    },
  },
  components: {
    UserProfile,
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 5.2rem;
  }
  .user-description {
    padding-left: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>