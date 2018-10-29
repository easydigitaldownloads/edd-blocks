import Title from './Title';
import Description from './Description';

const DownloadTag = (props) => {
	const { showDescription } = props.attributes;
	const { name, link, description } = props.tag;

	return (
		<div className="edd-download-tag">
			<Title 
				title={name} 
				link={link} 
				className="edd_download_title"
				type="download-tag"
			/>
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