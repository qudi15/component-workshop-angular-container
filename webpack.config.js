var path = require("path");

module.exports = {
  // entry: {
  //   main: "src/main.ts",
  //   // polyfills: "src/polyfills.ts",
  // },
  optimization: {
    runtimeChunk: false,
  },
  output: {
    libraryTarget: "amd",
    // path: path.resolve(__dirname, "dist"),
  },
};
