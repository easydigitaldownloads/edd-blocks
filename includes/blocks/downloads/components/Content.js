import { autop } from '@wordpress/autop';

const {	RawHTML } = wp.element;

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