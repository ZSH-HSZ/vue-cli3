/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    ADD_COUNT(state, data) {
      state.count++
    }
  },
  actions: {
    REMOTE_CONTROL({
      commit,
      state
    },{
      data
    }) {
      commit('ADD_COUNT')
    }
  }
});