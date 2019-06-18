/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/editor';

const ALLOWED_BLOCKS = [ 'core/code', 'core/paragraph' ];

registerBlockType( 'dsb/details-summary-block', {
	title: 'Details Summary Block',
	icon: 'arrow-right',
	keywords: [ 'summary', 'details', 'expanded' ],
	category: 'common',
	attributes: {
		summaryContent: {
			type: 'string',
			source: 'html',
			selector: 'summary',
			default: 'Add some description that will expand',
		},
	},

	edit: ( props ) => {
		const {
			attributes: { summaryContent },
			setAttributes,
		} = props;

		return (
			<details>
				<summary
					value={ summaryContent }
					onChange={ ( newContent ) => {
						setAttributes( { summaryContent: newContent } );
					} }
				/>
				<div>
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
				</div>
			</details>
		);
	},

	save: ( props ) => {
		const {
			attributes: { summaryContent },
		} = props;

		return (
			<Fragment>
				<details>
					<summary>{ summaryContent }</summary>
					<div>
						<InnerBlocks.Content />
					</div>
				</details>
			</Fragment>
		);
	},
} );
