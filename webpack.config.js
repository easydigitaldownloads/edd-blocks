// WordPress dependencies

const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

// External dependencies
const path = require('path');
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

module.exports = {
	...defaultConfig,
	devtool: 'source-map',
	externals: {
		jquery: 'jQuery',
		$: 'jQuery'
	},
	entry: {
		// JS
		main: './dist/main.js',
		// CSS
		style: './dist/styles.css',
		// 'admin-style': './dist/admin.css',
	},
	output: {
		filename: 'dist/[name].js',
		path: __dirname
	},
	plugins: [
		new FixStyleOnlyEntriesPlugin(),
		new OptimizeCssAssetsPlugin(),
		new webpack.ProvidePlugin( {
			Promise: 'es6-promise-promise',
			$: 'jquery',
		} ),
		new MiniCssExtractPlugin( {
			filename: 'dist/styles.css',
		} )
	],
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer'),
							],
						},
					},
				],
			},
		],
	},
}

