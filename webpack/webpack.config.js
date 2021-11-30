const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    test: "./src/index2.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/static/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/i,
        use: ["handlebars-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Output Management",
      description: "Learning webpack Plugins",
      inject: "body",
      chunks: ["index", "vendors-node_modules_lodash_lodash_js"],
      template: path.resolve(__dirname, "../src/index.hbs"),
    }),
    new HtmlWebpackPlugin({
      filename: "index2.html",
      title: "Page 2",
      description: "Learning webpack Splitting",
      inject: "body",
      chunks: ["test",'vendors-node_modules_lodash_lodash_js'],
      template: path.resolve(__dirname, "../src/index.hbs"),
    }),
  ],
};
