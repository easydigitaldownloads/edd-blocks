import './styles.scss';
import './admin.scss';
import * as downloads from '../includes/blocks/downloads';
import * as downloadCategories from '../includes/blocks/download-categories';

const {
	registerBlockType,
} = wp.blocks;

const registerCoreBlocks = () => {
	[
		downloads,
		downloadCategories,
	].forEach(({ name, settings }) => {
		registerBlockType(name, settings);
	});
};
registerCoreBlocks();