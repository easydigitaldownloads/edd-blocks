<?php

function edd_blocks_render_block_download_categories( $attributes = array() ) {
	ob_start();

	echo '<p>Download categories to show here</p>';
	
	$display = ob_get_clean();

	return $display;
}

/**
 * Registers the `easydigitaldownloads/downloads` block on server.
 */
function edd_blocks_register_block_download_categories() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( 'easydigitaldownloads/download-categories', array(
		'attributes' => array(
		),
		'render_callback' => 'edd_blocks_render_block_download_categories',
	) );
}
add_action( 'init', 'edd_blocks_register_block_download_categories' );