export default {
  namespaced: true,
  state: {
    color: ''
  },
  getters: {},
  mutations: {
    changecolor(state, payload) {
      state.color = payload
    }
  },
  actions: {
    changecolor(context, payload) {
      context.commit('changecolor', payload)
    }
  },
  modules: {}
}
