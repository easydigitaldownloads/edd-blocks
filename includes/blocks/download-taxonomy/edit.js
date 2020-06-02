// /**
//  * External dependencies
//  */
// import { isUndefined } from 'lodash';
// import classnames from 'classnames';

// /**
//  * Components
//  */
// import Download from './components/Download';
// import DownloadTaxonomy from './components/DownloadTaxonomy';

// /**
//  * WordPress dependencies
//  */
// import { Component, Fragment } from '@wordpress/element';
// import {
// 	PanelBody,
// 	Placeholder,
// 	ToggleControl,
// 	RangeControl,
// 	SelectControl,
// 	Spinner,
// } from '@wordpress/components';
// import { __ } from '@wordpress/i18n';
// import {	
// 	InspectorControls, 
// 	BlockControls, 
// 	BlockAlignmentToolbar 
// } from '@wordpress/editor';
// import { addQueryArgs } from '@wordpress/url';
// import { withSelect } from '@wordpress/data';
// import apiFetch from '@wordpress/api-fetch';

// class DownloadsEdit extends Component {

// 	constructor() {
// 		super( ...arguments );

// 		this.setDownloadCategory = this.setDownloadCategory.bind( this );
// 		this.showDescription = this.showDescription.bind( this );
// 		this.showFullContent = this.showFullContent.bind( this );

// 		this.state = {
// 			isLoading: false,
// 			showDescription: true,
// 			showFullContent: false,
// 			downloads: [],
// 		}
// 	}

// 	componentDidMount() {
// 		this.fetchDownloads();
// 	}

// 	componentDidUpdate( prevProps ) {
// 		const { category, number, order, orderBy, showEmpty, type } = this.props.attributes;
// 		const { alignWide } = wp.data.select( "core/editor" ).getEditorSettings();

// 		const prevProp = prevProps.attributes;

// 		if ( 'downloads' === type ) {

// 			if ( 
// 				category !== prevProp.category || 
// 				number !== prevProp.number || 
// 				order !== prevProp.order || 
// 				orderBy !== prevProp.orderBy 
// 			) {
// 				// Fetch new array of downloads when various controls are updated and store them in state.
// 				this.fetchDownloads();
// 			}

// 			// Block type was switched to "Downloads" from another block type.
// 			if ( 'downloads' !== prevProp.type ) {
// 				// Reset the orderBy attribute to "date" once the Downloads block type is selected.
// 				this.props.setAttributes( { orderBy: 'id' } );

// 				// Fetch downloads and store them in state.
// 				this.fetchDownloads();
// 			}
// 		}

// 		// Clear "align" attribute if theme does not support wide images.
// 		// This prevents the attribute from being "stuck" on a particular setting if the theme is switched.
// 		if ( ! alignWide ) {
// 			this.props.setAttributes( { align: undefined } );
// 		}
// 	}

// 	componentWillUnmount() {
// 		delete this.downloadsRequest;
// 	}

// 	getOrderOptions() {
// 		return [
// 			{ value: 'asc', label: __( 'Ascending' ) },
// 			{ value: 'desc', label: __( 'Descending' ) },
// 		];
// 	}

// 	getOrderByOptions() {
// 		const { type } = this.props.attributes;

// 		let options;

// 		if ( 'downloads' === type ) {
// 			options = [
// 				{ value: 'date', label: __( 'Date Created' ) },
// 				{ value: 'earnings', label: __( 'Earnings' ) },
// 				{ value: 'id', label: __( 'ID' ) },
// 				{ value: 'price', label: __( 'Price' ) },
// 				{ value: 'random', label: __( 'Random' ) },
// 				{ value: 'sales', label: __( 'Sales' ) },
// 				{ value: 'name', label: __( 'Slug' ) },
// 				{ value: 'title', label: __( 'Title' ) },
// 			];
// 		}

// 		return options;
// 	}

// 	getDownloadCategories() {
// 		const { downloadCategories } = this.props;

// 		return [
// 			{ 
// 				'value': 'all', 
// 				'label': __( 'All' )
// 			},
// 			...downloadCategories.map( ( { id, name } ) => ( {
// 				value: id,
// 				label: name,
// 			} ) ),
// 		];
// 	}

// 	getBlockTypes() {
// 		return [
// 			{ 
// 				'value': 'downloads', 
// 				'label': __( 'Downloads' )
// 			},
// 			{ 
// 				'value': 'download_categories', 
// 				'label': __( 'Download Categories' )
// 			},
// 			{ 
// 				'value': 'download_tags', 
// 				'label': __( 'Download Tags' )
// 			}
// 		];
// 	}

// 	setDownloadCategory( value ) {
	
// 		if ( 'all' === value ) {
// 			value = undefined;
// 		}

// 		// This will support an array of category IDs in the future.
// 		this.props.setAttributes( {
// 			category: value, // Store the category's ID.
// 		} );

// 	}

// 	showDescription() {
// 		const value = this.state.showDescription;
		
// 		// Update the state.
// 		this.setState({ 'showDescription': ! value, 'showFullContent': value }, function () {
// 			this.props.setAttributes( { showDescription: ! value } );
// 			this.props.setAttributes( { showFullContent: false } );
// 		});
// 	}

// 	showFullContent() {
// 		const value = this.state.showFullContent;
		
// 		// Update the state.
// 		this.setState({ 'showFullContent': ! value, 'showDescription': value }, function () {
// 			this.props.setAttributes( { showFullContent: ! value } );
// 			this.props.setAttributes( { showDescription: false } );
// 		});
// 	}

// 	fetchDownloads() {
		
// 		// Get the options
// 		const options = this.getOrderByOptions();

// 		const { category, number, order, orderBy } = this.props.attributes;

// 		let queryOrderBy = orderBy;

// 		switch (queryOrderBy) {
// 			case 'id':
// 				queryOrderBy = 'ID'; // EDD expects "ID", not "id".
// 				break;

// 			case 'random':
// 				queryOrderBy = 'rand';
// 				break;	
		
// 			default:
// 				queryOrderBy = orderBy;
// 				break;
// 		}

// 		const query = {
// 			number,
// 			order,
// 			orderby: queryOrderBy
// 		};

// 		// Query downloads by category.
// 		if ( ! isUndefined( category ) ) {
// 			query['category'] = category;
// 		}

// 		const url = edd_blocks_global_vars.url;

// 		// Reset orderby parameter to "date", in case it's set to something that 
// 		// the block type does not support.
// 		let orderByExists = options.find(obj => obj.value === orderBy);
// 		if ( ! orderByExists ) {
// 			query['orderby'] = 'date';
// 		}

// 		// const request = addQueryArgs(`${url}/?edd-api=products`, ...query );
// 		const request = apiFetch( {
// 			url: addQueryArgs(`${url}/?edd-api=products`, query)
// 		} );

// 		// Request downloads and store in state.
// 		request.then( ( downloads ) => {
// 			if ( this.downloadsRequest !== request ) {
// 				return;
// 			}

// 			this.setState( { downloads, isLoading: false } );
// 		} );

// 		this.downloadsRequest = request;
// 	}

// 	renderDownloads() {
// 		const downloads = this.state.downloads.products;
// 		const { downloadCategories, downloadTags } = this.props;
// 		const { attributes } = this.props;
// 		const { columns, type } = attributes;

// 		if ( 'downloads' === type ) {
// 			return (
// 				<div className={ classnames( 'edd_downloads_list', 'edd_download_columns_' + columns ) }>
// 					{ downloads.map( ( download ) => <Download download={download} key={download.info.id.toString()} attributes={attributes} /> ) }
// 				</div>
// 			);
// 		} 
// 	}

// 	render() {
	
// 		const {
// 			attributes,
// 			setAttributes,
// 			downloadTags,
// 			downloadCategories,
// 		} = this.props;

// 		const { 
// 			align,
// 			number,
// 			columns,
// 			showBuyButton,
// 			showPrice,
// 			showThumbnails,
// 			showDescription,
// 			showFullContent,
// 			showPagination,
// 			order,
// 			orderBy,
// 			category,
// 			type,
// 			showTitle,
// 			showCount,
// 			showEmpty,
// 		} = attributes;

// 		const { isLoading } = this.state;
// 		const downloads = this.state.downloads.products;

// 		let showDescriptionLabel;

// 		if ( type === 'downloads' ) {
// 			showDescriptionLabel = __( 'Show Excerpt' );
// 		} else {
// 			showDescriptionLabel = __( 'Show Description' );
// 		}

// 		// Loading states.
// 		let showLoadingLabel;
// 		if ( type === 'downloads' ){
// 			showLoadingLabel = __( 'Loading downloads' );
// 		}

// 		if ( isLoading ) {
// 			return (
// 				<Fragment>
// 					<Placeholder
// 						icon="download"
// 						label={ showLoadingLabel }
// 					>
// 						<Spinner />
// 					</Placeholder>
// 				</Fragment>
// 			);
// 		}

// 		const inspectorControls = (
// 			<InspectorControls>
// 				<PanelBody title={ __( 'Settings' ) }>
					
// 					<SelectControl
// 						label={ __( 'Display' ) }
// 						value={ type }
// 						options={ this.getBlockTypes() }
// 						onChange={ (value) => setAttributes( { type: value } ) }
// 					/>

// 					{ type === 'downloads' &&
// 					<RangeControl
// 						label={ __( 'Downloads Per Page' ) }
// 						value={ number }
// 						onChange={ (number) => setAttributes( { number } ) }
// 						min={ 1 }
// 						max={ 100 }
// 					/>
// 					}

// 					<RangeControl
// 						label={ __( 'Columns' ) }
// 						value={ columns }
// 						onChange={ (columns) => setAttributes( { columns } ) }
// 						min={ 1 }
// 						max={ 6 }
// 					/>
					
// 					{ type === 'downloads' &&
// 					<ToggleControl
// 						label={ __( 'Show Buy Button' ) }
// 						checked={ !! showBuyButton }
// 						onChange={ () => setAttributes( { showBuyButton: ! showBuyButton } ) }
// 					/>
// 					}
					
// 					{ type === 'downloads' &&
// 					<ToggleControl
// 						label={ __( 'Show Price' ) }
// 						checked={ !! showPrice }
// 						onChange={ () => setAttributes( { showPrice: ! showPrice } ) }
// 					/>
// 					}

// 					<ToggleControl
// 						label={ __( 'Show Thumbnails' ) }
// 						checked={ !! showThumbnails }
// 						onChange={ () => setAttributes( { showThumbnails: ! showThumbnails } ) }
// 					/>
					
// 					{/* { isDownloadTaxonomy &&
// 					<ToggleControl
// 						label={ 'download_categories' === type ? __( 'Show Category Name' ) : __( 'Show Tag Name' ) }
// 						checked={ !! showTitle }
// 						onChange={ () => setAttributes( { showTitle: ! showTitle } ) }
// 					/>
// 					} */}

// 					<ToggleControl
// 						label={ showDescriptionLabel }
// 						checked={ !! showDescription }
// 						onChange={ this.showDescription }
// 					/>

// 					{/* { showTitle && isDownloadTaxonomy &&
// 					<ToggleControl
// 						label={ __( 'Show Count' ) }
// 						checked={ !! showCount }
// 						onChange={ () => setAttributes( { showCount: ! showCount } ) }
// 					/>
// 					} */}
					
// 					{/* { isDownloadTaxonomy &&
// 					<ToggleControl
// 						label={ 'download_categories' === type ? __( 'Show Empty Categories' ) : __( 'Show Empty Tags' ) }
// 						checked={ !! showEmpty }
// 						onChange={ () => setAttributes( { showEmpty: ! showEmpty } ) }
// 					/>
// 					} */}

// 					{ type === 'downloads' &&
// 					<ToggleControl
// 						label={ __( 'Show Full Content' ) }
// 						checked={ !! showFullContent }
// 						onChange={ this.showFullContent }
// 					/>
// 					}

// 					{ type === 'downloads' &&
// 					<ToggleControl
// 						label={ __( 'Show Pagination' ) }
// 						checked={ !! showPagination }
// 						onChange={ () => setAttributes( { showPagination: ! showPagination } ) }
// 					/>
// 					}

// 					<SelectControl
// 						label={ __( 'Order By' ) }
// 						value={ orderBy }
// 						options={ this.getOrderByOptions() }
// 						onChange={ (orderBy) => setAttributes( { orderBy } ) }
// 					/>

// 					<SelectControl
// 						label={ __( 'Order' ) }
// 						value={ order }
// 						options={ this.getOrderOptions() }
// 						onChange={ ( order ) => setAttributes( { order } ) }
// 					/>

// 					{ type === 'downloads' &&
// 					<SelectControl
// 						label={ __( 'Show Downloads From Category' ) }
// 						value={ category }
// 						options={ this.getDownloadCategories() }
// 						onChange={ this.setDownloadCategory }
// 					/>
// 					}

// 				</PanelBody>
// 			</InspectorControls>
// 		);

// 		const hasDownloads = Array.isArray( downloads ) && downloads.length;
// 		const hasDownloadTags = Array.isArray( downloadTags ) && downloadTags.length;
// 		const hasDownloadCategories = Array.isArray( downloadCategories ) && downloadCategories.length;

// 		if ( ! hasDownloads && type === 'downloads' ) {
// 			return (
// 				<Fragment>
// 					{ inspectorControls }
// 					<Placeholder
// 						icon="download"
// 						label={ __( 'Loading downloads' ) }
// 					>
// 						{ ! Array.isArray( downloads ) ?
// 							<Spinner /> :
// 							__( 'No downloads found.' )
// 						}
// 					</Placeholder>
// 				</Fragment>
// 			);
// 		}

// 		return (
// 			<Fragment>
// 				{ inspectorControls }
// 				<BlockControls>
// 					<BlockAlignmentToolbar
// 						value={ align }
// 						onChange={ ( align ) => setAttributes( { align } ) }
// 						controls={ [ 'wide', 'full' ] }
// 					/>
// 				</BlockControls>
// 				<div className={ this.props.className }>
// 					{ this.renderDownloads() }
// 				</div>
// 			</Fragment>
// 		);
// 	}
// }

// export default withSelect( ( select, ownProps ) => {
// 	const { attributes: { showEmpty, order, orderBy } } = ownProps;

// 	const query = {
// 		per_page: -1,
// 		orderby: orderBy,
// 		order: order,
// 	};

// 	const { getEntityRecords } = select( 'core' );

// 	const downloadCategories = getEntityRecords( 'taxonomy', 'download_category', query );
// 	const downloadTags = getEntityRecords( 'taxonomy', 'download_tag', query );

// 	return {
// 		downloadCategories,
// 		downloadTags,
// 	}
// } ) ( DownloadsEdit );