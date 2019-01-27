"use strict";
module.exports = process.env.BUILDTEST
  ? {
      NODE_ENV: '"test"'
    }
  : {
      NODE_ENV: '"production"'
    };
