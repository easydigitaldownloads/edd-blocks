<?php

/**
 * Term Images Class
 * Based off the WP Terms Images plugin (https://github.com/stuttter/wp-term-images) by John James Jacoby (https://github.com/JJJ)
 * 
 * @since 1.0.0
 */

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'EDD_Term_Images' ) ) :
/**
 * Main EDD Term Images class
 *
 * @since 1.0.0
 */
final class EDD_Term_Images extends EDD_Term_Meta_UI {

	/**
	 * @var string Metadata key
	 */
	public $meta_key = 'download_term_image';

	/**
	 * Hook into queries, admin screens, and more!
	 *
	 * @since 1.0.0
	 */
	public function __construct( $file = '' ) {

		// Setup the labels
		$this->labels = array(
			'singular'    => esc_html__( 'Image',  'edd-blocks' ),
			'plural'      => esc_html__( 'Images', 'edd-blocks' ),
			'description' => esc_html__( 'Assign an image to this term.', 'edd-blocks' )
		);

		// Call the parent and pass the file
		parent::__construct( $file );
	}

	/** Assets ****************************************************************/

	/**
	 * Enqueue quick-edit JS
	 *
	 * @since 1.0.0
	 */
	public function enqueue_scripts() {

		// Enqueue media
		wp_enqueue_media();

		// Enqueue media handler; includes quick-edit
		wp_enqueue_style( 'edd-term-images',  $this->url . 'includes/term-images/assets/css/term-image.css', array(),           EDD_BLOCKS_VERSION       );
		wp_enqueue_script( 'edd-term-images', $this->url . 'includes/term-images/assets/js/term-image.js',   array( 'jquery' ), EDD_BLOCKS_VERSION, true );

		// Term ID
		$term_id = ! empty( $_GET['tag_ID'] )
			? (int) $_GET['tag_ID']
			: 0;

		// Localize
		wp_localize_script( 'edd-term-images', 'i10n_WPTermImages', array(
			'insertMediaTitle' => esc_html__( 'Choose an Image', 'edd-blocks' ),
			'insertIntoPost'   => esc_html__( 'Set as image',    'edd-blocks' ),
			'deleteNonce'      => wp_create_nonce( 'remove_wp_term_images_nonce' ),
			'mediaNonce'       => wp_create_nonce( 'assign_wp_term_images_nonce' ),
			'term_id'          => $term_id,
		) );
	}

	/**
	 * Add help tabs for `image` column
	 *
	 * @since 1.0.0
	 */
	public function help_tabs() {
		get_current_screen()->add_help_tab(array(
			'id'      => 'edd_term_image_help_tab',
			'title'   => __( 'Term Image', 'edd-blocks' ),
			'content' => '<p>' . __( 'Terms can have unique images to help separate them from each other.', 'edd-blocks' ) . '</p>',
		) );
	}

	/**
	 * Return the formatted output for the colomn row
	 *
	 * @since 1.0.0
	 *
	 * @param string $meta
	 */
	protected function format_output( $meta = '' ) {

		// Filter image attributes and add the attachment ID
		add_filter( 'wp_get_attachment_image_attributes', array( $this, 'attachment_id_attr' ), 10, 2 );

		// Output the image attachment
		echo wp_get_attachment_image( $meta );

		// Remove our filter
		remove_filter( 'wp_get_attachment_image_attributes', array( $this, 'attachment_id_attr' ), 10, 2 );
	}

	/**
	 * Add attachment ID as data attribute, used by Quick Edit
	 *
	 * @since 1.0.0
	 *
	 * @param array $attr
	 * @param int   $attachment
	 * @param int   $size
	 */
	public static function attachment_id_attr( $attr = array(), $attachment = 0 ) {
		$attr['data-attachment-id'] = $attachment->ID;
		return $attr;
	}

	/**
	 * Output the form field
	 *
	 * @since 1.0.0
	 *
	 * @param  $term
	 */
	protected function form_field( $term = '' ) {

		$term_id = ! empty( $term->term_id )
			? $term->term_id
			: 0;

		// Remove image URL
		$remove_url = add_query_arg( array(
			'action'   => 'remove-edd-term-images',
			'term_id'  => $term_id,
			'_wpnonce' => false,
		) );

		// Get the meta value
		$value  = $this->get_meta( $term_id );
		$hidden = empty( $value )
			? ' style="display: none;"'
			: ''; ?>

		<div>
			<img id="edd-term-images-photo" src="<?php echo esc_url( wp_get_attachment_image_url( $value, 'full' ) ); ?>"<?php echo $hidden; ?> />
			<input type="text" style="display: none;" name="term-<?php echo esc_attr( $this->meta_key ); ?>" id="term-<?php echo esc_attr( $this->meta_key ); ?>" value="<?php echo esc_attr( $value ); ?>" />
		</div>

		<a class="button-secondary edd-term-images-media">
			<?php esc_html_e( 'Choose Image', 'edd-blocks' ); ?>
		</a>

		<a href="<?php echo esc_url( $remove_url ); ?>" class="button edd-term-images-remove"<?php echo $hidden; ?>>
			<?php esc_html_e( 'Remove', 'edd-blocks' ); ?>
		</a>

		<?php
	}

	/**
	 * Output the form field
	 *
	 * @since 1.0.0
	 *
	 * @param  $term
	 */
	protected function quick_edit_form_field() {
		?>

		<input type="hidden" name="term-<?php echo esc_attr( $this->meta_key ); ?>" value="">
		<button class="button edd-term-images-media quick">
			<?php esc_html_e( 'Choose Image', 'edd-blocks' ); ?>
		</button>
		<img src="" class="edd-term-images-media quick" style="display: none;" />
		<a href="" class="button edd-term-images-remove quick" style="display: none;">
			<?php esc_html_e( 'Remove', 'edd-blocks' ); ?>
		</a>

		<?php
	}
}
endif;
