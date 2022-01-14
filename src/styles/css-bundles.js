const path = require("path");

const main = [path.resolve(__dirname, "./main.sass")];
const mobile = [path.resolve(__dirname, "./mobile.sass")];
const icons = [path.resolve(__dirname, "./icons.css")];
const cssEntry = {
  main,
  mobile,
  icons,
};

exports.cssEntry = cssEntry;
