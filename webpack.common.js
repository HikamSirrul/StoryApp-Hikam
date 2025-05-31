const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/StoryApp-Hikam/', 
  },
  module: {
    rules: [
      {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      excludeChunks: ['sw'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/icons'),
          to: 'icons', 
        },
        {
          from: path.resolve(__dirname, 'src/public/manifest.json'),
          to: 'manifest.json',
        },
        {
          from: path.resolve(__dirname, 'src/public/favicon.png'),  
          to: 'favicon.png',
        },
      ],
    }),
  ],
};
