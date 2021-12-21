import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import MobileApp from './views/MobileApp';

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
      </Switch>
    </Router>
  );
}

export default App;
