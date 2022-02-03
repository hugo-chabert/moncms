<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hugo-chabert_wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress_50');

/** MySQL database password */
define('DB_PASSWORD', '!atDiZ353X');

/** MySQL hostname */
define('DB_HOST', 'localhost:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!*WkS*FEx(B%HP4AcaX@rSlJ*YU0HohxIXw18i1hN9*S^pNR42FvTAI(YEObD78T');
define('SECURE_AUTH_KEY',  'GDTPCEmKir0Di4Nwt#jrY%ZT3Su78V!(qW(lzafNsvLKx%rD0CygcMd&b8Oe(hhB');
define('LOGGED_IN_KEY',    '5XFuvmgyFiSDQOL993XA&2b4sOmy^lcoBQpTTHEAmA(Hjs9g5oO)gi%%XpIzvO#3');
define('NONCE_KEY',        '*zvAc8M8fy7U!hp(HNBJ5jzqFUHr#f@fdJQ9l4mguUnj@*v@kUEgueEVHyRvG0#b');
define('AUTH_SALT',        'RsJqJrrQ*w4uqCYYu&Z^T5LAJsbUayeju7CltY7nnmL8X52I60s#i&uE&1V3Pozo');
define('SECURE_AUTH_SALT', 'QE*AE&7FpfFqoj1ob72A39n*PC2^K4S^*awyZHLsk!43d*@rTuekA9@2albaqq4T');
define('LOGGED_IN_SALT',   '0EC3iWU3(4r3CH8HA2#XH0emX0hK73yVZ5C@ZbZaTKY#v9O%JNRj7bJv(gXMy6u3');
define('NONCE_SALT',       'HvJ3oAsyJ*sVF27&GBNLcHLNVtik&QjySok(q8e1cR1twg3Uz*0j^kB2S4HOm1W)');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
