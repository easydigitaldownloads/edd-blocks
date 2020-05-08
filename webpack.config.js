// WordPress dependencies

const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

// External dependencies
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

module.exports = {
	...defaultConfig,
	devtool: 'source-map',
	entry: {
		// JS
		main: './src/index.js',
		// SCSS
		style: './src/styles.scss',
		admin: './src/admin.scss'
	},
	output: {
		filename: 'build/[name].js',
		path: __dirname
	},
	plugins: [
		...defaultConfig.plugins,
		new FixStyleOnlyEntriesPlugin(),
		new OptimizeCssAssetsPlugin(),
		new MiniCssExtractPlugin( {
			filename: 'build/[name].css',
		} )
	],
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.s?css$/,
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
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
}
