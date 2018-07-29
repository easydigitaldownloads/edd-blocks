import { stringify } from 'querystringify';

const {	Component, Fragment } = wp.element;

const {	
	Disabled,
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
	ServerSideRender
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
const MAX_COLUMNS = 4;

class DownloadsEdit extends Component {

	constructor( props ) {
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
			showExcerpt: true,
			showFullContent: false,
			downloadCategories: [],
		}

	}

	componentDidMount() {
		 this.fetchDownloadCategories();
	}

	componentWillUnmount() {
		delete this.downloadCategoriesRequest;
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
			{ value: 'asc', label: __( 'Ascending' ) },
			{ value: 'desc', label: __( 'Descending' ) },
		];
	}

	setOrderOption( value ) {
		this.props.setAttributes( {
			order: value,
		} );
	}

	getOrderByOptions() {
		return [
			{ value: 'id', label: __( 'ID' ) },
			{ value: 'post_date', label: __( 'Post Date' ) },
			{ value: 'price', label: __( 'Price' ) },
			{ value: 'random', label: __( 'Random' ) },
			{ value: 'sales', label: __( 'Sales' ) },
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

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ this.setAlignment }
						controls={ [ 'wide', 'full' ] }
					/>
				</BlockControls>
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
							label={ __( 'Order' ) }
							value={ order }
							options={ this.getOrderOptions() }
							onChange={ this.setOrderOption }
						/>
						<SelectControl
							label={ __( 'Order By' ) }
							value={ orderBy }
							options={ this.getOrderByOptions() }
							onChange={ this.setOrderByOption }
						/>
						<SelectControl
							label={ __( 'Show Downloads From Category' ) }
							value={ category }
							options={ this.getDownloadCategories() }
							onChange={ this.setDownloadCategory }
						/>
					</PanelBody>
				</InspectorControls>
				<Disabled>
					<ServerSideRender
						block="easydigitaldownloads/downloads"
						attributes={ this.props.attributes }
					/>
				</Disabled>
			</Fragment>

		);

	}
}

export default DownloadsEdit;