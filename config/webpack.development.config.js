const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const srcPath =  path.resolve(__dirname, "../src")

module.exports = {
  mode: "development",
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
  devServer:{
    port: 8080,
    static: {
      directory: path.join(__dirname, "public")
    },
    compress: true,
    // http2: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, "../")}\\public\\index.html`,
    })
  ]
}