import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import CustomerView from './components/Customer/CustomerView.jsx';
import LandingPage from './components/LandingPage.jsx';
import Create from './components/Create.jsx';
import MapContainer from './components/Map.jsx';
import OwnerView from './components/Owner/OwnerView.jsx'

import Create from './components/Create.jsx';
import MapContainer from './components/Map.jsx';
import OwnerView from './components/Owner/OwnerView.jsx'

const App = () => {
  return (
    <>
      <h1>Welcome from App!</h1>
      <Router>
        <ul>
          <li>
            <Link to='/'>Sign in</Link>
          </li>
          <li>
            <Link to='/home'>CustomerView</Link>
            <Link to='/home'>Home</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/' component={LandingPage}>
            <LandingPage />
          </Route>
          <Route path='/home'>
            <CustomerView />
          </Route>
        </Switch>
      </Router>
      <MapContainer />
      <CustomerView />
      <OwnerView />
      <Link to='/home'>Home</Link>
    </li>
        </ul >

  <Switch>
    <Route exact path='/' component={LandingPage}>
      <LandingPage />
    </Route>
    <Route path='/home'>
      <CustomerView />
    </Route>
  </Switch>
    </Router >
    <MapContainer />
    <OwnerView />
    </>
import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'

const App = () => {
  return (
    <div>
      <div>
        <Login />
        <Logout />
      </div>
      <>
        <h1>Welcome from App!</h1>
        <Router>
          <ul>
            <li>
              <Link to='/'>Sign in</Link>
            </li>
            <li>
              <Link to='/home'>CustomerView</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/' component={LandingPage}>
              <LandingPage />
            </Route>
            <Route path='/home'>
              <CustomerView />
            </Route>
          </Switch>
        </Router>
        <MapContainer />
        <CustomerView />
        <OwnerView />
      </>
    </div>
  );
};

export default App;