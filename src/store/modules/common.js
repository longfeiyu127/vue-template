import types from "../mutation-types";
let COMMON = types.COMMON;

// 定义数据
const state = {
  isShowLoading: true
};

const mutations = {
  [COMMON.GET_LOADINGSTATE](state, loadingState) {
    state.isShowLoading = loadingState;
  }
};

export default {
  state,
  mutations
};
