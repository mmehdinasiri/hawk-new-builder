const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const { common, pre_common } = require("./src/js/bundles");

module.exports = {
	mode: "development",

	entry: {
		common: common,
		pre_common: pre_common,
		main: [path.resolve(__dirname, "./src/styles/main.sass")],
		mobile: [path.resolve(__dirname, "./src/styles/mobile.sass")],
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
		],
	},
	plugins: [
    new RemoveEmptyScriptsPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
    new CleanWebpackPlugin(),

	],
	devtool: false,
	devServer: { static: "./dist", hot:true },
};
