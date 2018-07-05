const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, { mode = 'development' }) {
  return {
    mode,
    context: path.join(__dirname, 'src'),
    entry: {
      index: './index.js',
    },
    devtool: 'sourcemap',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ],
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        },
        {
          test: /\.(svg|png|jpe?g|gif)(\?.*)?$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: './images/[name].[ext]',
            },
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: './fonts/[name].[ext]',
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'index.html' }),
    ],
  };
};
