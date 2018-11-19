import Image from './Image';
import Title from './Title';
import Excerpt from './Description';
import Content from './Content';
import Price from './Price';
import PurchaseLink from './PurchaseLink';

const Download = (props) => {

	const { showThumbnails, showDescription, showFullContent, showPrice, showBuyButton } = props.attributes;
	const { image, link, title, excerpt: description, content, price, purchase_link } = props.download.info;

	return (
		<div className="edd_download">
			<div className="edd_download_inner">
				<Image 
					image={image} 
					showThumbnails={showThumbnails} 
				/>
				<Title 
					title={title} 
					link={link} 
					className="edd_download_title"
				/>
				<Excerpt 
					description={description} 
					showDescription={showDescription}
					className="edd_download_excerpt"
				/>
				<Content 
					content={content} 
					showFullContent={showFullContent}
					className="edd_download_full_content"
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
		</div>
	)

}

export default Download;