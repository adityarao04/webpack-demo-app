const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common')
const merge = require('webpack-merge')
module.exports = merge(common,{
    mode: "development",
    output: {
        filename:"[name].js",
        path: path.resolve(__dirname, './dist')
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [
                  "style-loader", //3. Inject styles into DOM
                  "css-loader", //2. Turns css into commonjs
                  "sass-loader" //1. Turns sass into css
                ]
              }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/template.html")
      })]
})