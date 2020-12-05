
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import * as firebase from "firebase";

export default class Home extends React.Component
{
    state={
        email:"",
        displayName:""
    };

    componentDidMount()
    {
        const {email,displayName}=firebase.auth().currentUser;
        this.setState({email,displayName});
    }

    signOutUser =()=>
    {
        firebase.auth().signOut();
    }

    render()
    {
        return(
            <View >
            <View >
            <Text style={styles.user}>

             <FontAwesome name="user" color= "#229954" size={28}></FontAwesome>
            Hi, {this.state.email.substr(0, this.state.email.indexOf('@'))}
                
            </Text>
            </View>

            <View></View>
            <View>

            <TouchableOpacity  style={{marginTop:32}} onPress={this.signOutUser}>
                <FontAwesome name="sign-out" color= "#229954" size={28}></FontAwesome>
            </TouchableOpacity>
            </View>
            </View>
        )

    }
}


const styles =StyleSheet.create(
    {
        user:
        {
            marginHorizontal:40,
            marginTop:10,
            fontSize:19,
            
        },

        container:
        {
            flex:1,
            justifyContent:"center",
            alignContent:"center",
            
        }
    }
)
