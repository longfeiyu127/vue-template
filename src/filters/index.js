import Vue from "vue";

// 数据脱敏
Vue.filter("custom", (val, number, front = 4, back = 4) => {
  number = +number + 1 || "";
  var reg = new RegExp("^(\\w{" + front + "})\\w+(\\w{" + back + "})$", "g");
  return (
    (val &&
      val.replace(
        reg,
        `$1${new Array(number || val.length + 1 - front - back).join("*")}$2`
      )) ||
    val
  );
});
