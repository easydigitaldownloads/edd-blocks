import Image from './Image';
import Title from './Title';
import Description from './Description';

const DownloadTag = (props) => {
	const { showThumbnails, showTitle, showCount, showDescription } = props.attributes;
	const { name, link, count, description } = props.tag;
	const image = props.tag.meta.image;

	return (
		<div className="edd-download-tag">
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
				type="tag"
			/>
			}
			{ showDescription &&
			<Description 
				description={description}
				showDescription={showDescription}
				className="edd-download-tag-description"
			/>
			}
		</div>
	)

}

export default DownloadTag;