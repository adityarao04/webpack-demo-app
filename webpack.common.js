const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename:"main.[contentHash].js",
        path: path.resolve(__dirname, './dist')
    },
    module:{
        rules: [
            // { 
            // test: /\.css$/,
            // use: ['style-loader','css-loader']   //order of execution -> reverse order [......,2nd , 1st]
            // }
            {
                test: /\.html$/,
                use: ["html-loader"]
                
              },
              {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: "[name].[contentHash].[ext]",
                      outputPath: "images"
                      //  can also set compression here
                    }
                  },
                ],
              }
            
            ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/template.html")
    })]
}