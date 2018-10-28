const {	RawHTML } = wp.element;

const Description = ({description, showDescription}) => {

	if ( ! showDescription ) {
		return null;
	}
	
	return (
		<RawHTML>
			{description}
		</RawHTML>
	)

}

export default Description;