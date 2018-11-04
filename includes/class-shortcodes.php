<?php

class EDD_Blocks_Shortcodes {

	public function __construct() {
		add_shortcode( 'download_categories', array( $this, 'download_categories' ) );
	}

	public function download_categories( $atts, $content = null ) {

		$atts = shortcode_atts(
			array(
				'type'            => 'download_categories',
				'number'          => 9,
				'showTitle'       => true,
				'showThumbnails'  => true,
				'showDescription' => true,
				'showEmpty'       => false
			),
			$atts,
			'download_categories'
		);

		return edd_blocks_download_taxonomy_list( $atts );
	}
	
}
new EDD_Blocks_Shortcodes;