<?php

function edd_blocks_render_block_downloads( $block_attributes = array() ) {
	ob_start();

	if ( 'download_categories' === $block_attributes['type'] ) {
		// Output a list of download categories.
		echo edd_blocks_download_categories_list( $block_attributes );
	} else {
		$atts = array(
			'class'        => 'align' . $block_attributes['align'],
			'number'       => $block_attributes['number'],
			'columns'      => $block_attributes['columns'],
			'buy_button'   => ! $block_attributes['showBuyButton'] ? 'no' : 'yes',
			'price'        => $block_attributes['showPrice'] ? 'yes' : 'no',
			'thumbnails'   => $block_attributes['showThumbnails'] ? 'true' : 'false',
			'order'        => $block_attributes['order'],
			'orderby'      => $block_attributes['orderBy'],
			'excerpt'      => $block_attributes['showDescription'] ? 'yes' : 'no',
			'full_content' => $block_attributes['showFullContent'] ? 'yes' : 'no',
			'category'     => $block_attributes['category'],
			'pagination'   => ! $block_attributes['showPagination'] ? 'false' : 'true'
		);
	
		if ( $block_attributes['className'] ) {
			$atts['class'] .= ' ' .  $block_attributes['className'];
		}
	
		// Shortcode requires "random" instead of "rand".
		if ( 'rand' === $block_attributes['orderBy'] ) {
			$atts['orderby'] = 'random';
		}
	
		// Output a list of downloads.
		echo edd_blocks_downloads_list( $atts );
	}

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
			'type' => array(
				'type' => 'string',
				'default' => 'downloads',
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
			'showDescription' => array(
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
				'default' => 'DESC',
			),
			'orderBy'  => array(
				'type'    => 'string',
				'default' => 'date',
			),
			'showTitle' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'showCount' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'showEmpty' => array(
				'type'    => 'boolean',
				'default' => true,
			),
		),
		'render_callback' => 'edd_blocks_render_block_downloads',
	) );
}
add_action( 'init', 'edd_blocks_register_block_downloads' );