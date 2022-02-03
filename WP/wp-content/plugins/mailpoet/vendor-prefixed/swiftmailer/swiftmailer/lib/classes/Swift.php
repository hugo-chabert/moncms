<?php
namespace MailPoetVendor;
if (!defined('ABSPATH')) exit;
abstract class Swift
{
 const VERSION = '6.3.0';
 public static $initialized = \false;
 public static $inits = [];
 public static function init($callable)
 {
 self::$inits[] = $callable;
 }
 public static function autoload($class)
 {
 // Don't interfere with other autoloaders
 if (0 !== \strpos($class, 'MailPoetVendor\\Swift_')) {
 return;
 }
 $path = __DIR__ . '/' . \str_replace('_', '/', str_replace('MailPoetVendor\\', '', $class)) . '.php';
 if (!\file_exists($path)) {
 return;
 }
 require $path;
 if (self::$inits && !self::$initialized) {
 self::$initialized = \true;
 foreach (self::$inits as $init) {
 \call_user_func($init);
 }
 }
 }
 public static function registerAutoload($callable = null)
 {
 if (null !== $callable) {
 self::$inits[] = $callable;
 }
 \spl_autoload_register(['MailPoetVendor\\Swift', 'autoload']);
 }
}
