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
define('DB_USER', 'wordpress_96');

/** MySQL database password */
define('DB_PASSWORD', 'dPrO4E9u!3');

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
define('AUTH_KEY',       'KGOykCLHqqN9dj*fNk8@BGF8y4nToypGCm7SADB**nV7NQ37(eDzxMdO(Mq!&@SZ');
define('SECURE_AUTH_KEY',       'hI(wdRi0UF5i06Zr28tzUJayntuKxY^4!Ud3Rgon3FGTG3Dr1&%E@oAPo)@VpMX#');
define('LOGGED_IN_KEY',       'vlvUgmPTq#UHScC(Lisoon3n(@!4s@^hnTsV962U*uS4M#g&1TIRL57wP35H(xIJ');
define('NONCE_KEY',       'F!z3GQO4zuS^7zXtSk30pj)N8Q5Ht(LGOTqc()(Eawa0o9rd0t)bl!mCKDrLx5Fn');
define('AUTH_SALT',       'ja6@mOC4Z3arh^!PFKVaFAlwDky*(994NHW&nhFwnfhK2F1DQWNsXSn@itmsOVGN');
define('SECURE_AUTH_SALT',       'i7C!Jy8y%QzAw8syc@JVjk72b2FyQThOo4TGL!UjgXyQZvQ^*9p3J%@Rc7nixTxf');
define('LOGGED_IN_SALT',       '1U^TMXiS@Zq2fWvGbPtQr(t#C5E9Uy0q3qCechR^mZelU!nk9U1Em*FFQz7KnC7d');
define('NONCE_SALT',       '9x)hmE(U^!%Yb&8FUwzoI1vB4qM*g1kqCAhxt7&RGG^)Iz4M*4M%h@ni4fyA2n@c');
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
