<?php

function edd_blocks_render_block_downloads( $attributes = array() ) {
	ob_start();

	$options = array(
		'class'        => 'align' . $attributes['align'],
		'number'       => $attributes['number'],
		'columns'      => $attributes['columns'],
		'buy_button'   => ! $attributes['showBuyButton'] ? 'no' : 'yes',
		'price'        => $attributes['showPrice'] ? 'yes' : 'no',
		'thumbnails'   => $attributes['showThumbnails'] ? 'true' : 'false',
		'order'        => $attributes['order'],
		'orderby'      => $attributes['orderBy'],
		'excerpt'      => $attributes['showExcerpt'] ? 'yes' : 'no',
		'full_content' => $attributes['showFullContent'] ? 'yes' : 'no',
		'category'     => $attributes['category'],
		'pagination'   => ! $attributes['showPagination'] ? 'false' : 'true'
	);

	if ( $attributes['className'] ) {
		$options['class'] .= ' ' .  $attributes['className'];
	}

	$shortcode_options = array();

	foreach ( $options as $att => $value ) {
		$shortcode_options[] = $att . '="' . $value . '"';
	}

	$options = implode( ' ', array_filter( $shortcode_options ) );

	/**
	 * In the future the shortcode can be swapped out for a dedicated function call
	 * in EDD core. Then the shortcode itself, blocks, and even themes can call the function
	 * to build a download grid.
	 */
	echo do_shortcode( '[downloads ' . $options . ']' );
	
	$display = ob_get_clean();

	return $display;
}

/**
 * Registers the `easydigitaldownloads/downloads` block on server.
 */
function edd_blocks_register_block_downloads() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( 'easydigitaldownloads/downloads', array(
		'attributes' => array(
			'category' => array(
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
			'showExcerpt' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'showFullContent' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'showPagination' => array(
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
				'default' => 'create_date',
			),
		),
		'render_callback' => 'edd_blocks_render_block_downloads',
	) );
}
add_action( 'init', 'edd_blocks_register_block_downloads' );