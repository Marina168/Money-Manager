import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Budget extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

export default Budget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});