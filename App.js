import React from 'react';
import {
  View, Text
} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import loginScreen from './screens/LoginScreen';
import homeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return(
      <AppStackNav />
    );
  }
}

const AppStackNav = createStackNavigator({
  login: loginScreen,
  home: homeScreen
})