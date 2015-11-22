var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {

entry: [
	'webpack/hot/dev-server',
	'webpack-dev-server/client?http://localhost:8080',
 	path.resolve(__dirname, './scr/main.js')
 	],

 output: {
   path: path.resolve(__dirname, 'dist/'),
   filename: 'main.js'
 },
 module: {
   loaders: [{ test: /\.js$/,  exclude: [node_modules_dir], loaders: ['babel-loader'] }]
 }
};

module.exports = config; 