import * as downloads from '../includes/blocks/downloads';
import { registerBlockType } from '@wordpress/blocks';

const registerCoreBlocks = () => {
	[
		downloads,
	].forEach(({ name, settings }) => {
		registerBlockType(name, settings);
	});
};
registerCoreBlocks();