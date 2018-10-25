const {	RawHTML } = wp.element;

const Content = ({content, showFullContent}) => {

	if ( ! showFullContent ) {
		return null;
	}
	
	return (
		<RawHTML>
			{content}
		</RawHTML>
	)

}

export default Content;