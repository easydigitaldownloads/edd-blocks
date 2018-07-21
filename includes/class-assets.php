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
		// Enqueue styles for the editor.
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_assets' ) );

		// Enqueue admin styles.
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
	}

	/**
	 *  Load the admin scripts
	 *
	 *  @since 1.0.0
	 */
	public function admin_scripts() {
		wp_enqueue_style( 'edd-blocks-admin', EDD_BLOCKS_PLUGIN_URL . 'assets/css/admin.css', array(), EDD_BLOCKS_VERSION );
	}

	/**
	 * Enqueue block editor assets.
	 * 
	 * @since 1.0.0
	 */
	public function block_editor_assets() {

		wp_enqueue_script(
			'edd-blocks-editor-js',
			EDD_BLOCKS_PLUGIN_URL . 'assets/js/editor.blocks.js',
			array(),
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'assets/js/editor.blocks.js' ),
			false
		);

		wp_enqueue_script(
			'edd-blocks-js',
			EDD_BLOCKS_PLUGIN_URL . 'assets/js/edd.blocks.js',
			array(),
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'assets/js/edd.blocks.js' ),
			false
		);

		// Enqueue editor only styles.
		wp_enqueue_style(
			'edd-blocks-css',
			EDD_BLOCKS_PLUGIN_URL . 'assets/css/edit-blocks.css',
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'assets/css/edit-blocks.css' )
		);

	}

}
new EDD_Blocks_Assets;