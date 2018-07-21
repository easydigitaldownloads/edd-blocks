const { 
	registerBlockType,
} = wp.blocks;

import * as downloads from './downloads';

const registerCoreBlocks = () => {
	[
		downloads,
	].forEach( ( { name, settings } ) => {
		registerBlockType( name, settings );
	} );

};
registerCoreBlocks();