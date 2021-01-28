import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import {request, instance2} from './network/request'

axios.defaults.baseURL = '/chnphoto_mobile_app'
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
axios.post('/circle/Circle/lastestNews',{page: 1, userId: 3454}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

axios({
  url: '/circle/Circle/lastestNews',
  method: 'post',
  data: {page: 1, userId: 3454}
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

// request({
//   url: '/home/multidata',
//   methods: 'post'
// }).then(res => {
//   console.log(res);
// })

// instance2({
//   url: '/circle/Circle/lastestNews',
//   data: JSON.stringify({page: 1, userId: '3454'}),
//   method: 'POST'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })