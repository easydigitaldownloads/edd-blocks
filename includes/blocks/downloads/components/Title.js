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

	if ( 'tag' === type || 'category' === type ) {
		return (
			<Fragment>
				<div className="edd-download-term-title">
				<h3 className={className}>
					<a href={ link } target="_blank">{renderTitle(title)}</a>
				</h3>
				{ showCount &&
				<span className="edd-download-term-count">({ count })</span>
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