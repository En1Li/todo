export default {
  namespaced: true,
  state: {
    list: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  getters: {},
  mutations: {
    addListTrue(state, payload) {
      const index = state.list.length - 1
      const idd = state.list[index].id + 1
      const obj = {
        name: payload,
        done: false,
        id: idd
      }
      state.list.push(obj)
    },
    delListTrue(state, payload) {
      const index = state.list.findIndex((item) => item.id === payload)
      state.list.splice(index, 1)
    }
  },
  actions: {
    addLista(context, payload) {
      context.commit('addListTrue', payload)
    },
    delList(context, payload) {
      context.commit('delListTrue', payload)
    }
  }
}
