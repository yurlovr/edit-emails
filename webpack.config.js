const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: __dirname + "/src/app/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env']},
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: 'body'
  })
  ],
  devServer: {
      contentBase: './src/public',
      port: 7700,
  }
};