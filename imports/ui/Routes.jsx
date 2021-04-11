import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router-dom';
import render from 'react-dom';
import App from './App'

Meteor.startup(() => {
    render(
    <Router history={browserHistory}>
        <Route path={App}  />
    </Router>,
    document.getElementById('react-target'));
  });
  