import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
  // 单一状态树
  state: {
    counter: 0
  },
  // 同步方法
  mutations: {
    // 自动传递参数state
    add(state) {
      state.counter ++;
    },
    reduce(state) {
      state.counter --;
    }
  },
  // 异步操作放在actions中(eg:网络请求)
  actions: {

  },
  // 类似计算属性
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    }
  },
  modules: {

  }
})

export default store