<?php
/**
 * Registers and enqueues assets.
 */
class EDD_Blocks_Assets {

	/**
	 * Initializes script or style-related callbacks.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_assets' ) );
	}

	/**
	 * Enqueue block editor assets.
	 * 
	 * @since 1.0.0
	 */
	public function block_editor_assets() {

		wp_enqueue_script(
			'edd-blocks-js',
			EDD_BLOCKS_PLUGIN_URL . 'dist/main.js',
			array(),
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'dist/main.js' ),
			false
		);

		wp_enqueue_style(
			'edd-blocks',
			EDD_BLOCKS_PLUGIN_URL . 'dist/styles.css',
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'dist/styles.css' )
		);

	}

}
new EDD_Blocks_Assets;