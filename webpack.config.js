const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  const mode = process.env.NODE_ENV
  const isProduction = mode === 'production'
  const style = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
  return {
    mode,
    devServer: {
      historyApiFallback: true,
      port: 3000,
    },
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/i,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/i,
          use: [style, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  }
}
