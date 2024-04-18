const user = {
  state: {
    user: ""
  },
  mutations: {
    'USER INFO'(state, info) {
      state.user = info;
    }
  },
  actions: {
    saveUserInfo({ commit }, data) {
      commit('USER INFO', data);
    }
  },
  // getters: {
  //   user: state => state.user.user
  // }
};

export default user;
