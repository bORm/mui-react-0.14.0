'use strict';
import React from 'react';
import Router, { Route, Redirect, DefaultRoute, NotFoundRoute } from 'react-router';

import Root from 'components/Root.jsx';
import { createHistory, createHashHistory, createMemoryHistory } from 'history'
let history = createHashHistory({
  queryKey: false
});

const routes = {
  path: '/',
  component: Root,
  childRoutes: [
    /*{ path: 'about', component: About },
    { path: 'inbox', component: Inbox }*/
  ]
};

module.exports = (<Router history={history} routes={routes} />);