
import AllExpenses from './src/screens/AllExpenses'
import {Tabs} from './src/config/router' ;
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
    Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: 'Money Manager',
      headerStyle: {
        backgroundColor: '#2b2b39',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
  AllExpenses:AllExpenses

});

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
