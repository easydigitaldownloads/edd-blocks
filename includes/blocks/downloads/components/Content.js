const {	RawHTML } = wp.element;

const Content = ({content, showFullContent, className}) => {

	if ( ! showFullContent ) {
		return null;
	}
	
	return (
		<RawHTML className={className}>
			{content}
		</RawHTML>
	)

}

export default Content;