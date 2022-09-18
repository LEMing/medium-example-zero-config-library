const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".tsx", ".ts"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    allowedHosts: 'all',
    open: true,
    static: {
      directory: path.join(__dirname, "public/"),
      staticOptions: {},
      publicPath: '/',
      serveIndex: true,
      watch: true,
    },
    compress: true,
    historyApiFallback: true,
    host: 'localhost',
    port: 6600,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
