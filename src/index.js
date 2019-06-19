/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { InnerBlocks, RichText } from '@wordpress/editor';

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
			className,
		} = props;

		return (
			<details
				className={ className }
			>
				<summary>
					<RichText
						value={ summaryContent }
						onChange={ ( newContent ) => {
							setAttributes({ summaryContent: newContent });
						}}
					/>
				</summary>
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
