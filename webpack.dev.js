const paths = require("./paths");

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.src,
    open: true,
    compress: true,
    hot: true,
    port: 9000,
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development'),
        'CHAT_SERVICE_URL': JSON.stringify('http://localhost:8080')
      }
    }),
  ],
});
