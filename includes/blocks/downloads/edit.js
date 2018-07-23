const {	Component, Fragment } = wp.element;

const {	
	Disabled,
	PanelBody,
	ToggleControl,
	RangeControl,
	ServerSideRender
} = wp.components;

const { __ } = wp.i18n;

const {	
	InspectorControls, 
	BlockControls, 
	BlockAlignmentToolbar 
} = wp.editor;

/**
 * Internal dependencies.
 */
import './editor.scss';

/**
 * Minimum number of downloads a user can show using this block.
 *
 * @type {number}
 */
const MIN_DOWNLOADS = 1;
/**
 * Maximum number of comments a user can show using this block.
 *
 * @type {number}
 */
const MAX_DOWNLOADS = 100;

/**
 * Minimum number of columns a user can show using this block.
 *
 * @type {number}
 */
const MIN_COLUMNS = 1;
/**
 * Maximum number of columns a user can show using this block.
 *
 * @type {number}
 */
const MAX_COLUMNS = 4;

class DownloadsEdit extends Component {

	constructor( props ) {
		super( ...arguments );

		this.setColumns = this.setColumns.bind( this );
		this.setAlignment = this.setAlignment.bind( this );
		this.setDownloadsToShow = this.setDownloadsToShow.bind( this );
	}

	setColumns( columns ) {
		this.props.setAttributes( { columns } );
	}

	setAlignment( align ) {
		this.props.setAttributes( { align } );
	}

	setDownloadsToShow( number ) {
		this.props.setAttributes( { number } );
	}

	render() {
	
		const {
			attributes,
			setAttributes,
		} = this.props;

		const { 
			align,
			number,
			columns,
			showBuyButton,
			showPrice,
			showThumbnails,
		} = attributes;

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ this.setAlignment }
						controls={ [ 'wide', 'full' ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Download Settings' ) }>
						<RangeControl
							label={ __( 'Number of downloads' ) }
							value={ number }
							onChange={ this.setDownloadsToShow }
							min={ MIN_DOWNLOADS }
							max={ MAX_DOWNLOADS }
						/>
						<RangeControl
							label={ __( 'Columns' ) }
							value={ columns }
							onChange={ this.setColumns }
							min={ MIN_COLUMNS }
							max={ MAX_COLUMNS }
						/>
						<ToggleControl
							label={ __( 'Show Buy Button' ) }
							checked={ !! showBuyButton }
							onChange={ () => setAttributes( { showBuyButton: ! showBuyButton } ) }
						/>
						<ToggleControl
							label={ __( 'Show Price' ) }
							checked={ !! showPrice }
							onChange={ () => setAttributes( { showPrice: ! showPrice } ) }
						/>
						<ToggleControl
							label={ __( 'Show Thumbnails' ) }
							checked={ !! showThumbnails }
							onChange={ () => setAttributes( { showThumbnails: ! showThumbnails } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<Disabled>
					<ServerSideRender
						block="easydigitaldownloads/downloads"
						attributes={ this.props.attributes }
					/>
				</Disabled>
			</Fragment>

		);

	}
}

export default DownloadsEdit;