import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'

import axios from '@/network/request'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

// axios.defaults.baseURL = '/chnphoto_mobile_app'
// axios.defaults.headers['Content-Type'] = 'application/json'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})



// axios({
//   url: '/circle/Circle/lastestNews',
//   method: 'POST',
//   data: {page: 1, userId: 3454}
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

