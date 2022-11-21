import * as React from 'react';
import { ContextProvider } from './Components/Context';
import Index from './Components/Index';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Account from './Components/Account';
import Dossiers from './Components/Dossiers';
import Notifications from './Components/Notifications';
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