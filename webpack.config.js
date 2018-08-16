const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const stylesCSSPlugin = new ExtractTextPlugin( {
	filename: './styles.css',
} );

const adminCSSPlugin = new ExtractTextPlugin( {
	filename: './admin.css',
} );

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{ loader: 'raw-loader' },
		{
			loader: 'postcss-loader',
			options: {
				plugins: [
					require( 'autoprefixer' ),
				],
			},
		},
		{
			loader: 'sass-loader',
			query: {
				outputStyle: 'production' === process.env.NODE_ENV ? 'compressed' : 'nested',
			},
		},
	],
};

module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /styles\.s?css$/,
				use: stylesCSSPlugin.extract( extractConfig ),
			},
			{
				test: /admin\.s?css$/,
				use: adminCSSPlugin.extract( extractConfig ),
			},
		]
	},
	plugins: [
		stylesCSSPlugin,
		adminCSSPlugin
	]
};