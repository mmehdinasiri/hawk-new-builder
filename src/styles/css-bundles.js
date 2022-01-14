const path = require("path");

const main = [path.resolve(__dirname, "./main.sass")];
const mobile = [path.resolve(__dirname, "./mobile.sass")];
const cssEntry = {
  main,
  mobile,
};

exports.cssEntry = cssEntry;
