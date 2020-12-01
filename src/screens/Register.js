import React from 'react';
import {Text,View,Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from '@expo/vector-icons/AntDesign';
import * as firebase from 'firebase';
export default class Register extends React.Component{
    state={
        name:"",
        email:"",
        password:"",
        errorMessage:"null"
    }
    handleSignUp=()=>
    {
        firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email,this.state.password)
                .then(userCredentials =>
                    {
                        return userCredentials.user.updateProfile(
                            {
                                displayName:this.state.name
                            }
                        )
                    })
                    .catch(error => this.setState({ errorMessage: error.message}))
    }
  

    render(){
        const {navigate} = this.props.navigation
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logo.jpg')}
                    style={{width:"100%",height:"20%"}}
                />
                 <Text
                 style={{
                     fontSize:20,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:5,
                     paddingVertical:30
                     
                 }}
                >Create your account</Text>

                <View style={styles.errorMessage}>{this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
               </View>

               <View style={styles.form}>
                   <View >
                       <Text style={styles.inputTitle}>Full Name</Text>
                       <TextInput style={styles.input} autoCapitalize="none" 
                                                    onChangeText={name =>this.setState({name})}
                                                    value={this.state.name}
                                                    ></TextInput>
                   </View>
                   <View style={{marginTop:20}}>
                       <Text style={styles.inputTitle}>Email</Text>
                       <TextInput style={styles.input} autoCapitalize="none" 
                                                    onChangeText={email =>this.setState({email})}
                                                    value={this.state.email}
                                                    ></TextInput>
                   </View>
                   <View style={{marginTop:20}}>
                       <Text style={styles.inputTitle}>Password</Text>
                       <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                                                                        onChangeText={password =>this.setState({password})}
                                                                        value={this.state.password}>

                                                                        </TextInput>
                   </View>
               </View>
               <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color:"#fff", fontWeight:"500"}}>Sign up</Text>
                </TouchableOpacity>
              
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    errorMessage:{
        height:30,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
              marginBottom:10
    },
    form:
    {
        marginBottom:48,
        marginHorizontal:40
    },
    error:
    {
        color:"#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
    },
    inputTitle:
    {
        color:"#8A8F9E",
        fontSize:10,
        textTransform:"uppercase"
    },
    input:
    {
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"
    },
    button:
    {
        marginHorizontal:30,
        backgroundColor:"#229954",
        borderRadius:4,
        alignItems:"center",
        height:52,
        justifyContent:"center"

    }
})