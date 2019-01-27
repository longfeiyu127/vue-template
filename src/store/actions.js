import types from "./mutation-types";

const { COMMON, USER } = types;
// COMMON
export const setLoadingState = ({ commit }, data) => {
  commit(COMMON.GET_LOADINGSTATE, data);
};

// 用户状态
export const setUserInfo = ({ commit }, data) => {
  commit(USER.GET_USERINFO, data);
};
