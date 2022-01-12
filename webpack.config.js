const path = require("path");
const { common, pre_common } = require("./src/js/bundels");

module.exports = {
  mode: "development",

  entry: {
    common: common,
    pre_common: pre_common,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: false,
  devServer: { contentBase: "./dist" },
};
