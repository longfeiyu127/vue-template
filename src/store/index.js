import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions.js";
import * as getters from "./getters.js";
import modules from "./modules";

Vue.use(Vuex);

const vuex = new Vuex.Store({
  actions,
  getters,
  modules
});

export default vuex;
