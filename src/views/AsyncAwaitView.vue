<template>
  <div>
    <span>AsyncAwait 예제</span>
    <button @click="loginUser">loginUser - promise</button>
    <button @click="loginUser1">loginUser - async await</button>
    <ul>
      <li v-for="item in items" :key=item.id>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { hadleException } from '../utils/handler.js';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    // 비동기처리 방법 1 promise  
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
          if (res.data.id === 1) {
            console.log('사용자가 인증되었습니다.');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(res => this.items = res.data)
              .catch(err => console.log(err))
          }
        })
        .catch(err => console.log(err))
    },
    // 비동기처리 방법 2 - async & await  
    async loginUser1() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (res.data.id === 1) {
          console.log('사용자가 인증되었습니다.');
          const list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch (err) {
        hadleException(err);
      }
    }
  },
}
</script>

<style>

</style>