import React from 'react';
import {StyleSheet,Text,View,Image, TextInput, Button,TouchableOpacity, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

export default class Loading extends React.Component{
    componentDidMount()
    {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }
    render()
    {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }
}


const styles= StyleSheet.create
(
    {
        container:
        {
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        }
    }
)