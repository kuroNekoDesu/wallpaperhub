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
import Helmet from 'react-helmet';

import Welcome from '../components/welcome';

class HomeView extends React.Component {
    render() {
        return(
            <div>
                <Helmet title="Amazingly Awesome Wallpapers" />
                <div className="main-contents" style={{padding: 0}}>
                    <Welcome featured="http://static.zerochan.net/Pixiv.Id.2818273.full.1858949.jpg" />
                </div>
            </div>
        );
    };
}

export default HomeView;
