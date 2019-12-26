const path = require('path')
const APP_PATH = path.resolve(__dirname, 'src')

const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3030,
      open: true
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
        },
        {
          test: /\.s*css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(gif|jpe*g|png|svg|)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8000,
                name: 'images/[hash]-[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    mode: 'development',
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].bundle.js',
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        environment: env.CLIENT_ENV,
        filename: './index.html'
      })
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
      alias: {
        environment: path.join(APP_PATH, 'environments', env.CLIENT_ENV || 'Production'),
        styles: path.resolve(APP_PATH, 'styles'),
        images: path.resolve(APP_PATH, 'images')
      }
    }
  }
}
