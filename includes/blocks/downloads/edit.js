/**
 * External dependencies
 */
import isUndefined from 'lodash/isundefined';
import unescape from 'lodash/unescape';
import classnames from 'classnames';
import { stringify } from 'querystringify';

/**
 * WordPress dependencies
 */
const {	Component, Fragment, RawHTML } = wp.element;

const {
	Disabled,
	PanelBody,
	Placeholder,
	ToggleControl,
	RangeControl,
	SelectControl,
	Spinner,
} = wp.components;

const { __ } = wp.i18n;

const {	
	InspectorControls, 
	BlockControls, 
	BlockAlignmentToolbar 
} = wp.editor;

const apiFetch = wp.apiFetch;

/**
 * Minimum number of downloads a user can show using this block.
 *
 * @type {number}
 */
const MIN_DOWNLOADS = 1;

/**
 * Maximum number of comments a user can show using this block.
 *
 * @type {number}
 */
const MAX_DOWNLOADS = 100;

/**
 * Minimum number of columns a user can show using this block.
 *
 * @type {number}
 */
const MIN_COLUMNS = 1;

/**
 * Maximum number of columns a user can show using this block.
 *
 * @type {number}
 */
const MAX_COLUMNS = 6;

class DownloadsEdit extends Component {

	constructor() {
		super( ...arguments );

		this.setColumns = this.setColumns.bind( this );
		this.setAlignment = this.setAlignment.bind( this );
		this.setDownloadsToShow = this.setDownloadsToShow.bind( this );
		this.setOrderOption = this.setOrderOption.bind( this );
		this.setOrderByOption = this.setOrderByOption.bind( this );
		this.setDownloadCategory = this.setDownloadCategory.bind( this );
		this.showExcerpt = this.showExcerpt.bind( this );
		this.showFullContent = this.showFullContent.bind( this );

		this.state = {
			isLoading: true,
			showExcerpt: true,
			showFullContent: false,
			downloads: [],
			downloadCategories: [],
		}

	}

	componentDidMount() {
		this.fetchDownloads();
		this.fetchDownloadCategories();
	}

	componentWillUnmount() {
		delete this.downloadsRequest;
		delete this.downloadCategoriesRequest;	
	}

	componentDidUpdate( prevProps ) {
		const { category, number, order, orderBy } = this.props.attributes;

		if ( category !== prevProps.attributes.category || number !== prevProps.attributes.number || order !== prevProps.attributes.order || orderBy !== prevProps.attributes.orderBy ) {
			this.fetchDownloads();
		}

	}

	setColumns( columns ) {
		this.props.setAttributes( { columns } );
	}

	setAlignment( align ) {
		this.props.setAttributes( { align } );
	}

	setDownloadsToShow( number ) {
		this.props.setAttributes( { number } );
	}

	getOrderOptions() {
		return [
			{ value: 'ASC', label: __( 'Ascending' ) },
			{ value: 'DESC', label: __( 'Descending' ) },
		];
	}

	setOrderOption( value ) {
		this.props.setAttributes( {
			order: value,
		} );
	}

	getOrderByOptions() {
		return [
			{ value: 'date', label: __( 'Date Created' ) },
			{ value: 'earnings', label: __( 'Earnings' ) },
			{ value: 'id', label: __( 'ID' ) },
			{ value: 'price', label: __( 'Price' ) },
			{ value: 'random', label: __( 'Random' ) },
			{ value: 'sales', label: __( 'Sales' ) },
			{ value: 'name', label: __( 'Slug' ) },
			{ value: 'title', label: __( 'Title' ) },
		];
	}

	getDownloadCategories() {

		const { downloadCategories } = this.state;

		const categories = [ 
			{ 
				'value': 'all', 
				'label': __( 'All' )
			}
		];

		downloadCategories.forEach(function(category) {
			categories.push( {
				'value': category.slug,
				'label': category.name
			} );
		});

		return categories;
	}

	setDownloadCategory( value ) {
	
		if ( 'all' === value ) {
			value = undefined;
		}

		this.props.setAttributes( {
			category: value,
		} );

	}

	setOrderByOption( value ) {
		this.props.setAttributes( {
			orderBy: value,
		} );
	}

	showExcerpt() {
		const value = this.state.showExcerpt;
		
		// Update the state.
		this.setState({ 'showExcerpt': ! value, 'showFullContent': value }, function () {
			this.props.setAttributes( { showExcerpt: ! value } );
			this.props.setAttributes( { showFullContent: false } );
		});
	}

	showFullContent() {
		const value = this.state.showFullContent;
		
		// Update the state.
		this.setState({ 'showFullContent': ! value, 'showExcerpt': value }, function () {
			this.props.setAttributes( { showFullContent: ! value } );
			this.props.setAttributes( { showExcerpt: false } );
		});
	}

	fetchDownloadCategories() {

		const request = apiFetch( {
			path: `/wp/v2/download_category?${ stringify( {
				per_page: -1,
			} ) }`,
		} );

		request.then( ( downloadCategories ) => {

			if ( this.downloadCategoriesRequest !== request ) {
				return;
			}

			this.setState( { downloadCategories } );

		} );

		this.downloadCategoriesRequest = request;

	}

	fetchDownloads() {
		
		const { category, number, order } = this.props.attributes;

		let orderby = this.props.attributes.orderBy;

		switch (orderby) {
			case 'id':
				orderby = 'ID'
				break;

			case 'random':
				orderby = 'rand'
				break;	
		
			default:
				break;
		}

		const query = {
			number,
			orderby,
			order,
		};

		// Query downloads by category.
		if ( ! isUndefined( category ) ) {
			query['category'] = category;
		}

		const url = edd_blocks_global_vars.url;

		const request = apiFetch( {
			url: `${url}/edd-api/products?${ stringify( {
				...query
			} ) }`,
		} );

		request.then( ( downloads ) => {

			if ( this.downloadsRequest !== request ) {
				return;
			}

			this.setState( { downloads, isLoading: false } );

		} );

		this.downloadsRequest = request;

	}

	renderDownloads() {
		const downloads = this.state.downloads.products;
		const { columns } = this.props.attributes;

		return (
			<div className={ classnames( 'edd_downloads_list', 'edd_download_columns_' + columns ) }>
				{ downloads.map( ( download ) => this.renderDownloadListItem( download ) ) }
			</div>
		);
		
	}

	renderDownloadListItem( download ) {

		const { showBuyButton, showExcerpt, showFullContent, showPrice } = this.props.attributes;

		return (
			<div className="edd_download" key={ download.info.id }>

				{ this.renderDownloadImage( download ) }

				<h3 className="edd_download_title"><a href={ download.info.link } target="_blank">{ this.renderDownloadName( download ) }</a></h3>

				{ showExcerpt &&
					<RawHTML>{ download.info.excerpt }</RawHTML>
				}
				
				{ showFullContent &&
					<RawHTML>{ download.info.content }</RawHTML>
				}

				{ showPrice &&
				<div className="edd_price"><RawHTML>{ download.info.price }</RawHTML></div>
				}
				
				{ showBuyButton &&
				<Disabled>
					<div className="edd_download_buy_button">
						<RawHTML>{ download.info.purchase_link }</RawHTML>
					</div>
				</Disabled>
				}
			</div>
		);
	}

	renderDownloadName( download ) {
		const title = download.info.title;

		if ( ! title ) {
			return __( '(Untitled)' );
		}

		return unescape( title ).trim();
	}

	renderDownloadImage( download ) {

		const { showThumbnails } = this.props.attributes;
		const image = download.info.image;

		if ( ! showThumbnails || ! image ) {
			return;
		}

		return <RawHTML>{ image }</RawHTML>
	}

	render() {
	
		const {
			attributes,
			setAttributes,
		} = this.props;

		const { 
			align,
			number,
			columns,
			showBuyButton,
			showPrice,
			showThumbnails,
			showExcerpt,
			showFullContent,
			showPagination,
			order,
			orderBy,
			category
		} = attributes;

		const downloads = this.state.downloads.products;
		const isLoading = this.state.isLoading;

		if ( isLoading ) {
			return (
				<Fragment>
					<Placeholder
						icon="download"
						label={ __( 'Downloads' ) }
					>
						<Spinner />
					</Placeholder>
				</Fragment>
			);
		}

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Download Settings' ) }>
					<RangeControl
						label={ __( 'Number of downloads' ) }
						value={ number }
						onChange={ this.setDownloadsToShow }
						min={ MIN_DOWNLOADS }
						max={ MAX_DOWNLOADS }
					/>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ this.setColumns }
						min={ MIN_COLUMNS }
						max={ MAX_COLUMNS }
					/>
					<ToggleControl
						label={ __( 'Show Buy Button' ) }
						checked={ !! showBuyButton }
						onChange={ () => setAttributes( { showBuyButton: ! showBuyButton } ) }
					/>
					<ToggleControl
						label={ __( 'Show Price' ) }
						checked={ !! showPrice }
						onChange={ () => setAttributes( { showPrice: ! showPrice } ) }
					/>
					<ToggleControl
						label={ __( 'Show Thumbnails' ) }
						checked={ !! showThumbnails }
						onChange={ () => setAttributes( { showThumbnails: ! showThumbnails } ) }
					/>
					<ToggleControl
						label={ __( 'Show Excerpt' ) }
						checked={ !! showExcerpt }
						onChange={ this.showExcerpt }
					/>
					<ToggleControl
						label={ __( 'Show Full Content' ) }
						checked={ !! showFullContent }
						onChange={ this.showFullContent }
					/>
					<ToggleControl
						label={ __( 'Show Pagination' ) }
						checked={ !! showPagination }
						onChange={ () => setAttributes( { showPagination: ! showPagination } ) }
					/>
					<SelectControl
						label={ __( 'Order By' ) }
						value={ orderBy }
						options={ this.getOrderByOptions() }
						onChange={ this.setOrderByOption }
					/>
					<SelectControl
						label={ __( 'Order' ) }
						value={ order }
						options={ this.getOrderOptions() }
						onChange={ this.setOrderOption }
					/>
					<SelectControl
						label={ __( 'Show Downloads From Category' ) }
						value={ category }
						options={ this.getDownloadCategories() }
						onChange={ this.setDownloadCategory }
					/>
				</PanelBody>
			</InspectorControls>
		);

		const hasDownloads = Array.isArray( downloads ) && downloads.length;

		if ( ! hasDownloads ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="download"
						label={ __( 'Downloads' ) }
					>
						{ ! Array.isArray( downloads ) ?
							<Spinner /> :
							__( 'No downloads found.' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		return (
			<Fragment>
				{ inspectorControls }
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ this.setAlignment }
						controls={ [ 'wide', 'full' ] }
					/>
				</BlockControls>
				<div className={ this.props.className }>
					{ this.renderDownloads() }
				</div>
			</Fragment>
		);
	}
}

export default DownloadsEdit;