<?php

/**
 * Outputs a list of downloads in a grid.
 * 
 * Very similar to the current [downloads] shortcode function. 
 * In the future the [downloads] shortcode will pass its attributes to this function instead
 *
 * @since 1.0.0
 */
function edd_downloads( $atts = array() ) {

	// Set up the base $query.
	$query = array(
		'post_type' => 'download',
		'orderby'   => $atts['orderby'],
		'order'     => $atts['order'],	
	);

	// Define default $atts
	$atts['relation'] = 'OR';
	$atts['tags'] = '';
	$atts['exclude_category'] = '';
	$atts['exclude_tags'] = '';

	// Pagination.
	if ( filter_var( $atts['pagination'], FILTER_VALIDATE_BOOLEAN ) || ( ! filter_var( $atts['pagination'], FILTER_VALIDATE_BOOLEAN ) && $atts[ 'number' ] ) ) {

		$query['posts_per_page'] = (int) $atts['number'];

		if ( $query['posts_per_page'] < 0 ) {
			$query['posts_per_page'] = abs( $query['posts_per_page'] );
		}

	} else {
		$query['nopaging'] = true;
	}

	// Turn off pagination if the downloads are ordered randomly.
	if ( 'random' == $atts['orderby'] ) {
		$atts['pagination'] = false;
	}

	// Order by.
	switch ( $atts['orderby'] ) {
		case 'price':
			$query['meta_key'] = 'edd_price';
			$query['orderby']  = 'meta_value_num';
		break;

		case 'sales':
			$query['meta_key'] = '_edd_download_sales';
			$query['orderby']  = 'meta_value_num';
		break;

		case 'earnings':
			$query['meta_key'] = '_edd_download_earnings';
			$query['orderby']  = 'meta_value_num';
		break;

		case 'title':
			$query['orderby'] = 'title';
		break;

		case 'id':
			$query['orderby'] = 'ID';
		break;

		case 'random':
			$query['orderby'] = 'rand';
		break;

		case 'post__in':
			$query['orderby'] = 'post__in';
		break;

		case 'name':
			$query['orderby'] = 'name';
		break;

		default:
			$query['orderby'] = 'post_date';
		break;
	}

	if ( isset( $atts['tags'] ) || isset( $atts['category'] ) || isset( $atts['exclude_category'] ) || isset( $atts['exclude_tags'] ) ) {

		$query['tax_query'] = array(
			'relation' => $atts['relation']
		);

		if ( $atts['tags'] ) {

			$tag_list = explode( ',', $atts['tags'] );

			foreach ( $tag_list as $tag ) {

				$t_id  = (int) $tag;
				$is_id = is_int( $t_id ) && ! empty( $t_id );

				if ( $is_id ) {

					$term_id = $tag;

				} else {

					$term = get_term_by( 'slug', $tag, 'download_tag' );

					if ( ! $term ) {
						continue;
					}

					$term_id = $term->term_id;
				}

				$query['tax_query'][] = array(
					'taxonomy' => 'download_tag',
					'field'    => 'term_id',
					'terms'    => $term_id
				);
			}

		}

		if ( $atts['category'] ) {

			$categories = explode( ',', $atts['category'] );

			foreach ( $categories as $category ) {

				$t_id  = (int) $category;
				$is_id = is_int( $t_id ) && ! empty( $t_id );

				if ( $is_id ) {
					$term_id = $category;
				} else {
					$term = get_term_by( 'slug', $category, 'download_category' );

					if ( ! $term ) {
						continue;
					}

					$term_id = $term->term_id;
				}

				$query['tax_query'][] = array(
					'taxonomy' => 'download_category',
					'field'    => 'term_id',
					'terms'    => $term_id,
				);

			}

		}

		if ( $atts['exclude_category'] ) {

			$categories = explode( ',', $atts['exclude_category'] );

			foreach ( $categories as $category ) {

				$t_id  = (int) $category;
				$is_id = is_int( $t_id ) && ! empty( $t_id );

				if ( $is_id ) {

					$term_id = $category;

				} else {

					$term = get_term_by( 'slug', $category, 'download_category' );

					if ( ! $term ) {
						continue;
					}

					$term_id = $term->term_id;
				}

				$query['tax_query'][] = array(
					'taxonomy' => 'download_category',
					'field'    => 'term_id',
					'terms'    => $term_id,
					'operator' => 'NOT IN'
				);
			}

		}

		if ( $atts['exclude_tags'] ) {

			$tag_list = explode( ',', $atts['exclude_tags'] );

			foreach ( $tag_list as $tag ) {

				$t_id  = (int) $tag;
				$is_id = is_int( $t_id ) && ! empty( $t_id );

				if( $is_id ) {

					$term_id = $tag;

				} else {

					$term = get_term_by( 'slug', $tag, 'download_tag' );

					if ( ! $term ) {
						continue;
					}

					$term_id = $term->term_id;
				}

				$query['tax_query'][] = array(
					'taxonomy' => 'download_tag',
					'field'    => 'term_id',
					'terms'    => $term_id,
					'operator' => 'NOT IN'
				);

			}

		}
	}

	if ( isset( $atts['exclude_tags'] ) || isset( $atts['exclude_category'] ) ) {
		$query['tax_query']['relation'] = 'AND';
	}

	if ( isset( $atts['author'] ) ) {
		$authors = explode( ',', $atts['author'] );
		if ( ! empty( $authors ) ) {
			$author_ids = array();
			$author_names = array();

			foreach ( $authors as $author ) {
				if ( is_numeric( $author ) ) {
					$author_ids[] = $author;
				} else {
					$user = get_user_by( 'login', $author );
					if ( $user ) {
						$author_ids[] = $user->ID;
					}
				}
			}

			if ( ! empty( $author_ids ) ) {
				$author_ids      = array_unique( array_map( 'absint', $author_ids ) );
				$query['author'] = implode( ',', $author_ids );
			}
		}
	}

	if ( ! empty( $atts['ids'] ) ) {
		$query['post__in'] = explode( ',', $atts['ids'] );
	}
	
	// Paged.
	if ( get_query_var( 'paged' ) ) {
		$query['paged'] = get_query_var('paged');
	} else if ( get_query_var( 'page' ) ) {
		$query['paged'] = get_query_var( 'page' );
	} else {
		$query['paged'] = 1;
	}

	// Allow the query to be manipulated by other plugins.
	$query = apply_filters( 'edd_downloads_query', $query, $atts );

	$downloads = new WP_Query( $query );

	do_action( 'edd_downloads_list_before', $atts );

	ob_start();

	if ( $downloads->have_posts() ) :
		$i = 1;
		$columns_class   = array( 'edd_download_columns_' . $atts['columns'] );
		$custom_classes  = array_filter( explode( ',', $atts['class'] ) );
		$wrapper_classes = array_unique( array_merge( $columns_class, $custom_classes ) );
		$wrapper_classes = implode( ' ', $wrapper_classes );
	?>

		<div class="edd_downloads_list <?php echo apply_filters( 'edd_downloads_list_wrapper_class', $wrapper_classes, $atts ); ?>">

			<?php do_action( 'edd_downloads_list_top', $atts, $downloads ); ?>

			<?php while ( $downloads->have_posts() ) : $downloads->the_post(); ?>
				<?php do_action( 'edd_download_shortcode_item', $atts, $i ); ?>
			<?php $i++; endwhile; ?>

			<?php wp_reset_postdata(); ?>

			<?php do_action( 'edd_downloads_list_bottom', $atts ); ?>

		</div>

	<?php
	
	else:
		printf( _x( 'No %s found', 'download post type name', 'easy-digital-downloads' ), edd_get_label_plural() );
	endif;

	do_action( 'edd_downloads_list_after', $atts, $downloads, $query );

	$display = ob_get_clean();

	return apply_filters( 'downloads_shortcode', $display, $atts, $atts['buy_button'], $atts['columns'], '', $downloads, $atts['excerpt'], $atts['full_content'], $atts['price'], $atts['thumbnails'], $query );
}

/**
 * Output download terms.
 *
 * @since 1.0.0
 */
function edd_download_terms( $atts = array() ) {

	// Set up defaults.
	$defaults = array(
		'thumbnails'  => true,
		'title'       => true,
		'description' => true,
		'show_empty'  => false,
		'columns'     => 3,
		'count'       => true,
		'orderby'     => 'count',
		'order'       => 'DESC',
	);

	$atts = wp_parse_args( $atts, $defaults );

	// Taxonomy.
	$taxonomy = isset( $atts['taxonomy'] ) ? $atts['taxonomy'] : false;

	// Taxonomy must be specified.
	if ( ! $taxonomy ) {
		return;
	}

	// Thumbnails.
	$thumbnails = $atts['thumbnails'];

	// Title.
	$title = $atts['title'];

	// Description.
	$description = $atts['description'];

	// Show empty terms.
	$show_empty = $atts['show_empty'];

	// Columns.
	$columns = $atts['columns'];

	// Count.
	$count = $atts['count'];

	// Order By.
	$orderby = $atts['orderby'];

	// Order.
	$order = $atts['order'];

	$args = array(
		'taxonomy'   => $taxonomy,
		'orderby'    => $orderby,
		'order'      => $order,
		'hide_empty' => false === $show_empty ? true : false,
	);

	// Hide child download categories by default.
	if ( 'download_category' === $taxonomy ) {
		$args['parent'] = 0;
	}

	$query = new WP_Term_Query( $args );

	// Set up classes.
	$classes   = array( 'edd-download-terms edd_downloads_list' );
	$classes[] = 'edd_download_columns_' . $columns;
	$classes[] = isset( $atts['align'] ) ? 'align' . $atts['align'] : '';
	$classes[] = isset( $atts['class'] ) ? $atts['class'] : '';
	$classes   = implode( ' ', array_filter( $classes ) );

	ob_start();

	if ( ! empty( $query->terms ) ) : ?>
	<div class="<?php echo $classes; ?>">
		<?php foreach ( $query->terms as $term ) :
			$term_description  = term_description( $term->term_id, $term->taxonomy );
			$term_count        = $term->count;
			$attachment_id     = get_term_meta( $term->term_id, 'download_term_image', true );
		?>
		<div class="edd-download-term edd_download">
			<div class="edd_download_inner">

			<?php if ( $thumbnails && $attachment_id ) : ?>
			<div class="edd_download_image">
				<a href="<?php echo esc_url( get_term_link( $term ) ); ?>">
				<?php echo wp_get_attachment_image( $attachment_id, 'large' );  ?>
				</a>
			</div>	
			<?php endif; ?>

			<?php if ( $title ) : ?>
			<div class="edd-download-term-title">
				<h3 class="edd_download_title"><a href="<?php echo esc_url( get_term_link( $term ) ); ?>"><?php echo $term->name; ?></a></h3>
				<?php if ( $count ) : ?>
				<span class="edd-download-term-count">(<?php echo $term_count; ?>)</span>
				<?php endif; ?>
			</div>
			<?php endif; ?>

			<?php if ( $description && $term_description ) : ?>
			<div class="edd-download-term-description">
				<?php echo $term_description; ?>
			</div>
			<?php endif; ?>
			</div>
		</div>
		<?php endforeach; ?>
	</div>
	<?php endif;

	$display = ob_get_clean();
	return $display;
}

/**
 * Register rest fields.
 *
 * @since 1.0.0
 */
function edd_blocks_register_rest_fields() {

	register_rest_field( 'download_category',
		'meta',
		array(
			'get_callback'    => 'edd_blocks_term_meta_callback',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	register_rest_field( 'download_tag',
		'meta',
		array(
			'get_callback'    => 'edd_blocks_term_meta_callback',
			'update_callback' => null,
			'schema'          => null,
		)
	);

}
add_action( 'rest_api_init', 'edd_blocks_register_rest_fields' );

/**
 * Get term meta.
 *
 * @since 1.0.0
 */
function edd_blocks_term_meta_callback( $object, $field_name, $request ) {

	// Get the term ID.
	$term_id = $object['id'];

	// Get the image ID.
	$image_id = get_term_meta( $term_id, 'download_term_image', true );

	// Build meta array.
	$meta = array( 'image' => wp_get_attachment_image( $image_id ) );

	return $meta;

}

/**
 * Add data to the products API output. 
 *
 * @since 1.0.0
 */
function edd_blocks_api_products_product( $product ) {

	// Get the product ID.
	$product_id = $product['info']['id'];

	// Download Image.
	$product['info']['image'] = wp_get_attachment_image( get_post_meta( $product_id, '_thumbnail_id', true ) );

	// Purchase link.
	$product['info']['purchase_link'] = edd_get_purchase_link( array( 'download_id' => $product_id ) );
	
	// Price.
	$product['info']['price'] = edd_price( $product_id, false );

	return $product;

}
add_filter( 'edd_api_products_product', 'edd_blocks_api_products_product' );