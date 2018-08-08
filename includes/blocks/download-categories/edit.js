const {	Component, Fragment } = wp.element;

class DownloadCategoriesEdit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		return (
			<Fragment>
				<div className={ this.props.className }>
					Download categories to show here
				</div>
			</Fragment>
		);
	}
}
export default DownloadCategoriesEdit;