const HtmlWebPackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})
  
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/
      }
    ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3030,
    open: true
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
