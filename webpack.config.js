const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react', '@babel/typescript'],
            plugins: ['@babel/transform-runtime', '@emotion/babel-plugin'],
          },
        },
      },
      {
        test: /\.(c|s[ac])ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '*'],
    fallback: {
      // fix build errors where fs/path not defined
      fs: false,
      path: require.resolve('path-browserify'),
    }
  },
  // fix 'process is not defined'
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ]
};
