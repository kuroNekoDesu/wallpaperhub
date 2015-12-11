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

import TopNav from './components/top-nav';
import MainHeader from './components/main-header';

class App extends React.Component {
    render() {
        return(
            <div>
                <TopNav />
                <MainHeader background="/images/headers/default.jpg" />
            </div>
        );
    }
}

export default App;
