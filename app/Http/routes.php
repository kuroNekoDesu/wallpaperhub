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

Route::get('/', function() {
    return view('index', [
        'title' => 'Amazingly Awesome Wallpapers'
    ]);
});

Route::get('/explore', function() {
    return view('index', [
        'title' => 'Recent Wallpapers on WallpaperHub'
    ]);
});
