import React, { useState, useEffect, Context } from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  useHistory,
} from 'react-router-dom';
import Landing from './components/Landing.jsx';
import CustomerView from './components/Customer/CustomerView.jsx';
import OwnerView from './components/Owner/OwnerView.jsx';

const App = () => {
  const history = useHistory();
  const [gId, setId] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [username, setUsername] = useState('');
  const [gEmail, setGEmail] = useState('');
  const [mapLatLng, setMapLatLng] = useState('');
  const [userId, setUserId] = useState('');
  const [barId, setBarId] = useState();

  // useEffect(() => {
  //   if (localStorage.customerToken) {
  //     history.push('/customer');
  //   } else if (localStorage.ownerToken) {
  //     history.push('/owner');
  //   }
  // }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Landing}
          >
            <Landing
              setId={setId}
              setProfileImage={setProfileImage}
              setUsername={setUsername}
              gId={gId}
              username={username}
              profileImage={profileImage}
              setGEmail={setGEmail}
              gEmail={gEmail}
              mapLatLng={mapLatLng}
              setBarId={setBarId}
            />
          </Route>
          <Route
            path="/owner"
            component={OwnerView}
          >
            <OwnerView
              barId={barId}
            />
          </Route>
          <Route
            path="/customer"
            component={CustomerView}
          >
            <CustomerView
              gId={gId}
              username={username}
              userId={userId}
              setMapLatLng={setMapLatLng}
              setId={setId}
              setUsername={setUsername}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
