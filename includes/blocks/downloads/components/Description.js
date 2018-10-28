const {	RawHTML } = wp.element;

const Description = ({description, showDescription, className}) => {

	if ( ! showDescription ) {
		return null;
	}
	
	return (
		<RawHTML className={className}>
			{description}
		</RawHTML>
	)

}

export default Description;