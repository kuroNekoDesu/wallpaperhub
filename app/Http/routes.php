<?php

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

// Route to homepage.
Route::get('/', function() {
    return view('index', [
        'title' => 'Amazingly Awesome Wallpapers'
    ]);
});

// Route to recently added wallpapers.
Route::get('/recent', function() {
    return view('index', [
        'title' => 'Recently Added Wallpapers'
    ]);
});
