<?php
/**
 * Plugin Name: Easy Digital Downloads - Blocks
 * Description: Display Downloads, Categories and Tags using the new WordPress editor
 * Author: Easy Digital Downloads
 * Author URI: https://easydigitaldownloads.com
 * Version: 1.0.1
 * License: GPL-2.0+
 * License URI: http://www.opensource.org/licenses/gpl-license.php
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'EDD_Blocks' ) ) {

	/**
	 * Setup class.
	 *
	 * @since 1.0
	 */
	final class EDD_Blocks {

		/**
		 * Holds the instance.
		 *
		 * Ensures that only one instance of EDD_Blocks exists in memory at any one
		 * time and it also prevents needing to define globals all over the place.
		 *
		 * TL;DR This is a static property property that holds the singleton instance.
		 *
		 * @access private
		 * @var    \EDD_Blocks
		 * @static
		 *
		 * @since 1.0
		 */
		private static $instance;

		/**
		 * The version number.
		 *
		 * @access private
		 * @since  1.0
		 * @var    string
		 */
		private $version = '1.0.1';

		/**
		 * Generates the main EDD_Blocks instance.
		 *
		 * Insures that only one instance of EDD_Blocks exists in memory at any one
		 * time. Also prevents needing to define globals all over the place.
		 *
		 * @access	public
		 * @since	1.0
		 * @static
		 *
		 * @return \EDD_Blocks The one true EDD_Blocks.
		 */
		public static function instance() {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof EDD_Blocks ) ) {

				self::$instance = new EDD_Blocks;
				self::$instance->setup_constants();
				self::$instance->load_textdomain();
				self::$instance->includes();
				self::$instance->hooks();

			}

			return self::$instance;
		}

		/**
		 * Throws an error on object clone.
		 *
		 * The whole idea of the singleton design pattern is that there is a single
		 * object therefore, we don't want the object to be cloned.
		 *
 		 * @access protected
		 * @since  1.0
		 *
		 * @return void
		 */
		protected function __clone() {
			// Cloning instances of the class is forbidden
			_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'edd-blocks' ), '1.0' );
		}

		/**
		 * Disables unserializing of the class.
		 *
		 * @access protected
		 * @since  1.0
		 *
		 * @return void
		 */
		protected function __wakeup() {
			// Unserializing instances of the class is forbidden
			_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'edd-blocks' ), '1.0' );
		}

		/**
		 * Sets up the class.
		 *
		 * @access private
		 * @since  1.0
		 */
		private function __construct() {
			self::$instance = $this;
		}

		/**
		 * Resets the instance of the class.
		 *
		 * @access public
		 * @since  1.0
		 * @static
		 */
		public static function reset() {
			self::$instance = null;
		}

		/**
		 * Setup plugin constants
		 *
		 * @access private
		 * @since  1.0
		 *
		 * @return void
		 */
		private function setup_constants() {
			// Plugin version
			if ( ! defined( 'EDD_BLOCKS_VERSION' ) ) {
				define( 'EDD_BLOCKS_VERSION', $this->version );
			}

			// Plugin Folder Path
			if ( ! defined( 'EDD_BLOCKS_PLUGIN_DIR' ) ) {
				define( 'EDD_BLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
			}

			// Plugin Folder URL
			if ( ! defined( 'EDD_BLOCKS_PLUGIN_URL' ) ) {
				define( 'EDD_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
			}

			// Plugin Root File
			if ( ! defined( 'EDD_BLOCKS_PLUGIN_FILE' ) ) {
				define( 'EDD_BLOCKS_PLUGIN_FILE', __FILE__ );
			}
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @access public
		 * @since  1.0
		 *
		 * @return void
		 */
		public function load_textdomain() {

			// Set filter for plugin's languages directory.
			$lang_dir = dirname( plugin_basename( __FILE__ ) ) . '/languages/';

			/**
			 * Filters the languages directory.
			 *
			 * @since 1.0
			 *
			 * @param string $lang_dir Language directory.
			 */
			$lang_dir = apply_filters( 'edd_blocks_languages_directory', $lang_dir );

			// Traditional WordPress plugin locale filter.
			$locale   = apply_filters( 'plugin_locale',  get_locale(), 'edd-blocks' );
			$mofile   = sprintf( '%1$s-%2$s.mo', 'edd-blocks', $locale );

			// Setup paths to current locale file.
			$mofile_local  = $lang_dir . $mofile;
			$mofile_global = WP_LANG_DIR . '/edd-blocks/' . $mofile;

			if ( file_exists( $mofile_global ) ) {
				// Look in global /wp-content/languages/edd-blocks/ folder.
				load_textdomain( 'edd-blocks', $mofile_global );
			} elseif ( file_exists( $mofile_local ) ) {
				// Look in local /wp-content/plugins/edd-blocks/languages/ folder.
				load_textdomain( 'edd-blocks', $mofile_local );
			} else {
				// Load the default language files.
				load_plugin_textdomain( 'edd-blocks', false, $lang_dir );
			}
		}

		/**
		 * Include necessary files.
		 *
		 * @access private
		 * @since  1.0
		 *
		 * @return void
		 */
		private function includes() {
			require_once EDD_BLOCKS_PLUGIN_DIR . 'includes/class-assets.php';
			require_once EDD_BLOCKS_PLUGIN_DIR . 'includes/blocks/downloads/index.php';
			require_once EDD_BLOCKS_PLUGIN_DIR . 'includes/functions.php';
			require_once EDD_BLOCKS_PLUGIN_DIR . 'includes/class-shortcodes.php';
			require_once EDD_BLOCKS_PLUGIN_DIR . 'includes/term-images/class-edd-term-meta-ui.php';
			require_once EDD_BLOCKS_PLUGIN_DIR . 'includes/term-images/class-edd-term-images.php';
		}

		/**
		 * Sets up the default hooks and actions.
		 *
		 * @access private
		 * @since  1.0
		 *
		 * @return void
		 */
		private function hooks() {
			add_filter( 'edd_download_category_args', array( $this, 'show_in_rest' ) );
			add_filter( 'edd_download_tag_args', array( $this, 'show_in_rest' ) );

			add_action( 'init', array( $this, '_wp_term_images_init' ), 88 );
		}

		/**
		 * Instantiate the main WP_Term_Images class.
		 *
		 * @since 1.0.0
		 */
		public function _wp_term_images_init() {
			new EDD_Term_Images( __FILE__ );
		}

		/**
		 * Allows the download_category and download_tag taxonomies to be available via the REST API.
		 * This can be added directly to each of the taxonomy's args once merged into core.
		 * 
		 * @since 1.0
		 */
		public function show_in_rest( $args ) {
			$args['show_in_rest'] = true; 
			return $args;
		}

	}

	/**
	 * The main function responsible for returning the one true EDD_Blocks
	 * Instance to functions everywhere.
	 *
	 * Use this function like you would a global variable, except without needing
	 * to declare the global.
	 *
	 * Example: <?php $edd_blocks = edd_blocks(); ?>
	 *
	 * @since  1.0
	 *
	 * @return object The one true EDD_Blocks Instance
	 */
	function edd_blocks() {
		if ( ! class_exists( 'Easy_Digital_Downloads' ) ) {

			if ( ! class_exists( 'EDD_Extension_Activation' ) ) {
				require_once 'includes/class-activation.php';
			}

			$activation = new EDD_Extension_Activation( plugin_dir_path( __FILE__ ), basename( __FILE__ ) );
			$activation = $activation->run();

		} else {
			return EDD_Blocks::instance();
		}
		
	}
	add_action( 'plugins_loaded', 'edd_blocks', 100 );

}