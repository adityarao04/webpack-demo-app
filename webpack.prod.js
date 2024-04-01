const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common')
const merge = require('webpack-merge')
const CleanWebpackPlugin  = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");  // already present in webpack // need to add this as OptimizeCssAssetsPlugin overrides and JS is not minified
module.exports = merge(common,{
    mode: "production",
    output: {
        filename:"[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, './dist')
    },
    optimization:{
        minimizer: [ 
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })
    ]
    ,  
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                  "css-loader", //2. Turns css into commonjs
                  "sass-loader" //1. Turns sass into css
                ]
              }
        ]
    }
})