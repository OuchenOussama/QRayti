import * as React from 'react';
import { ContextProvider } from './Views/Context';
import Index from './Views/Index';
import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';
import Home from './Views/Home';
import Profile from './Views/Profile';
import Account from './Views/Account';
import Dossiers from './Views/Dossiers';
import Notifications from './Views/Notifications';
import {Scene, Router} from 'react-native-router-flux';

export default function App() {
  return (
    <ContextProvider>
     <Router>
        <Scene key="root">
          <Scene key="Index" component={Index} inital hideNavBar={true}/>
          <Scene key="SignIn" component={SignIn}  hideNavBar={true}/>
          <Scene key="SignUp" component={SignUp} hideNavBar={true}/>
          <Scene key="Profile" component={Profile} hideNavBar={true}/>
          <Scene key="Account" component={Account} hideNavBar={true}/>
          <Scene key="Home" component={Home} hideNavBar={true} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene key="Notifications" component={Notifications} hideNavBar={true} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene key="Dossiers" component={Dossiers} hideNavBar={true} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
        </Scene>
      </Router>
    </ContextProvider>
  );
}