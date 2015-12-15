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

class TopNav extends React.Component {
    render() {
        return(
            <nav className="top-nav">
                <div className="container-fluid">
                    <ul className="left">
                        <li><IndexLink to="/"><i className="fa fa-fort-awesome"></i></IndexLink></li>
                        <li><Link to="/recent">Recent</Link></li>
                        <li><Link to="/trending">Trending</Link></li>
                        <li><Link to="/tags">Tags</Link></li>
                        <li><Link to="/random">Random</Link></li>
                    </ul>
                    <ul className="right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/upload">Upload</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopNav;
