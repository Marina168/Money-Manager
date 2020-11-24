import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Expenses extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Page</Text>
      </View>
    );
  }
}

export default Expenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});