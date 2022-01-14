const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const { jsEntry } = require("./src/js/js-bundles");
const { cssEntry } = require("./src/styles/css-bundles");
const CopyPlugin = require("copy-webpack-plugin");

let mode = "development";
let target = "web";
let devtool = "source-map";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
  devtool = false;
}

module.exports = {
  mode,
  target,

  entry: {
    ...jsEntry,
    ...cssEntry,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(t(s|sx))$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./src/static/contrib", to: "contrib" },
        { from: "./src/static/images", to: "images" },
        { from: "./src/static/fonts", to: "fonts" },
      ],
    }),
  ],
  devtool,
  devServer: { static: "./dist", hot: true },
};
