import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Switch } from 'react-router';
import Signin from './Pages/Signin';
import './styles/main.scss';
import PrivateRoute from './components/PrivateRoute';
import Home from './Pages/Home';
import PublicRoute from './components/PublicRoute';
import ProfileProvider from './Context/profile.provider';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <Signin />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
