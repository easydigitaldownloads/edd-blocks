import Image from './Image';
import Title from './Title';
import Description from './Description';

const DownloadTaxonomy = (props) => {
	const { showThumbnails, showTitle, showCount, showDescription } = props.attributes;
	const { name, link, count, description, taxonomy } = props.taxonomy;
	const image = props.taxonomy.meta.image;

	let taxType;

	if ( 'download_tag' === taxonomy ) {
		taxType = 'tag';
	} else if ( 'download_category' === taxonomy ) {
		taxType = 'category';
	}

	return (
		<div className={`edd-download-${taxType}`}>
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
				type={`${taxType}`}
			/>
			}
			{ showDescription &&
			<Description 
				description={description}
				showDescription={showDescription}
				className="edd-download-term-description"
			/>
			}
		</div>
	)

}

export default DownloadTaxonomy;