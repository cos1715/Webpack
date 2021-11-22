const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const { merge } = require("webpack-merge");

const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "production",

  output: {
    filename: "main.[contenthash].js",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
