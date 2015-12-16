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
import {Route, Router, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import AppView from './views/app';
import HomeView from './views/home';
import ExploreView from './views/explore';

export default (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={AppView}>
            <IndexRoute component={HomeView} />
            <Route path="explore" component={ExploreView} />
        </Route>
    </Router>
);
