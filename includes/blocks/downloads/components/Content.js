import { autop } from '@wordpress/autop';
import { RawHTML } from '@wordpress/element';

const Content = ({content, showFullContent, className}) => {

	if ( ! showFullContent ) {
		return null;
	}
	
	return (
		<RawHTML className={className}>
			{ autop( content ) }
		</RawHTML>
	)

}

export default Content;