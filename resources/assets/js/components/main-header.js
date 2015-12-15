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

class MainHeader extends React.Component {
    render() {
        return(
            <header className="main-header" style={{backgroundImage: 'url("' + this.props.background + '")'}}>
                <div className="container">
                    <IndexLink to="/" className="logo">WallpaperHub</IndexLink>
                    <Search />
                </div>
            </header>
        );
    }
}

MainHeader.propTypes = {
    background: React.PropTypes.string
};

export default MainHeader;
