const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname + "/client",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-env",
          ],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
  output: {
    path: __dirname + "/public",
    filename: "app.js",
  },
};
