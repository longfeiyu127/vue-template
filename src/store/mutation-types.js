let types = {
  COMMON: ["GET_LOADINGSTATE"],
  USER: ["GET_USERINFO"]
};

let t = {};

for (let type in types) {
  t[type] = {};
  for (let ac of types[type]) {
    t[type][ac] = type + "_" + ac;
  }
}

export default t;
