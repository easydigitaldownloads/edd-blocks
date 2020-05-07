import { autop } from '@wordpress/autop';
import { RawHTML } from '@wordpress/element';

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