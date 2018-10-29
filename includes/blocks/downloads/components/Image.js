const {	RawHTML } = wp.element;

const Image = ( {showThumbnails, image} ) => {
	// Return null if thumbnails aren't enabled, or do not exist for the download.
	if ( ! showThumbnails || ! image ) {
		return null;
	}

	return (
		<RawHTML className="edd_download_image">
			{image}
		</RawHTML>
	)

}

export default Image;