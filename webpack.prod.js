const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        })
    ]
}