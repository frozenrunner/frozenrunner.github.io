const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    context: path.join(__dirname),
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
            filename: (pathData) => {
                return "./css/[name].css";
            }
        }),
        new HtmlWebpackPlugin({
          template: "index.html"
        }),
        new CopyWebpackPlugin({
          patterns: [
            {from: "./src/pages/shoetracker", to: "./shoetracker"},
            {from: "./src/img/", to: "./img/"},
            {from: "./src/fonts/", to: "./fonts/"}
          ]
        })
    ]
}