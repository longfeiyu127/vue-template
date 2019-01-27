import axios from "axios";
import qs from "qs";

const baseURL1 = "/";

export default function ajax(url, options, data) {
  let baseURL = baseURL1;
  let urlArr = url.split("%");
  if (urlArr.length > 1) {
    let urlRes = urlArr.map((item, index, arr) => {
      return index % 2 === 0 ? item : (item = data[item] || "");
    });
    url = urlRes.join("");
  }
  let method = options.method || "GET";
  let headers = {
    "Content-Type":
      options.contentType === "json"
        ? "application/json"
        : "application/x-www-form-urlencoded",
    "X-Session-Mode": "header",
    "X-Session-Id": sessionStorage.getItem("X-Session-Id") || null,
    Authorization: sessionStorage.getItem("Authorization") || null
  };
  let params = data;
  if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
    data = qs.stringify(data);
  }
  let ajaxObj = {
    baseURL,
    url,
    method,
    headers,
    timeout: 100000,
    data,
    params
  };
  if (method === "GET" || method === "DELETE") {
    ajaxObj.data = null;
  } else if (method === "POST") {
    ajaxObj.params = null;
  }
  return new Promise((resolve, reject) => {
    axios(ajaxObj).then(res => {
      resolve(res.data);
    });
  });
}
