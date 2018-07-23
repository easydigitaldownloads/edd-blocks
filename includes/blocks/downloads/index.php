<?php

function edd_blocks_render_block_downloads( $attributes = array() ) {

	ob_start();

	$options = array(
		'class'      => 'align' . $attributes['align'],
		'number'     => $attributes['number'],
		'columns'    => $attributes['columns'],
		'buy_button' => ! $attributes['showBuyButton'] ? 'no' : 'yes',
		'price'      => $attributes['showPrice'] ? 'yes' : 'no',
		'thumbnails' => $attributes['showThumbnails'] ? 'true' : 'false',
		'order'      => $attributes['order'],
	);

	$shortcode_options = array();

	foreach ( $options as $att => $value ) {
		$shortcode_options[] = $att . '="' . $value . '"';
	}

	$options = implode( ' ', array_filter( $shortcode_options ) );

	echo do_shortcode( '[downloads ' . $options . ']' );
	
	$display = ob_get_clean();

	return $display;
}

/**
 * Registers the `easydigitaldownloads/downloads` block on server.
 */
function edd_blocks_register_block_downloads() {

	register_block_type( 'easydigitaldownloads/downloads', array(
		'attributes' => array(
			'download_category' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			),
			'showBuyButton' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'showPrice' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'showThumbnails' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'number' => array(
				'type'    => 'number',
				'default' => 9,
			),
			'columns' => array(
				'type'    => 'number',
				'default' => 3,
			),
			'align' => array(
				'type'    => 'string',
				'default' => 'center',
			),
			'order' => array(
				'type'    => 'string',
				'default' => 'desc',
			),
			'orderBy'  => array(
				'type'    => 'string',
				'default' => 'date',
			),
		),
		'render_callback' => 'edd_blocks_render_block_downloads',
	) );
}
add_action( 'init', 'edd_blocks_register_block_downloads' );