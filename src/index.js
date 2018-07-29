import "./styles.scss";

const { 
	registerBlockType,
} = wp.blocks;

import * as downloads from '../includes/blocks/downloads';

const registerCoreBlocks = () => {
	[
		downloads,
	].forEach( ( { name, settings } ) => {
		registerBlockType( name, settings );
	} );

};
registerCoreBlocks();