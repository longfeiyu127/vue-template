import types from "../mutation-types";
let USER = types.USER;

// 定义数据
const state = {
  info: {},
  token: ""
};

const mutations = {
  [USER.GETINFO](state, userInfo) {
    state.info = userInfo;
  }
};

export default {
  state,
  mutations
};
