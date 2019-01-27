import Vue from "vue";

var req = require.context("./", true, /^(.*\.(js$))[^.]*$/im);
req.keys().forEach(function(key) {
  var _key = key.replace("./", "").replace(".js", "");
  if (_key !== "index") {
    Vue.directive(_key, req(key).default);
  }
});
