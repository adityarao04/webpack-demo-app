const path = require('path');

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
                test: /\.scss$/,
                use: [
                  "style-loader", //3. Inject styles into DOM
                  "css-loader", //2. Turns css into commonjs
                  "sass-loader" //1. Turns sass into css
                ]
              }
            
            ]
    }
}