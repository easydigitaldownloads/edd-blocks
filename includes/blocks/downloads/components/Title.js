import unescape from 'lodash/unescape';

const { __ } = wp.i18n;

function renderTitle(title) {

	if ( ! title ) {
		return __( '(Untitled)' );
	}

	return unescape( title ).trim();
}

const Title = ({link, title}) => {

	return (
		<h3 className="edd_download_title">
			<a href={ link } target="_blank">{renderTitle(title)}</a>
		</h3>
	)

}

export default Title;