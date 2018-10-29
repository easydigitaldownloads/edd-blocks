import unescape from 'lodash/unescape';

const { __ } = wp.i18n;
const {	Fragment } = wp.element;

function renderTitle(title) {

	if ( ! title ) {
		return __( '(Untitled)' );
	}

	return unescape( title ).trim();
}

const Title = ({link, title, className, showCount, count, type}) => {

	if ( 'download-category' === type ) {
		return (
			<Fragment>
				<div className="edd-download-category-title">
				<h3 className={className}>
					<a href={ link } target="_blank">{renderTitle(title)}</a>
				</h3>
				{ showCount &&
				<span className="edd-download-category-count">({ count })</span>
				}
				</div>
			</Fragment>
		)

	} 

	if ( 'download-tag' === type ) {
		return (
			<Fragment>
				<div className="edd-download-tag-title">
				<h3 className={className}>
					<a href={ link } target="_blank">{renderTitle(title)}</a>
				</h3>
				{ showCount &&
				<span className="edd-download-tag-count">({ count })</span>
				}
				</div>
			</Fragment>
		)

	} 

	return (
		<Fragment>
			<h3 className={className}>
				<a href={ link } target="_blank">{renderTitle(title)}</a>
			</h3>
		</Fragment>
	)

}

export default Title;