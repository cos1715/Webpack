const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
});
