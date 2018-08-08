import { stringify } from 'querystringify';
import { unescape } from 'lodash';
import classnames from 'classnames';

const {
	PanelBody,
	RangeControl,
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

		return (
			<div key={ category.id }>
				<a href={ category.link } target="_blank">{ this.renderDownloadCategoryName( category ) }</a>
				<p>{ category.description }</p>
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
			align,
			attributes,
			setAttributes,
		} = this.props;

		const { 
			columns,
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