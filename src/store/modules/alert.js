export default {
  state: () => ({
    isShow: false,
    message: '',
    style: '',
  }),
  mutations: {
    SHOW_MSG(state, payload) {
      state.isShow = payload.isShow
      state.message = payload.msg
      state.style = payload.style
    },
    REMOVE_MSG(state, payload) {
      state.isShow = payload.isShow
      state.message = payload.msg
      state.style = payload.style
    }
  },
  actions: {
    removeMsg({ commit }, payload) {
      setTimeout(() => {
        commit('REMOVE_MSG', payload)
      }, 1500)
    }
  }
}
