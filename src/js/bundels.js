const path = require("path");

const common = [
  path.resolve(__dirname, "./modulus/ads_tracker.js"),
  path.resolve(__dirname, "./modulus/adsloader.js"),
];
exports.common = common;

const pre_common = [path.resolve(__dirname, "./modulus/adsloader.js")];
exports.pre_common = pre_common;
