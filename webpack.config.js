var webpack = require('webpack');
//var nodeExternals = require('webpack-node-externals');

module.exports = {
  // We're not actually targetting node...
  //target: 'node',
  // externals: [nodeExternals({
  //   whitelist: ['dhtmlx-scheduler']
  // })],
  entry: './src/typescript/app.tsx',
  output: {
    path: __dirname + '/public',
    filename: './javascripts/site.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  // TODO Turn this back on for production.
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|gif)$/, loader: "url-loader?limit=1000&name=./images/[name].[ext]" }
    ]
  }
  // Only use externals when we're going to get these scripts from other places
  // in our HTML.#
  // TODO Build up a proper list of externals.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
}