/**
 * Internal dependencies
 */
import edit from './edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

export const name = 'easydigitaldownloads/downloads';

export const settings = {
	title: __( 'Downloads' ),

	description: __( 'Display Downloads, Categories and Tags from Easy Digital Downloads.' ),

	icon: 'download',

	category: 'widgets',

	keywords: [ 
		__( 'downloads' ), 
		__( 'edd' )
	],

	supports: {
		html: false,
		multiple: true,
	},

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( [ 'wide', 'full' ].includes( align ) ) {
			return { 'data-align': align, 'data-block-type': 'easy-digital-downloads' };
		}
	},

	edit,

	save() {
		return null;
	},

};