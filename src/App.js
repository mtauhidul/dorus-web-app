import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './views/Admin';
import Crm from './views/Crm';
import Home from './views/Home';
import MobileApp from './views/MobileApp';
import OpenApi from './views/OpenApi';
import Page from './views/Page';
import Wealth from './views/Wealth';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const headers = { webintegrity: 'mdsiod8y40324h23euoby3r02e7GUSA' };
    const getBlogsList = async () => {
      const response = await axios.get(
        'https://sandboxuat.centralindia.cloudapp.azure.com/web/blog/en?entriesCount=10&pagination_page=1',
        { headers }
      );
      setData(response.data.message);
    };
    getBlogsList();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home data={data} />
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
        <Route path='/pages/:link'>
          <Page />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
