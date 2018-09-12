import React, { Component } from 'react';
import { View, Button } from 'react-native';

class HomeScreen extends Component {
  render() {
    return(
      <View>
        <Button title="Go back"
            onPress={() => this.props.navigation.goBack()}/>
        <Button title="Go back to top" 
            onPress={() => this.props.navigation.popToTop()}/>
      </View>
    );
  }
}

export default HomeScreen;