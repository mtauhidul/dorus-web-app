import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Crm from './views/Crm';
import Home from './views/Home';
import MobileApp from './views/MobileApp';
import OpenApi from './views/OpenApi';
import Wealth from './views/Wealth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/mobile-app'>
          <MobileApp />
        </Route>
        <Route path='/crm'>
          <Crm />
        </Route>{' '}
        <Route path='/wealth'>
          <Wealth />
        </Route>
        <Route path='/open-api'>
          <OpenApi />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
