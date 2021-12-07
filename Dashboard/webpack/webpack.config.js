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
    publicPath: "http://localhost:9080/",
    // publicPath: "http://localhost:8000/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
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
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "App",
      filename: "remoteEntry.js",
      remotes: {
        HelloApp: "HelloApp@http://localhost:9090/remoteEntry.js",
        ByeApp: "ByeApp@http://localhost:9091/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Dashboard",
      inject: "body",
      template: path.resolve(__dirname, "../src/index.hbs"),
    }),
  ],
};
