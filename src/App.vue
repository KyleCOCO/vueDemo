<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  created() {
    Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('123');
        }, 3000)
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('456');
        }, 1000)
      })
    ]).then(datas => {
      console.log('第一个结果',datas[0]);
      console.log('第二个结果',datas[1]);
    })
  }
}
</script>

<style>
  @import './assets/css/base.css';
  @import './assets/css/iconfont.css';
</style>
