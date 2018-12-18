const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ["@babel/polyfill", "./src/site.jsx"],
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
    // new UglifyJSPlugin({
    //   sourceMap: true,
    // }),
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
    }),
  ]
};
