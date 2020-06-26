const path = require('path');
const nodeExternals = require('webpack-node-externals');

const PATH = {
  BUILD: path.resolve(__dirname, 'build/'),
  SERVER_ENTRY: path.resolve(__dirname, 'server.js'),
  SERVER_BUILD: path.resolve(__dirname, 'build/'),
  SERVER_BUNDLE_NAME: 'server-bundle.js'
};

const server = {
  entry: [PATH.SERVER_ENTRY],
  output: {
    filename: PATH.SERVER_BUNDLE_NAME,
    path: PATH.SERVER_BUILD
  },
  optimization: {
    nodeEnv: false
  },
  externals: [nodeExternals()],
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] // files exts that webpack can resolve during import
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
};

module.exports = server;
