<?php
/**
 * Plugin Name: Details Summary Block
 * Description: A Gutenberg editor block for HTML <details> element.
 * Author: dingo-d
 * Author URI: https://madebydenis.com
 * Text Domain: dsb
 * Version: 1.0.0
 */

add_action('init', 'dsb_register_block_assets');

function dsb_register_block_assets() {
	$block_path = '/build/index.js';

	wp_register_script(
		'details-summary-block',
		plugins_url( $block_path , __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		'1.0.0'
	);

	$block_style = '/src/editor.css';

	wp_register_style(
		'details-summary-block-styles',
		plugins_url( $block_style , __FILE__ ),
		[],
		'1.0.0'
	);

	register_block_type( 'dsb/details-summary-block',
		[
			'editor_script' => 'details-summary-block',
			'style' => 'details-summary-block-styles',
		]
	);
}
