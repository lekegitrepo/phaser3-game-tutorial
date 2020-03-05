const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new CleanWebpackPlugin(["dist"]), new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        excludes: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets"
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
