'use strict';

var webpack = require('./build/WebPackHelper.js');
var path = require('path')

var config = {
    "context": path.resolve('build/js'),
     entry: "frontend",
    "output": {
         path: path.resolve('../../public'),
        "filename": "frontend.bundle.js",
        "chunkFilename": "[id].bundle.js",
        "publicPath": "/frontend/"
    },
    "module": {
        "rules": [
            
        ]
    },
    resolve: {
        modules: [ path.resolve('js'), path.resolve('..', 'src'), path.resolve('.'), path.resolve('node_modules') ],
      },
    "plugins": [
        
    ]
};

module.exports = config;

// from file /Users/antonio/IdeaProjects/9gag-kotlin-parser/frontend/webpack.config.d/babel.js
config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
});

// from file /Users/antonio/IdeaProjects/9gag-kotlin-parser/frontend/webpack.config.d/css.js
config.module.rules.push(
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }
);


// from file /Users/antonio/IdeaProjects/9gag-kotlin-parser/frontend/webpack.config.d/minify.js
// config.plugins.push(new webpack.optimize.UglifyJsPlugin({
//     minimize: true
// })); 

