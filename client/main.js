import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import { Bins } from '../imports/collections/bins';

// url map to components
// IndexRoute is invisible whenever parent route has a child/children route (e.g. localhost:300/bins or localhost:300/bins/abcd)
// path="bins/:binId" sets up a variable binId, and passes it as a parameter to BinsMain
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinsList} />
      <Route path="bins/:binId" component={BinsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
