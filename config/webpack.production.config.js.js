const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const srcPath =  path.resolve(__dirname, "../src")

module.exports = {
  mode: "production",
  entry: `${srcPath}\\index2.tsx`,
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
    static: {
      directory: path.join(__dirname, "public")
    },
    port: 8080,
    compress: true,
    // http2: true,
    // hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, "../")}\\public\\index.html`,
    })
  ]
}