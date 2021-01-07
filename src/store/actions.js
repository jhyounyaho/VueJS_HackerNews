import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

export default {
  // actions 비동기 호출
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => context.commit('SET_NEWS', res.data))
      .catch(err => console.log(err))
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(res => context.commit('SET_ASK', res.data))
      .catch(err => console.log(err))
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit('SET_JOBS', data))
      .catch(err => console.log(err))
  }
}