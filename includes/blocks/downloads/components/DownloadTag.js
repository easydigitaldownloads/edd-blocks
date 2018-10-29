import Title from './Title';
import Description from './Description';

const DownloadTag = (props) => {
	const { showTitle, showCount, showDescription } = props.attributes;
	const { name, link, count, description } = props.tag;

	return (
		<div className="edd-download-tag">
			{ showTitle && 
			<Title 
				title={name} 
				link={link} 
				className="edd_download_title"
				showCount={showCount}
				count={count}
				type="download-tag"
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