import React, { Component } from 'react';
import {
  View, Button
} from 'react-native';

class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View>
        <Button title="To HomeScreen"
          onPress={() => this.props.navigation.navigate('home')}/>
      </View>
    );
  }
}

export default LoginScreen;