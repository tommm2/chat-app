export default {
  state: () => ({
    isShow: false,
    message: "",
    style: "",
  }),
  mutations: {
    UPDATE_MSG(state, payload) {
      state.isShow = payload.isShow;
      state.message = payload.msg;
      state.style = payload.style;
    },
  },
  actions: {
    removeMsg({ commit }, payload) {
      setTimeout(() => {
        commit("UPDATE_MSG", payload);
      }, 1500);
    },
  },
};
