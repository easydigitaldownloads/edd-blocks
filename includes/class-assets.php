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
		// Enqueue block assets for both editor and front-end.
		add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		// Enqueue block assets for the editor only.
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_assets' ) );
	}

	/**
	 * Enqueue block assets.
	 * 
	 * @since 1.0.0
	 */
	public function block_assets() {
		wp_enqueue_style(
			'edd-blocks',
			EDD_BLOCKS_PLUGIN_URL . 'dist/styles.css',
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'dist/styles.css' )
		);
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
			'edd-blocks-admin',
			EDD_BLOCKS_PLUGIN_URL . 'dist/admin.css',
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'dist/admin.css' )
		);

	}

}
new EDD_Blocks_Assets;