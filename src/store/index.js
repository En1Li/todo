import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import color from './color'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    color
  }
})
