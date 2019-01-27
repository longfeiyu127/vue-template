// 全局getters函数 返回你想要的全局状态格式
// USER
export const getUserInfo = state => state.user.info;
// COMMON
export const getLoadingState = state => state.common.isShowLoading;
