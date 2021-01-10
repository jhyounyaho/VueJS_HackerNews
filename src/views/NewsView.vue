<template>
  <div>
    <ul class="news-list">
      <li v-for="item in news" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
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

<style scoped>
  .news-list {
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
  .news-title {
    margin: 0;
  }
  .link-text {
    color: #828282;
  }
</style>>