import React from 'react';
import {StyleSheet,Text,View,Image, TextInput, Button,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';


export default class Login extends React.Component{
    state={
        email:"",
        password:"",
        errorMessage:"*",
    }
    handleLogin =()=>
    {
        const{email, password}=this.state
        firebase.auth().signInWithEmailAndPassword(email,password).catch(error =>this.setState({errorMessage:error.message}))
    }
    

    render(){

        
        const {navigate} = this.props.navigation
        return(
            <KeyboardAvoidingView>
           
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logo.jpg')}
                    style={{width:"100%",height:"25%"}}
                />
                 <ScrollView>
               <View style={styles.errorMessage}>{this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
               </View>
               <View style={styles.form}>
                   <View>
                       <Text style={styles.inputTitle}>Email</Text>
                       <TextInput style={styles.input} autoCapitalize="none" 
                                                    onChangeText={email =>this.setState({email})}
                                                    value={this.state.email}
                                                    ></TextInput>
                   </View>
               </View>
               <View style={styles.form}>
                   <View>
                       <Text style={styles.inputTitle}>Password</Text>
                       <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                                                                        onChangeText={password =>this.setState({password})}
                                                                        value={this.state.password}>

                                                                        </TextInput>
                   </View>
               </View>
                
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color:"#fff", fontWeight:"500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf:"center",marginTop:32}} onPress={() => this.props.navigation.navigate("Register") }>
                    <Text style={{color:"#000", fontSize:13}}>
                        New To MoneyManagerApp?<Text style={{fontWeight:"500", color:"#229954"}}>Sign up</Text>
                       
                    </Text>
            
                </TouchableOpacity>
                </ScrollView>    
            </View>
            
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    errorMessage:{
        height:71,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    },
    form:
    {
        marginBottom:48,
        marginHorizontal:30
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
        height:30,
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