<?php

class EDD_Blocks_Taxonomies {

	/**
	 * Initializes script or style-related callbacks.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'download_category_add_form_fields', array( $this, 'add_category_image' ), 10, 2 );
		add_action( 'created_download_category', array( $this, 'save_category_image' ), 10, 2 );

		add_action( 'download_category_edit_form_fields', array( $this, 'update_category_image' ), 10, 2 );
		add_action( 'edited_download_category', array( $this, 'updated_category_image' ), 10, 2 );

		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_media' ) );
		add_action( 'admin_footer', array( $this, 'add_script' ) );
	}

	/**
	 * Enqueue media.
	 * 
	 * @since 1.0.0
	 */
	public function enqueue_media() {
		if ( ! isset( $_GET['taxonomy'] ) || $_GET['taxonomy'] !== 'download_category' ) {
			return;
		}

		wp_enqueue_media();
	}

	/**
	 * Add a form field in the new category page.
	 * 
	 * @since 1.0.0
	 */
	public function add_category_image( $taxonomy ) { 
	?>
		<div class="form-field term-group">
			<label for="download-category-image-id"><?php _e( 'Image', 'edd-blocks' ); ?></label>
			<input type="hidden" id="download-category-image-id" name="download_category_image_id">
			<div id="category-image-wrapper"></div>
			<p>
				<input type="button" class="button button-secondary" id="edd-blocks-add-term-image" name="edd_blocks_tax_media_button" value="<?php _e( 'Add Image', 'edd-blocks' ); ?>" />
				<input type="button" class="button button-secondary" id="edd-blocks-remove-term-image" name="edd_blocks_tax_media_remove" value="<?php _e( 'Remove Image', 'edd-blocks' ); ?>" />
			</p>
		</div>
	<?php
	}

	/**
	 * Save the form field.
	 * 
	 * @since 1.0.0
	 */
	public function save_category_image( $term_id, $tt_id ) {
		if ( isset( $_POST['download_category_image_id'] ) && '' !== $_POST['download_category_image_id'] ){
			add_term_meta( $term_id, 'download_category_image_id', absint( $_POST['download_category_image_id'] ), true );
		}
	}

	/**
	 * Edit the form field.
	 * 
	 * @since 1.0.0
	 */
	public function update_category_image( $term, $taxonomy ) { ?>
		<tr class="form-field term-group-wrap">
			<th scope="row">
				<label for="download-category-image-id"><?php _e( 'Image', 'edd-blocks' ); ?></label>
			</th>
			<td>
				<?php $image_id = get_term_meta( $term->term_id, 'download_category_image_id', true ); ?>
				<input type="hidden" id="download-category-image-id" name="download_category_image_id" value="<?php echo esc_attr( $image_id ); ?>">
				<div id="category-image-wrapper">
					<?php if ( $image_id ) { echo wp_get_attachment_image( $image_id, 'thumbnail' ); } ?>
				</div>
				<p>
					<input type="button" class="button button-secondary" id="edd-blocks-add-term-image" name="edd_blocks_tax_media_button" value="<?php _e( 'Add Image', 'edd-blocks' ); ?>" />
					<input type="button" class="button button-secondary" id="edd-blocks-remove-term-image" name="edd_blocks_tax_media_remove" value="<?php _e( 'Remove Image', 'edd-blocks' ); ?>" />
				</p>
			</td>
		</tr>
	<?php
	}

	/**
	 * Update the form field value.
	 * 
	 * @since 1.0.0
	 */
	public function updated_category_image( $term_id, $tt_id ) {
		if ( isset( $_POST['download_category_image_id'] ) && '' !== $_POST['download_category_image_id'] ) {
			update_term_meta( $term_id, 'download_category_image_id', absint( $_POST['download_category_image_id'] ) );
		} else {
			delete_term_meta( $term_id, 'download_category_image_id' );
		}
	}

	/**
	 * Enqueue styles and scripts.
	 * 
	 * @since 1.0.0
	 */
	public function add_script() {
		if ( ! isset( $_GET['taxonomy'] ) || $_GET['taxonomy'] !== 'download_category' ) {
			return;
		} 
	?>
		<script>
			jQuery(document).ready( function($) {
				_wpMediaViewsL10n.insertIntoPost = '<?php _e( 'Insert', 'edd-blocks' ); ?>';
				function ct_media_upload(button_class) {
					var _custom_media = true,
					_orig_send_attachment = wp.media.editor.send.attachment;
					$('body').on('click', button_class, function(e) {
						var button_id = '#'+$(this).attr('id');
						var send_attachment_bkp = wp.media.editor.send.attachment;
						var button = $(button_id);
						_custom_media = true;
						wp.media.editor.send.attachment = function(props, attachment) {
							if( _custom_media ) {
								$('#download-category-image-id').val(attachment.id);
								$('#category-image-wrapper').html('<img class="custom_media_image" src="" style="margin:0;padding:0;max-height:100px;float:none;" />');
								$('#category-image-wrapper .custom_media_image').attr('src',attachment.url).css('display','block');
							} else {
								return _orig_send_attachment.apply( button_id, [props, attachment] );
							}
						}
						wp.media.editor.open(button);
						return false;
					});
				}
				ct_media_upload('#edd-blocks-add-term-image');
				$('body').on('click','#edd-blocks-remove-term-image',function() {
					$('#download-category-image-id').val('');
					$('#category-image-wrapper').html('<img class="custom_media_image" src="" style="margin:0;padding:0;max-height:100px;float:none;" />');
				});
				// Thanks: http://stackoverflow.com/questions/15281995/wordpress-create-category-ajax-response
				$(document).ajaxComplete(function(event, xhr, settings) {
					var queryStringArr = settings.data.split('&');
					if( $.inArray('action=add-tag', queryStringArr) !== -1 ) {
						var xml = xhr.responseXML;
						$response = $(xml).find('term_id').text();
						if ( $response !== '' ) {
							// Clear the thumb image
							$('#category-image-wrapper').html('');
						}
					}
				});
			});
		</script>
	<?php }

}
new EDD_Blocks_Taxonomies;