<?php

function edd_blocks_render_block_downloads( $block_attributes = array() ) {
	ob_start();

	if ( 'download_categories' === $block_attributes['type'] || 'download_tags' === $block_attributes['type'] ) {

		$atts = array(
			'thumbnails'  => $block_attributes['showThumbnails'],
			'title'       => $block_attributes['showTitle'],
			'description' => $block_attributes['showDescription'],
			'show_empty'  => $block_attributes['showEmpty'],
			'columns'     => $block_attributes['columns'],
			'count'       => $block_attributes['showCount'],
			'orderby'     => $block_attributes['orderBy'],
			'order'       => $block_attributes['order'],
			'class'       => $block_attributes['className'],
		);

		switch ( $block_attributes['type'] ) {
			case 'download_categories':
				$atts['taxonomy'] = 'download_category';
				break;
			
			case 'download_tags':
				$atts['taxonomy'] = 'download_tag';
				break;
		}

		// Display the terms.
		echo edd_download_terms( $atts );

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

		// Display the downloads.
		echo edd_downloads( $atts );
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
				'default' => '',
			),
			'type' => array(
				'type' => 'string',
				'default' => 'downloads',
			),
			'className' => array(
				'type' => 'string',
				'default' => '',
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
				'default' => '',
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
				'default' => false,
			),
		),
		'render_callback' => 'edd_blocks_render_block_downloads',
	) );
}
add_action( 'init', 'edd_blocks_register_block_downloads' );