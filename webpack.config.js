var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['dhtmlx-scheduler']
  })],
  entry: './src/typescript/app.ts',
  output: {
    path: __dirname + '/public',
    filename: './javascripts/site.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|gif)$/, loader: "url-loader?limit=1000&name=./images/[name].[ext]" }
    ]
  }
}