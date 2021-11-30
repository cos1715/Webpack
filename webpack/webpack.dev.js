const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",

  output: {
    filename: "[name].js",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    compress: true,
    port: 9000,
  },
  
  watch: true,

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
});
