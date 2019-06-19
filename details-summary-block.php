<?php
/**
 * Plugin Name: Details Summary Block
 * Description: A Gutenberg editor block for HTML <details> element.
 * Author: dingo-d
 * Author URI: https://madebydenis.com
 * Text Domain: dsb
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action('init', 'dsb_register_block_assets');

function dsb_register_block_assets() {
	wp_register_script(
		'details-summary-block',
		plugins_url( '/build/index.js' , __FILE__ ),
		[
			'wp-i18n',
			'wp-element',
			'wp-blocks',
			'wp-components',
			'wp-editor'
		],
		'1.0.0'
	);

	wp_register_style(
		'details-summary-block-styles',
		plugins_url( '/src/editor.css' , __FILE__ ),
		[],
		'1.0.0'
	);

	register_block_type( 'dsb/details-summary-block',
		[
			'editor_script' => 'details-summary-block',
			'style'         => 'details-summary-block-styles',
		]
	);
}
