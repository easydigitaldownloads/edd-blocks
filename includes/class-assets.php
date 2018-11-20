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

		/**
		 * Enqueue block assets for the front-end. 
		 * We're purposely not using the enqueue_block_assets hook.
		 */
		add_action( 'wp_enqueue_scripts', array( $this, 'block_assets' ), 500 ); // Make sure it's loaded after EDD.
		
		// Enqueue block assets for the editor only.
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_assets' ) );
	}

	/**
	 * Enqueue block assets.
	 * 
	 * This is temporary until https://github.com/easydigitaldownloads/easy-digital-downloads/issues/6852 is merged.
	 * Once merged, we'll remove the method below since any styling will exist in EDD's stylesheet.
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
			array( 'wp-editor' ),
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'dist/main.js' ),
			false
		);

		wp_localize_script( 'edd-blocks-js', 'edd_blocks_global_vars', array(
			'url' => site_url(),
		) );

		wp_enqueue_style(
			'edd-blocks-admin',
			EDD_BLOCKS_PLUGIN_URL . 'dist/admin.css',
			filemtime( EDD_BLOCKS_PLUGIN_DIR . 'dist/admin.css' )
		);

	}

}
new EDD_Blocks_Assets;