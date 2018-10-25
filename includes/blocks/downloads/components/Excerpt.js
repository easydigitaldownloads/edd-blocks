const {	RawHTML } = wp.element;

const Excerpt = ({excerpt, showExcerpt}) => {

	if ( ! showExcerpt ) {
		return null;
	}
	
	return (
		<RawHTML>
			{excerpt}
		</RawHTML>
	)

}

export default Excerpt;