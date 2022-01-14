const path = require("path");

const main = [path.resolve(__dirname, "./main.sass")];
const icons = [path.resolve(__dirname, "./icons.css")];
const mobile = [path.resolve(__dirname, "./mobile.sass")];
const cssEntry = {
  main,
  mobile,
  icons,
};

exports.cssEntry = cssEntry;
