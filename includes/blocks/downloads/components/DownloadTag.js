import Title from './Title';

const DownloadTag = (props) => {

	const { name, link } = props.tag;

	return (
		<div className="edd-download-tag">
			<Title 
				title={name} 
				link={link} 
				className="edd_download_title"
				type="download-tag"
			/>
		</div>
	)

}

export default DownloadTag;