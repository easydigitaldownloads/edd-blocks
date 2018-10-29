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
import DownloadTaxonomy from './components/DownloadTaxonomy';

/**
 * WordPress dependencies
 */
const {	Component, Fragment } = wp.element;

const {
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
			downloadTags: [],
		}

	}

	componentDidMount() {
		this.fetchDownloads();
		this.fetchDownloadCategories();
	}

	componentWillUnmount() {
		delete this.downloadsRequest;
		delete this.downloadCategoriesRequest;
		delete this.downloadTagsRequest;
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

		if ( 'download_tags' === type ) {
			// Fetch the download tags when "Download Tags" is selected.
			this.fetchDownloadTags();
			
			// Fetch new download tags when various controls are selected.
			if ( showEmpty !== prevProps.attributes.showEmpty || order !== prevProps.attributes.order || orderBy !== prevProps.attributes.orderBy ) {
				this.fetchDownloadTags();
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
		} else if ( 'download_categories' === type || 'download_tags' === type ) {
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
			},
			{ 
				'value': 'download_tags', 
				'label': __( 'Download Tags' )
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

	fetchDownloadTags() {

		const { showEmpty, order, orderBy, type } = this.props.attributes;

		const query = {
			per_page: -1,
		};

		// Set additional parameters for download tags.
		if ( 'download_tags' === type ) {

			// Must be lowercase.
			query['order'] = order.toLowerCase();
			query['orderby'] = orderBy.toLowerCase();

			// Hide download tags that have no downloads.
			query['hide_empty'] = true !== showEmpty ? true : false;
		}

		const request = apiFetch( {
			path: `/wp/v2/download_tag?${ stringify( {
				...query
			} ) }`,
		} );

		request.then( ( downloadTags ) => {

			if ( this.downloadTagsRequest !== request ) {
				return;
			}

			this.setState( { downloadTags } );

		} );

		this.downloadTagsRequest = request;

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

	renderDownloads() {
		const downloads = this.state.downloads.products;
		const { downloadCategories, downloadTags } = this.state;
		const { attributes } = this.props;
		const { columns, type } = attributes;

		if ( 'downloads' === type ) {
			return (
				<div className={ classnames( 'edd_downloads_list', 'edd_download_columns_' + columns ) }>
					{ downloads.map( ( download ) => <Download download={download} key={download.info.id.toString()} attributes={attributes} /> ) }
				</div>
			);
		} else if ( 'download_categories' === type ) {
			return (
				<div className={ classnames( 'edd_downloads_list', 'edd-download-categories', 'edd_download_columns_' + columns ) }>
					{ downloadCategories.map( ( taxonomy ) => <DownloadTaxonomy key={taxonomy.id} taxonomy={taxonomy} attributes={attributes} /> ) }
				</div>
			);
		} else if ('download_tags' === type ) {
			return (
				<div className={ classnames( 'edd_downloads_list', 'edd-download-tags', 'edd_download_columns_' + columns ) }>
					{ downloadTags.map( ( taxonomy ) => <DownloadTaxonomy key={taxonomy.id} taxonomy={taxonomy} attributes={attributes} /> ) }
				</div>
			);
		}
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
		const isDownloadTaxonomy = type === 'download_categories' || type === 'download_tags';

		let showDescriptionLabel;

		if ( type === 'downloads' ) {
			showDescriptionLabel = __( 'Show Excerpt' );
		} else if ( type === 'download_categories' ) {
			showDescriptionLabel = __( 'Show Category Description' );
		} else if ( type === 'download_tags' ) {
			showDescriptionLabel = __( 'Show Tag Description' );
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
					
					{ isDownloadTaxonomy &&
					<ToggleControl
						label={ 'download_categories' === type ? __( 'Show Category Name' ) : __( 'Show Tag Name' ) }
						checked={ !! showTitle }
						onChange={ () => setAttributes( { showTitle: ! showTitle } ) }
					/>
					}

					<ToggleControl
						label={ showDescriptionLabel }
						checked={ !! showDescription }
						onChange={ this.showDescription }
					/>

					{ showTitle && isDownloadTaxonomy &&
					<ToggleControl
						label={ __( 'Show Count' ) }
						checked={ !! showCount }
						onChange={ () => setAttributes( { showCount: ! showCount } ) }
					/>
					}
					
					{ isDownloadTaxonomy &&
					<ToggleControl
						label={ 'download_categories' === type ? __( 'Show Empty Categories' ) : __( 'Show Empty Tags' ) }
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
					{ this.renderDownloads() }
				</div>
			</Fragment>
		);
	}
}

export default DownloadsEdit;