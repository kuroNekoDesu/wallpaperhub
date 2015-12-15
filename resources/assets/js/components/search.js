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

import React from 'react';

class Search extends React.Component {
    render() {
        return(
            <form id="search" className="search">
                <input type="text" name="q" placeholder="Search WallpaperHub" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        );
    }
}

export default Search;
