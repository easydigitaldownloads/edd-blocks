<?php

function edd_blocks_render_block_download_taxonomy( $block_attributes = array() ) {
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
			'class'       => 'align' . $block_attributes['align'],
		);

		if ( $block_attributes['className'] ) {
			$atts['class'] .= ' ' . $block_attributes['className'];
		}

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
		// do something.
	}

	$display = ob_get_clean();

	return $display;
}

/**
 * Registers the `easydigitaldownloads/downloads` block on server.
 */
function edd_blocks_register_block_download_taxonomy() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'easydigitaldownloads/downloads',
		array(
			'attributes'      => array(
				// 'category'        => array(
				// 	'type'    => 'string',
				// 	'default' => '',
				// ),
				// 'type'            => array(
				// 	'type'    => 'string',
				// 	'default' => 'downloads',
				// ),
				// 'className'       => array(
				// 	'type'    => 'string',
				// 	'default' => '',
				// ),
				'showThumbnails'  => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'showDescription' => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'columns'         => array(
					'type'    => 'number',
					'default' => 3,
				),
				'align'           => array(
					'type'    => 'string',
					'default' => '',
				),
				'order'           => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'         => array(
					'type'    => 'string',
					'default' => 'count',
				),
				'showTitle'       => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'showCount'       => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'showEmpty'       => array(
					'type'    => 'boolean',
					'default' => false,
				),
			),
			'render_callback' => 'edd_blocks_render_block_download_taxonomy',
		)
	);
}
add_action( 'init', 'edd_blocks_register_block_download_taxonomy' );
