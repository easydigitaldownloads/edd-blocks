const path = require( 'path' );

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const adminCSSPlugin = new ExtractTextPlugin( {
	filename: './assets/css/admin.css',
} );

// CSS loader for styles specific to block editing.
const editBlocksCSSPlugin = new ExtractTextPlugin( {
	filename: './assets/css/edit-blocks.css',
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

const autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'./assets/js/editor.blocks' : './includes/blocks/index.js',
		'./assets/js/edd.blocks' : './includes/index.js',
	},
	output: {
		path: path.resolve( __dirname ),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /admin\.s?css$/,
				use: adminCSSPlugin.extract( extractConfig ),
			},
			{
				test: /editor\.s?css$/,
				include: [
					/blocks/,
				],
				use: editBlocksCSSPlugin.extract( extractConfig ),
			},
		],
	},
	plugins: [
		adminCSSPlugin,
		editBlocksCSSPlugin
	],
};