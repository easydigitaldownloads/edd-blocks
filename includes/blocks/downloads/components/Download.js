import Image from './Image';
import Title from './Title';
import Excerpt from './Excerpt';
import Content from './Content';
import Price from './Price';
import PurchaseLink from './PurchaseLink';

const Download = (props) => {

	const { showThumbnails, showExcerpt, showFullContent, showPrice, showBuyButton } = props.attributes;
	const { image, link, title, excerpt, content, price, purchase_link } = props.download.info;

	return (
		<div className="edd_download">
			<Image 
				image={image} 
				showThumbnails={showThumbnails} 
			/>
			<Title 
				title={title} 
				link={link} 
			/>
			<Excerpt 
				excerpt={excerpt} 
				showExcerpt={showExcerpt}
			/>
			<Content 
				content={content} 
				showFullContent={showFullContent}
			/>
			<Price 
				price={price} 
				showPrice={showPrice}
			/>
			<PurchaseLink 
				purchaseLink={purchase_link} 
				showBuyButton={showBuyButton}
			/>
		</div>	
	)

}

export default Download;