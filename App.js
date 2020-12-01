import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import MainScreenNavigator from './src/config/router' ;

import Loading from './src/screens/Loading';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

import * as firebase from 'firebase';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

var firebaseConfig = {
  apiKey: "AIzaSyAdN_Xx4x5vdOjVh0_96Qew6fPPS5MTOkU",
  authDomain: "money-manager-1da8a.firebaseapp.com",
  databaseURL: "https://money-manager-1da8a.firebaseio.com",
  projectId: "money-manager-1da8a",
  storageBucket: "money-manager-1da8a.appspot.com",
  messagingSenderId: "1041238613487",
  appId: "1:1041238613487:web:5f7153c80a14d6b9102a1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator(
  {
    Home:Home
  }
)

const AuthStack = createStackNavigator
(
  {
    Login:Login,
    Register:Register
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:Loading,
      App:AppStack,
      Auth:AuthStack
    },
    {
      initialRouteName:"Loading"
    }
  )
)















/*import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import MainScreenNavigator from './src/config/router';*/

/*class App extends React.Component {
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
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(AppLoading)
    
      
    );
  }
 
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/



/*class App extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2b2b39" barStyle="light-content" />
        <MainScreenNavigator />
      </View>
    );
  }
}*/


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
*/