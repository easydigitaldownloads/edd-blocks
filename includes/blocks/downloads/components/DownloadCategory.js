import Image from './Image';
import Title from './Title';
import Description from './Description';

const DownloadCategory = (props) => {

	const { showThumbnails, showTitle, showCount, showDescription } = props.attributes;

	const { name, link, count, description } = props.category;
	const image = props.category.meta.image;

	return (
		<div className="edd-download-category">
			<Image 
				image={image} 
				showThumbnails={showThumbnails} 
			/>
			{ showTitle && 
			<Title 
				title={name} 
				link={link} 
				className="edd_download_title"
				showCount={showCount}
				count={count}
				type="download-category"
			/>
			}
			{ showDescription &&
			<Description 
				description={description} 
				showDescription={showDescription}
			/>
			}
		</div>
	)

}

export default DownloadCategory;