const path = require('path')
const APP_PATH = path.resolve(__dirname, 'src')

const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        environment: path.join(APP_PATH, 'environments', env.CLIENT_ENV || 'Production')
      }
    },
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
      new HtmlWebPackPlugin({
        template: './src/index.html',
        environment: env.CLIENT_ENV,
        filename: './index.html'
      })
    ]
  }
}
