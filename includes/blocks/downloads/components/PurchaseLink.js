const {	RawHTML } = wp.element;
const {	Disabled } = wp.components;

const PurchaseLink = ({purchaseLink, showBuyButton}) => {

	if ( ! showBuyButton ) {
		return null;
	}
	
	return (
		<Disabled>
			<div className="edd_download_buy_button">
				<RawHTML>{ purchaseLink }</RawHTML>
			</div>
		</Disabled>
	)

}

export default PurchaseLink;