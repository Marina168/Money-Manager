/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import MainScreenNavigator from './src/config/router'*/

import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import MainScreenNavigator from './src/config/router';

/*export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf')
    });
    this.setState({isFontLoaded:true})
  }

  render(){
    return (
      //(this.state.isFontLoaded === true) ? (<AppNavigator/>):(AppLoading)
      <View style={styles.container}>
      <StatusBar backgroundColor="#2b2b39" barStyle="light-content" />
      <MainScreenNavigator />
    </View>

      
    );
  }
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */


class App extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2b2b39" barStyle="light-content" />
        <MainScreenNavigator />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
