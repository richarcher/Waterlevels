import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/Main';
import Home from './components/pages/HomePageComponent';
import Dam from './components/pages/DamPageComponent';

// Render the main component into the dom
ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="dam" component={Home} />
        <Route path="dam/:id" component={Dam} />
      </Route>
    </Router>
), document.getElementById('app'));
