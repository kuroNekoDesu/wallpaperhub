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
import {Link} from 'react-router';

class Welcome extends React.Component {
    render() {
        return(
            <div className="welcome" style={{backgroundImage: 'url("' + this.props.featured + '")'}}>
                <div className="container">
                    <div>
                        <h1 className="logo">WallpaperHub</h1>
                        <p className="intro">
                            A website for wallpaper enthusiasts.<br />
                            Explore thousands of amazingly awesome wallpapers.
                        </p>
                        <Link to="/explore" className="btn btn-big">Start browsing wallpapers &raquo;</Link>
                    </div>
                </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    featured: React.PropTypes.string.isRequired
};

export default Welcome;
