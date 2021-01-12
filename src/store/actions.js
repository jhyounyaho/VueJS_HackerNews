import { 
  /*
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  */
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
} from '../api/index.js';

export default {
  // actions 비동기 호출
  /*
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => {
        context.commit('SET_NEWS', res.data)
        return res;
      })
      .catch(err => console.log(err))
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(res => {
        context.commit('SET_ASK', res.data)
        return res;
      })
      .catch(err => console.log(err))
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data)
        return data;
      })
      .catch(err => console.log(err))
  },
  FETCH_USER({ commit }, userId) {
    return fetchUserInfo(userId)
      .then(({ data }) => commit('SET_USER', data))
      .catch(err => console.log(err));
  },
  */
  async FETCH_USER(context, userId) {
    const res = await fetchUserInfo(userId);
    context.commit('SET_USER', res.data)
    return res;
  },
  async FETCH_ITEM({ commit }, id) {
    const res = await fetchCommentItem(id);
    commit('SET_ITEM', res.data)
    return res;
  },
  async FETCH_LIST({ commit }, pageName) {
    const res = await fetchList(pageName);
    commit('SET_LIST', res.data)
    return res;
  },
}