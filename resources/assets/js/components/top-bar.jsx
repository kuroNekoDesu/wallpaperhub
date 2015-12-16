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
import {Link, IndexLink} from 'react-router';

import Search from './search';

class TopBar extends React.Component {
    render() {
        return(
            <nav className="top-bar">
                <div className="container">
                    <ul className="left">
                        <li><IndexLink to="/" className="logo">WallpaperHub</IndexLink></li>
                        <li><Link to="/explore">Explore</Link></li>
                        <li><Link to="/tags">Tags</Link></li>
                        <li><Link to="/forums">Community</Link></li>
                    </ul>
                    <div className="middle">
                        <Search />
                    </div>
                    <ul className="right">
                        <li><Link to="/upload">Upload</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopBar;
