import { stringify } from 'querystringify';
import unescape from 'lodash/unescape';
import classnames from 'classnames';

const {
	PanelBody,
	RangeControl,
	ToggleControl,
} = wp.components;

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {	
	InspectorControls, 
	BlockControls, 
	BlockAlignmentToolbar 
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
const MAX_COLUMNS = 4;

class DownloadCategoriesEdit extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			downloadCategories: [],
		}
	}

	componentDidMount() {
		this.fetchDownloadCategories();
	}

	componentWillUnmount() {
		delete this.downloadCategoriesRequest;
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

	renderDownloadCategories() {
		const categories = this.state.downloadCategories;
		const { columns } = this.props.attributes;

		return (
			<div className={ classnames( 'edd-download-categories', 'columns-' + columns ) }>
				{ categories.map( ( category ) => this.renderDownloadCategoryListItem( category ) ) }
			</div>
		);
		
	}

	renderDownloadCategoryListItem( category ) {

		const { showCount, showDescription, showName, showThumbnails } = this.props.attributes;

		return (
			<div key={ category.id } className="edd-download-category">

				{ showThumbnails && 
				<a href={ category.link } target="_blank" className="edd-download-category-thumbnail"></a>
				}

				{ showName && 
				<div className="edd-download-category-title">
					<h3><a href={ category.link } target="_blank">{ this.renderDownloadCategoryName( category ) }</a></h3>
					{ showCount &&
					<span className="edd-download-count">({ category.count })</span>
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

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			align,
			columns,
			showDescription,
			showThumbnails,
			showName,
			showCount,
		} = attributes;

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