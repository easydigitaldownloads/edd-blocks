/**
 * External dependencies
 */
import isUndefined from 'lodash/isundefined';
import classnames from 'classnames';
import { stringify } from 'querystringify';

/**
 * Components
 */
import Download from './components/Download';
import DownloadCategory from './components/DownloadCategory';

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

class DownloadsEdit extends Component {

	constructor() {
		super( ...arguments );

		this.setDownloadCategory = this.setDownloadCategory.bind( this );
		this.showDescription = this.showDescription.bind( this );
		this.showFullContent = this.showFullContent.bind( this );

		this.state = {
			isLoading: true,
			showDescription: true,
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
		const { category, number, order, orderBy, showEmpty, type } = this.props.attributes;

		if ( category !== prevProps.attributes.category || number !== prevProps.attributes.number || order !== prevProps.attributes.order || orderBy !== prevProps.attributes.orderBy ) {
			this.fetchDownloads();
		}

		if ( 'download_categories' === type ) {
			if ( showEmpty !== prevProps.attributes.showEmpty || order !== prevProps.attributes.order || orderBy !== prevProps.attributes.orderBy ) {
				this.fetchDownloadCategories();
			}
		}

	}

	getOrderOptions() {
		return [
			{ value: 'ASC', label: __( 'Ascending' ) },
			{ value: 'DESC', label: __( 'Descending' ) },
		];
	}
	
	getOrderByOptions() {

		const { type } = this.props.attributes;

		let options;

		if ( 'downloads' === type ) {
			options = [
				{ value: 'date', label: __( 'Date Created' ) },
				{ value: 'earnings', label: __( 'Earnings' ) },
				{ value: 'id', label: __( 'ID' ) },
				{ value: 'price', label: __( 'Price' ) },
				{ value: 'random', label: __( 'Random' ) },
				{ value: 'sales', label: __( 'Sales' ) },
				{ value: 'name', label: __( 'Slug' ) },
				{ value: 'title', label: __( 'Title' ) },
			];
		} else if ( 'download_categories' === type ) {
			options = [
				{ value: 'count', label: __( 'Count' ) },
				{ value: 'id', label: __( 'ID' ) },
				{ value: 'name', label: __( 'Name' ) },
				{ value: 'slug', label: __( 'Slug' ) },
			];
		}

		return options;
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

	getBlockTypes() {
		return [
			{ 
				'value': 'downloads', 
				'label': __( 'Downloads' )
			},
			{ 
				'value': 'download_categories', 
				'label': __( 'Download Categories' )
			}
		];
	}

	setDownloadCategory( value ) {
	
		if ( 'all' === value ) {
			value = undefined;
		}

		this.props.setAttributes( {
			category: value,
		} );

	}

	showDescription() {
		const value = this.state.showDescription;
		
		// Update the state.
		this.setState({ 'showDescription': ! value, 'showFullContent': value }, function () {
			this.props.setAttributes( { showDescription: ! value } );
			this.props.setAttributes( { showFullContent: false } );
		});
	}

	showFullContent() {
		const value = this.state.showFullContent;
		
		// Update the state.
		this.setState({ 'showFullContent': ! value, 'showDescription': value }, function () {
			this.props.setAttributes( { showFullContent: ! value } );
			this.props.setAttributes( { showDescription: false } );
		});
	}

	fetchDownloadCategories() {

		const { showEmpty, order, orderBy, type } = this.props.attributes;

		const query = {
			per_page: -1,
		};

		// Set additional parameters for download categories.
		if ( 'download_categories' === type ) {

			// Must be lowercase.
			query['order'] = order.toLowerCase();
			query['orderby'] = orderBy.toLowerCase();

			// Hide download categories that have no downloads.
			query['hide_empty'] = true !== showEmpty ? true : false;
		}

		const request = apiFetch( {
			path: `/wp/v2/download_category?${ stringify( {
				...query
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
			url: `${url}/?edd-api=products&${ stringify( {
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

	// Render the downloads in a grid.
	renderDownloads() {
		const downloads = this.state.downloads.products;
		const { columns } = this.props.attributes;
		const { attributes } = this.props;

		return (
			<div className={ classnames( 'edd_downloads_list', 'edd_download_columns_' + columns ) }>
				{ downloads.map( ( download ) => <Download download={download} key={download.info.id.toString()} attributes={attributes} /> ) }
			</div>
		);
		
	}

	// Render the download categories in a grid.
	renderDownloadCategories() {
		const { downloadCategories } = this.state;
		const { attributes } = this.props;
		const { columns } = attributes;

		return (
			<div className={ classnames( 'edd_downloads_list', 'edd-download-categories', 'edd_download_columns_' + columns ) }>
				{ downloadCategories.map( ( category ) => <DownloadCategory key={category.id} category={category} attributes={attributes} /> ) }
			</div>
		);
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
			showDescription,
			showFullContent,
			showPagination,
			order,
			orderBy,
			category,
			type,
			showTitle,
			showCount,
			showEmpty,
		} = attributes;

		const downloads = this.state.downloads.products;
		const isLoading = this.state.isLoading;

		let showDescriptionLabel;

		if ( type === 'downloads' ) {
			showDescriptionLabel = __( 'Show Excerpt' );
		} else if ( type === 'download_categories' ) {
			showDescriptionLabel = __( 'Show Category Description' );
		} else {
			showDescriptionLabel = __( 'Show Description' );
		}

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
				<PanelBody title={ __( 'Settings' ) }>
					
					<SelectControl
						label={ __( 'Display' ) }
						value={ type }
						options={ this.getBlockTypes() }
						onChange={ (value) => setAttributes( { type: value } ) }
					/>

					{ type === 'downloads' &&
					<RangeControl
						label={ __( 'Number of downloads' ) }
						value={ number }
						onChange={ (number) => setAttributes( { number } ) }
						min={ 1 }
						max={ 100 }
					/>
					}

					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ (columns) => setAttributes( { columns } ) }
						min={ 1 }
						max={ 6 }
					/>
					
					{ type === 'downloads' &&
					<ToggleControl
						label={ __( 'Show Buy Button' ) }
						checked={ !! showBuyButton }
						onChange={ () => setAttributes( { showBuyButton: ! showBuyButton } ) }
					/>
					}
					
					{ type === 'downloads' &&
					<ToggleControl
						label={ __( 'Show Price' ) }
						checked={ !! showPrice }
						onChange={ () => setAttributes( { showPrice: ! showPrice } ) }
					/>
					}

					<ToggleControl
						label={ __( 'Show Thumbnails' ) }
						checked={ !! showThumbnails }
						onChange={ () => setAttributes( { showThumbnails: ! showThumbnails } ) }
					/>
					
					{ type === 'download_categories' &&
					<ToggleControl
						label={ __( 'Show Category Name' ) }
						checked={ !! showTitle }
						onChange={ () => setAttributes( { showTitle: ! showTitle } ) }
					/>
					}

					<ToggleControl
						label={ showDescriptionLabel }
						checked={ !! showDescription }
						onChange={ this.showDescription }
					/>

					{ showTitle && type === 'download_categories' &&
					<ToggleControl
						label={ __( 'Show Count' ) }
						checked={ !! showCount }
						onChange={ () => setAttributes( { showCount: ! showCount } ) }
					/>
					}
					
					{ type === 'download_categories' &&
					<ToggleControl
						label={ __( 'Show Empty Categories' ) }
						checked={ !! showEmpty }
						onChange={ () => setAttributes( { showEmpty: ! showEmpty } ) }
					/>
					}

					{ type === 'downloads' &&
					<ToggleControl
						label={ __( 'Show Full Content' ) }
						checked={ !! showFullContent }
						onChange={ this.showFullContent }
					/>
					}

					{ type === 'downloads' &&
					<ToggleControl
						label={ __( 'Show Pagination' ) }
						checked={ !! showPagination }
						onChange={ () => setAttributes( { showPagination: ! showPagination } ) }
					/>
					}

					<SelectControl
						label={ __( 'Order By' ) }
						value={ orderBy }
						options={ this.getOrderByOptions() }
						onChange={ (orderBy) => setAttributes( { orderBy } ) }
					/>

					<SelectControl
						label={ __( 'Order' ) }
						value={ order }
						options={ this.getOrderOptions() }
						onChange={ ( order ) => setAttributes( { order } ) }
					/>

					{ type === 'downloads' &&
					<SelectControl
						label={ __( 'Show Downloads From Category' ) }
						value={ category }
						options={ this.getDownloadCategories() }
						onChange={ this.setDownloadCategory }
					/>
					}

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
						onChange={ ( align ) => setAttributes( { align } ) }
						controls={ [ 'wide', 'full' ] }
					/>
				</BlockControls>
				<div className={ this.props.className }>
					{ type === 'downloads' ? this.renderDownloads() : this.renderDownloadCategories() }
				</div>
			</Fragment>
		);
	}
}

export default DownloadsEdit;