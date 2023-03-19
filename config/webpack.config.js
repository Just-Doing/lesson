const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const srcPath =  path.resolve(__dirname, "../src")
module.exports = {
  entry: `${srcPath}\\index.tsx`,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, "../")}\\public\\index.html`,
    })
  ]
}