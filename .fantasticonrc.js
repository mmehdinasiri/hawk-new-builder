module.exports = {
  name: "tamashaIcon",
  inputDir: "./src/static/icons", // (required)
  outputDir: "./src/static/fonts/webFont", // (required)
  fontsUrl: "../static/fonts/webFont",
  fontTypes: ["ttf", "woff", "woff2", "eot"],
  assetTypes: ["css"],
  prefix: "icon",
  pathOptions: {
    css: "./src/styles/icons.css",
    font: "./src/static/fonts/webFont",
  },
};
