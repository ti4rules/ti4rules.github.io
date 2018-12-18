const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: ["@babel/polyfill", "./src/RulesSite.jsx"],
    board: ["@babel/polyfill", "./src/BoardSite.jsx"],
    faq: ["@babel/polyfill", "./src/BoardSite.jsx"],
    reference: ["@babel/polyfill", "./src/BoardSite.jsx"],
  },
  output: {
    path: path.resolve("../"),
    filename: "js/[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      './node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react", ]
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader!sass-loader!import-glob-loader",
          fallback: "style-loader"
        })
      },
      {
        test: /(\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$)/,
        use: [{
          loader: 'file-loader',
          query: {
            name: '[path][name].[ext]',
          },
        }],
      },
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: ['popper.js', 'default']
    }),
    new ExtractTextPlugin({filename: "css/app.css"}),
    new CopyWebpackPlugin([{ from: "./images", to: "images" }]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'board.html',
      chunks: ['board']
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'faq.html',
      chunks: ['faq']
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'reference.html',
      chunks: ['reference']
    }),
  ]
};
