const path = require("path");

const common = [
  path.resolve(__dirname, "./modulus/ads_tracker.js"),
  path.resolve(__dirname, "./modulus/adsloader.js"),
  path.resolve(__dirname, "./modulus/test.ts"),
];

const pre_common = [path.resolve(__dirname, "./modulus/adsloader.js")];

const jsEntry = {
  common,
  pre_common,
};

exports.jsEntry = jsEntry;
