import { autop } from '@wordpress/autop';

const {	RawHTML } = wp.element;

const Description = ({description, showDescription, className}) => {

	if ( ! showDescription ) {
		return null;
	}
	
	return (
		<RawHTML className={className}>
			{ autop( description ) }
		</RawHTML>
	)

}

export default Description;