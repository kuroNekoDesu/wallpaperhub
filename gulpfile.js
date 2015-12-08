/**
 * WallpaperHub
 *
 * This is a website for wallpaper enthusiasts to share amazingly awesome wallpapers on the net.
 * You can browse and download thousands of free desktop or mobile wallpapers from any device at any time.
 *
 * @copyright  Copyright (c) 2015 Lyntor Paul Figueroa
 * @license    MIT License (See LICENSE file)
 * @link       http://www.wallpaperhub.cf
 */

// If you're annoyed by the notification system, set this to true.
process.env.DISABLE_NOTIFIER = true;

// Require laravel elixir.
var elixir = require('laravel-elixir');

// Register the tasks.
elixir(function(mix) {

    // Compile application style.
    mix.sass('app.scss');

    // Compile vendor scripts.
    mix.scripts([
        'vendor/angular.js',
        'vendor/modernizr.js'
    ], 'public/js/vendor.js');

    // Compile application scripts.
    mix.scripts([
        'app/main.js'
    ], 'public/js/app.js');

});
