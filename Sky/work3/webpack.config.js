/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  output: {
    filename: "[name].[git-revision-hash].js"
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: true,
          quiet: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    alias: {
      "@ant-design/icons/lib/dist$": path.resolve(
        __dirname,
        "src/static/icons/index.js"
      ),
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(__dirname, "src/"),
      path.resolve(__dirname, "node_modules/")
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "./index.html"
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-tw|zh-cn/),
    new webpack.DefinePlugin({
      FRONTEND: JSON.stringify(process.env.FRONTEND)
    }),
    new GitRevisionPlugin({ commithashCommand: "rev-parse --short HEAD" }),
    // new CompressionPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  devServer: {
  }
};
