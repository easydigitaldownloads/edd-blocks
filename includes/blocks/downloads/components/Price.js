const {	RawHTML } = wp.element;

const Price = ({price, showPrice}) => {

	if ( ! showPrice ) {
		return null;
	}
	
	return (
		<div className="edd_price">
			<RawHTML>
				{price}
			</RawHTML>
		</div>
	)

}

export default Price;