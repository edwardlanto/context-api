const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'build'),
  },
  devtool: false,
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          },
        ]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      },
      {
        test: /\.css$/,
        loaders:['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }
};

