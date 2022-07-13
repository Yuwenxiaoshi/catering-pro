import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 有时间去看 百度网盘的 视频,   vuex-快速复习
export default new Vuex.Store({
  // 共享变量存这里:
  state: {
    uname:null,
  },
  getters: {},
  mutations: {
    updateUname(state,uname){
      state.uname = uname
    },
  },
  actions: {},
  modules: {},
})
