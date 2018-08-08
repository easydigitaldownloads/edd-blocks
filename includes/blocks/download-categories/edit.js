import { stringify } from 'querystringify';
import { unescape } from 'lodash';

const { Component, Fragment } = wp.element;

const apiFetch = wp.apiFetch;

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

		return (
			<div className="edd-download-categories">
				{ categories.map( ( category ) => this.renderDownloadCategoryListItem( category ) ) }
			</div>
		);
		
	}

	renderDownloadCategoryListItem( category ) {

		return (
			<div key={ category.id }>
				<a href={ category.link } target="_blank">{ this.renderDownloadCategoryName( category ) }</a>
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

		return (
			<Fragment>
				<div className={ this.props.className }>
					{ this.renderDownloadCategories() }
				</div>
			</Fragment>
		);
	}
}
export default DownloadCategoriesEdit;