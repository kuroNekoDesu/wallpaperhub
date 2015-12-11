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

class TopNav extends React.Component {
    render() {
        return(
            <nav className="top-nav">
                <div className="container-fluid">
                    <ul className="left">
                        <li><a href="/"><i className="fa fa-fort-awesome"></i></a></li>
                        <li><a href="/latest">Latest</a></li>
                        <li><a href="/popular">Popular</a></li>
                        <li><a href="/random">Random</a></li>
                        <li><a href="/community">Community</a></li>
                    </ul>
                    <ul className="right">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopNav;
