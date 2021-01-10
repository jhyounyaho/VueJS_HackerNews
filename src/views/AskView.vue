<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in ask" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="ask-title">
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="linkt-text">
            {{ item.time_ago }} by 
            <router-link :to="`user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
  .ask-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    width: 88px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .ask-title {
    margin: 0;
  }
  .ask-text {
    color: #828282;
  }
</style>>