/*import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import Home from '../screens/Home';
import Budget from '../screens/Budget';
import Expenses from '../screens/Expenses';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <FontAwesome name="home" color={tintColor} size={30} />
            <Text style={{color: tintColor}}>Home</Text>
          </View>
        ),
      },
    },
    Budget: {
      screen: Budget,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
             <FontAwesome name="credit-card" color={tintColor} size={30} />
            <Text style={{color: tintColor}}>Budget</Text>
          </View>
        ),
      },
    },
    Expenses: {
      screen: Expenses,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <FontAwesome name="money" color={tintColor} size={30} />
            <Text style={{color: tintColor}}>Expenses</Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        fontFamily: "SFUIDisplay-Bold",
        height: 80,
        backgroundColor: '#229954',
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        elevation: 10,
      },
      activeTintColor: '#06e006',
      inactiveTintColor: '#ebfdb4',
    },
  },
);

const MainScreenNavigator = createStackNavigator({
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
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    
  },
});*/