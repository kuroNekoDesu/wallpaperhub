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

process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');

elixir.config.css.sass.pluginOptions.includePaths = ['bower_components'];

elixir.config.js.browserify.options.extensions = ['.jsx'];

elixir(function(mix) {

    mix.sass('main.scss', 'public/css/app.css');

    mix.browserify('index.jsx', 'public/js/app.js');

});
