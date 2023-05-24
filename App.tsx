import React from 'react';
import 'react-native-gesture-handler';

import Main from './src/screens/Main';
import Home from './src/screens/Home';
import RentCar from './src/screens/RentCAr';
import Car from './src/screens/Car';
import OnBoarding from './src/screens/Onboarding';
import SignUp from './src/screens/SingUp';
import SingIn from './src/screens/SingIn';
import Notification from './src/screens/Notifications';
import Invite from './src/screens/Invite';
import MyRewards from './src/screens/MyRewards';
import HelpCenter from './src/screens/HelpCenter';
import About from './src/screens/About';

import Navigation from './src/navigation';

function App(): JSX.Element {
  return (
    <Navigation />
  )
}
export default App;
