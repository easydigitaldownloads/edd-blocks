import { stringify } from 'querystringify';

const {	Component, Fragment } = wp.element;

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
		return 'Download categories to show here';
	}

	render() {

		console.log( this.state.downloadCategories );

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