import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user
    // 其他的模块可以在这里添加
  },
  // 其他的 Vuex 相关配置可以在这里添加
});

export default store;
