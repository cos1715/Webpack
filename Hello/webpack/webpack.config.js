const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "http://localhost:9090/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
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
    new ModuleFederationPlugin({
      name: "HelloApp",
      filename: "remoteEntry.js",
      exposes:{
        './Button':'./src/button.js'
      }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Output Management",
      description: "Learning webpack Plugins",
      inject: "body",
      template: path.resolve(__dirname, "../src/index.hbs"),
    }),
  ],
};
