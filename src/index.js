import './styles.scss';
import './admin.scss';
import * as downloads from '../includes/blocks/downloads';

const {
	registerBlockType,
} = wp.blocks;

const registerCoreBlocks = () => {
	[
		downloads,
	].forEach(({ name, settings }) => {
		registerBlockType(name, settings);
	});
};
registerCoreBlocks();