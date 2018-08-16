import { stringify } from 'querystringify';
import unescape from 'lodash/unescape';
import classnames from 'classnames';

const {
	PanelBody,
	Placeholder,
	RangeControl,
	SelectControl,
	Spinner,
	ToggleControl,
} = wp.components;

const { __ } = wp.i18n;

const { Component, Fragment, RawHTML } = wp.element;

const {	
	InspectorControls,
	BlockControls,
	BlockAlignmentToolbar,
} = wp.editor;

const apiFetch = wp.apiFetch;

/**
 * Minimum number of columns.
 *
 * @type {number}
 */
const MIN_COLUMNS = 1;

/**
 * Maximum number of columns.
 *
 * @type {number}
 */
const MAX_COLUMNS = 6;

class DownloadCategoriesEdit extends Component {
	constructor() {
		super( ...arguments );

		this.setOrderOption = this.setOrderOption.bind( this );
		this.setOrderByOption = this.setOrderByOption.bind( this );

		this.state = {
			downloadCategories: [],
			isLoading: true,
		}
	}

	componentDidMount() {
		this.fetchDownloadCategories();
	}

	componentWillUnmount() {
		delete this.downloadCategoriesRequest;
	}

	componentDidUpdate( prevProps ) {
		const { showEmpty, order, orderBy } = this.props.attributes;

		if ( showEmpty !== prevProps.attributes.showEmpty || order !== prevProps.attributes.order || orderBy !== prevProps.attributes.orderBy ) {
			this.fetchDownloadCategories();
		}
	}

	fetchDownloadCategories() {
		const { showEmpty, order, orderBy } = this.props.attributes;

		const query = {
			per_page: -1,
			orderby: orderBy,
			order: order,
			hide_empty: true !== showEmpty ? true : false,
		};

		const request = apiFetch( {
			path: `/wp/v2/download_category?${ stringify( {
				...query
			} ) }`,
		} );

		request.then( ( downloadCategories ) => {

			if ( this.downloadCategoriesRequest !== request ) {
				return;
			}

			this.setState( { downloadCategories, isLoading: false } );

		} );

		this.downloadCategoriesRequest = request;

	}

	renderDownloadCategories() {
		const categories = this.state.downloadCategories;
		const { columns } = this.props.attributes;

		return (
			<div className={ classnames( 'edd_downloads_list', 'edd-download-categories', 'edd_download_columns_' + columns ) }>
				{ categories.map( ( category ) => this.renderDownloadCategoryListItem( category ) ) }
			</div>
		);
		
	}

	renderCategoryImage( category ) {

		const { showThumbnails } = this.props.attributes;

		const image = category.meta.image;

		if ( ! showThumbnails || ! image ) {
			return;
		}

		return <RawHTML>{ image }</RawHTML>
	}

	renderDownloadCategoryListItem( category ) {

		const { showCount, showDescription, showName } = this.props.attributes;

		return (
			<div key={ category.id } className="edd-download-category">

				{ this.renderCategoryImage( category ) }

				{ showName && 
				<div className="edd-download-category-title">
					<h3><a href={ category.link } target="_blank">{ this.renderDownloadCategoryName( category ) }</a></h3>
					{ showCount &&
					<span className="edd-download-category-count">({ category.count })</span>
					}
				</div>	
				}

				{ showDescription &&
				<p>{ category.description }</p>
				}
			</div>
		);
	}

	renderDownloadCategoryName( category ) {
		if ( ! category.name ) {
			return __( '(Untitled)' );
		}

		return unescape( category.name ).trim();
	}

	getOrderOptions() {
		return [
			{ value: 'asc', label: __( 'Ascending' ) },
			{ value: 'desc', label: __( 'Descending' ) },
		];
	}

	getOrderByOptions() {
		return [
			{ value: 'count', label: __( 'Count' ) },
			{ value: 'id', label: __( 'ID' ) },
			{ value: 'name', label: __( 'Name' ) },
			{ value: 'slug', label: __( 'Slug' ) },
		];
	}

	setOrderOption( value ) {
		this.props.setAttributes( {
			order: value,
		} );
	}

	setOrderByOption( value ) {
		this.props.setAttributes( {
			orderBy: value,
		} );
	}

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			align,
			columns,
			showEmpty,
			order,
			orderBy,
			showDescription,
			showThumbnails,
			showName,
			showCount,
		} = attributes;

		const isLoading = this.state.isLoading;

		if ( isLoading ) {
			return (
				<Fragment>
					<Placeholder
						icon="download"
						label={ __( 'Download Categories' ) }
					>
						<Spinner />
					</Placeholder>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
						controls={ [ 'wide', 'full' ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Download Category Settings' ) }>
						<RangeControl
							label={ __( 'Columns' ) }
							value={ columns }
							onChange={ ( nextColumns ) => {
							setAttributes( { columns: nextColumns } );
						} }
							min={ MIN_COLUMNS }
							max={ MAX_COLUMNS }
						/>
						<ToggleControl
							label={ __( 'Show Thumbnails' ) }
							checked={ !! showThumbnails }
							onChange={ () => setAttributes( { showThumbnails: ! showThumbnails } ) }
						/>
						<ToggleControl
							label={ __( 'Show Category Name' ) }
							checked={ !! showName }
							onChange={ () => setAttributes( { showName: ! showName } ) }
						/>
						<ToggleControl
							label={ __( 'Show Category Description' ) }
							checked={ !! showDescription }
							onChange={ () => setAttributes( { showDescription: ! showDescription } ) }
						/>
						{ showName && 
						<ToggleControl
							label={ __( 'Show Count' ) }
							checked={ !! showCount }
							onChange={ () => setAttributes( { showCount: ! showCount } ) }
						/>
						}
						<ToggleControl
							label={ __( 'Show Empty Categories' ) }
							checked={ !! showEmpty }
							onChange={ () => setAttributes( { showEmpty: ! showEmpty } ) }
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
					</PanelBody>
				</InspectorControls>
				<div className={ this.props.className }>
					{ this.renderDownloadCategories() }
				</div>
			</Fragment>
		);
	}
}
export default DownloadCategoriesEdit;