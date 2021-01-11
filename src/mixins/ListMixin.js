// Mixin - 컴포넌트 재활용 방법
import bus from '../utils/bus.js';

export default {
  // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch((err) => console.log(err));
  },
}