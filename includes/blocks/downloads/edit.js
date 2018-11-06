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

const { select } = wp.data;

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
		const { type } = this.props.attributes;

		if ( 'downloads' === type ) {
			this.fetchDownloads();
			this.fetchDownloadTaxonomy({ taxonomy: 'download_category' });
		}

		if ( 'download_categories' === type ) {
			this.fetchDownloadTaxonomy({ taxonomy: 'download_category' });
		}

		if ( 'download_tags' === type ) {
			this.fetchDownloadTaxonomy({ taxonomy: 'download_tag' });
		}

	}

	componentDidUpdate( prevProps ) {
		const { category, number, order, orderBy, showEmpty, type } = this.props.attributes;
		const { alignWide } = wp.data.select( "core/editor" ).getEditorSettings();

		const prevProp = prevProps.attributes;

		if ( 'downloads' === type ) {

			if ( 
				category !== prevProp.category || 
				number !== prevProp.number || 
				order !== prevProp.order || 
				orderBy !== prevProp.orderBy 
			) {
				// Fetch new array of downloads when various controls are updated and store them in state.
				this.fetchDownloads();
			}

			// Block type was switched to "Downloads" from another block type.
			if ( 'downloads' !== prevProp.type ) {
				// Fetch downloads and store them in state.
				this.fetchDownloads();

				// Re-fetch the download categories if "Show Empty Categories" is false. 
				// All download categories should show in the select control.
				if ( ! showEmpty ) {
					this.fetchDownloadTaxonomy({ taxonomy: 'download_category' });
				}

				// Reset the orderBy attribute to "date" once the Downloads block type is selected.
				this.props.setAttributes( { orderBy: 'date' } );
			}
		}

		if ( 'download_categories' === type ) {

			if ( 
				showEmpty !== prevProp.showEmpty || 
				order !== prevProp.order || 
				orderBy !== prevProp.orderBy 
			) {
				// Fetch new array of download categories when various controls are updated and store in state.
				this.fetchDownloadTaxonomy({ taxonomy: 'download_category' });
			}

			// Fetch download categories once the block type is switched to "Download Categories" from another block type.
			if ( 'download_categories' !== prevProp.type ) {
				// Fetch a new list of download categories and store it in state.
				this.fetchDownloadTaxonomy({ taxonomy: 'download_category' });

				// Reset the orderBy attribute to "count" once the download categories block type is selected.
				this.props.setAttributes( { orderBy: 'count' } );
			}

		}

		if ( 'download_tags' === type ) {

			if ( 
				showEmpty !== prevProp.showEmpty || 
				order !== prevProp.order || 
				orderBy !== prevProp.orderBy 
			) {
				// Fetch new array of download tags when various controls are updated and store in state.
				this.fetchDownloadTaxonomy({ taxonomy: 'download_tag' });
			}

			// Fetch download tags once the block type is switched to "Download Tags" from another block type.
			if ( 'download_tags' !== prevProp.type ) {
				// Fetch a new list of download tags and store it in state.
				this.fetchDownloadTaxonomy({ taxonomy: 'download_tag' });

				// Reset the orderBy attribute to "count" once the download tags block type is selected.
				this.props.setAttributes( { orderBy: 'count' } );
			}

		}

		// Clear "align" attribute if theme does not support wide images.
		// This prevents the attribute from being "stuck" on a particular setting if the theme is switched.
		if ( ! alignWide ) {
			this.props.setAttributes( { align: undefined } );
		}
	}

	componentWillUnmount() {
		// Delete fetch requests.
		delete this.downloadsRequest;
		delete this.downloadCategoriesRequest;
		delete this.downloadTagsRequest;
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
				'label': category.name,
				'value': category.id
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

		// This will support an array of category IDs in the future.
		this.props.setAttributes( {
			category: value, // Store the category's ID.
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

	fetchDownloadTaxonomy( args ) {

		const { showEmpty, order, orderBy, type } = this.props.attributes;

		const taxonomy = args.taxonomy;

		// Get the options
		const options = this.getOrderByOptions();

		const queryOrderBy = args.orderBy ? args.orderBy.toLowerCase() : orderBy.toLowerCase();
		const queryOrder = args.order ? args.order.toLowerCase() : order.toLowerCase();

		const query = {
			per_page: -1,
			orderby: queryOrderBy,
			order: queryOrder
		};

		// Reset the orderby and order parameters for the downloads block type.
		// The downloads block type displays a list of categories.
		if ( 'downloads' === type ) {
			query['orderby'] = 'name';
			query['order'] = 'asc';
		}

		if ( 'download_categories' === type || 'download_tags' === type ) {

			// If the taxonomy request is for downloads categories or tags,
			// check to see if the orderby parameter is correct for the block type.
			// If not, reset it to "count", the first available option for taxonomies.
			let orderByExists = options.find(obj => obj.value === orderBy);
			if ( ! orderByExists ) {
				query['orderby'] = 'count';
			}

			// Hide download terms that have no downloads by default.
			query['hide_empty'] = true !== showEmpty ? true : false;
		}

		const request = apiFetch( {
			path: `/wp/v2/${taxonomy}?${ stringify( {
				...query
			} ) }`,
		} );

		// Request download categories and store in state.
		if ( 'download_category' === taxonomy ) {
			request.then( ( downloadCategories ) => {
				if ( this.downloadCategoriesRequest !== request ) {
					return;
				}
	
				this.setState( { downloadCategories, isLoading: false } );
			} );

			this.downloadCategoriesRequest = request;
		}

		// Request download tags and store in state.
		if ( 'download_tag' === taxonomy ) {
			request.then( ( downloadTags ) => {
				if ( this.downloadTagsRequest !== request ) {
					return;
				}
	
				this.setState( { downloadTags, isLoading: false } );
			} );

			this.downloadTagsRequest = request;
		}
	}

	fetchDownloads() {
		
		// Get the options
		const options = this.getOrderByOptions();

		const { category, number, order, orderBy } = this.props.attributes;

		let queryOrderBy = orderBy;

		switch (queryOrderBy) {
			case 'id':
				queryOrderBy = 'ID'; // EDD expects "ID", not "id".
				break;

			case 'random':
				queryOrderBy = 'rand';
				break;	
		
			default:
				queryOrderBy = orderBy;
				break;
		}

		const query = {
			number,
			order,
			orderby: queryOrderBy
		};

		// Query downloads by category.
		if ( ! isUndefined( category ) ) {
			query['category'] = category;
		}

		const url = edd_blocks_global_vars.url;

		// Reset orderby parameter to "date", in case it's set to something that 
		// the block type does not support.
		let orderByExists = options.find(obj => obj.value === orderBy);
		if ( ! orderByExists ) {
			query['orderby'] = 'date';
		}

		const request = apiFetch( {
			url: `${url}/?edd-api=products&${ stringify( {
				...query
			} ) }`,
		} );

		// Request downloads and store in state.
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
				<div className={ classnames( 'edd_downloads_list', 'edd-download-terms', 'edd_download_columns_' + columns ) }>
					{ downloadCategories.map( ( taxonomy ) => <DownloadTaxonomy key={taxonomy.id} taxonomy={taxonomy} attributes={attributes} /> ) }
				</div>
			);
		} else if ('download_tags' === type ) {
			return (
				<div className={ classnames( 'edd_downloads_list', 'edd-download-terms', 'edd_download_columns_' + columns ) }>
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

		const { downloadTags, downloadCategories, isLoading } = this.state;
		const downloads = this.state.downloads.products;

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

		// Loading states.
		let showLoadingLabel;

		if ( type === 'download_categories' ) {
			showLoadingLabel = __( 'Loading download categories' );
		} else if ( type === 'download_tags' ) {
			showLoadingLabel = __( 'Loading download tags' );
		} else {
			showLoadingLabel = __( 'Loading downloads' );
		}

		if ( isLoading ) {
			return (
				<Fragment>
					<Placeholder
						icon="download"
						label={ showLoadingLabel }
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
						label={ __( 'Downloads Per Page' ) }
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
		const hasDownloadTags = Array.isArray( downloadTags ) && downloadTags.length;
		const hasDownloadCategories = Array.isArray( downloadCategories ) && downloadCategories.length;

		if ( ! hasDownloads && type === 'downloads' ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="download"
						label={ __( 'Loading downloads' ) }
					>
						{ ! Array.isArray( downloads ) ?
							<Spinner /> :
							__( 'No downloads found.' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		if ( ! hasDownloadCategories && type === 'download_categories' ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="download"
						label={ __( 'Loading download categories' ) }
					>
						{ ! Array.isArray( downloadCategories ) ?
							<Spinner /> :
							__( 'No download categories found.' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		if ( ! hasDownloadTags && type === 'download_tags' ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="download"
						label={ __( 'Loading download tags' ) }
					>
						{ ! Array.isArray( downloadTags ) ?
							<Spinner /> :
							__( 'No download tags found.' )
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