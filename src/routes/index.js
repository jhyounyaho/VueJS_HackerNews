// routes/index.js router 로직
import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import createListView from '../views/CreateListView.js';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  // url # 제거
  mode: 'history',
  routes: [
    {
      // path: url 주소 
      path: '/',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView, // Mixin
      beforeEnter: (to, from, next) => {
        console.log(from, next)
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            bus.$emit('end:spinner');
          })
          .catch((err) => console.log(err));
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'), // HOC
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'), // HOC
    },
    {
      path: '/user/:id',
      component: UserView, 
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});