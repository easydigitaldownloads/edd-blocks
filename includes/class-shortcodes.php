<?php

class EDD_Blocks_Shortcodes {

	public function __construct() {
		add_shortcode( 'download_categories', array( $this, 'download_categories' ) );
		add_shortcode( 'download_tags', array( $this, 'download_tags' ) );
	}

	public function download_categories( $atts, $content = null ) {

		$atts = shortcode_atts(
			array(
				'thumbnails'  => true,
				'title'       => true,
				'description' => true,
				'show_empty'  => false,
				'columns'     => 3,
				'count'       => true,
				'orderby'     => 'count',
				'order'       => 'DESC',
			),
			$atts,
			'download_categories'
		);

		$args = array(
			'taxonomy'    => 'download_category',
			'thumbnails'  => 'false' === $atts['thumbnails'] ? false : $atts['thumbnails'],
			'title'       => 'false' === $atts['title'] ? false : $atts['title'],
			'description' => 'false' === $atts['description'] ? false : $atts['description'],
			'show_empty'  => 'true' === $atts['thumbnails'] ? true : $atts['thumbnails'],
			'columns'     => isset( $atts['columns'] ) ? $atts['columns'] : $atts['columns'],
			'count'       => 'false' === $atts['count'] ? false : $atts['count'],
			'orderby'     => isset( $atts['orderby'] ) ? $atts['orderby'] : $atts['orderby'],
			'order'       => isset( $atts['order'] ) ? $atts['order'] : $atts['order'],
		);

		return edd_download_terms( $args );
	}

	public function download_tags( $atts, $content = null ) {
		$atts = shortcode_atts(
			array(
				'thumbnails'  => true,
				'title'       => true,
				'description' => true,
				'show_empty'  => false,
				'columns'     => 3,
				'count'       => true,
				'orderby'     => 'count',
				'order'       => 'DESC',
			),
			$atts,
			'download_tags'
		);

		$args = array(
			'taxonomy'    => 'download_tag',
			'thumbnails'  => 'false' === $atts['thumbnails'] ? false : $atts['thumbnails'],
			'title'       => 'false' === $atts['title'] ? false : $atts['title'],
			'description' => 'false' === $atts['description'] ? false : $atts['description'],
			'show_empty'  => 'true' === $atts['thumbnails'] ? true : $atts['thumbnails'],
			'columns'     => isset( $atts['columns'] ) ? $atts['columns'] : $atts['columns'],
			'count'       => 'false' === $atts['count'] ? false : $atts['count'],
			'orderby'     => isset( $atts['orderby'] ) ? $atts['orderby'] : $atts['orderby'],
			'order'       => isset( $atts['order'] ) ? $atts['order'] : $atts['order'],
		);

		return edd_download_terms( $args );
	}

}
new EDD_Blocks_Shortcodes;