import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logo.jpg')}
                    style={{width:"100%",height:"39%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Save your money</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:60,
                    textAlign:'left',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Pay attention at your money and you will learn to be more resposible.
                </Text>

               
                <View>
                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:60,
                    textAlign:'left',
                    marginTop:15,
                    paddingVertical:-3,
                    opacity:0.4
                }}
                >
                    Email:
                </Text>
                
                </View>
                <View style={{
                     flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#229954",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                                 
                    <Icon name="mail" color="#229954" size={24}/>
                   
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                  
                     </View>
                     
                
                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:60,
                    textAlign:'left',
                    marginTop:15,
                    opacity:0.4
                }}
                >
                    Password:
                </Text>

                
                
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#229954",
                    borderRadius:23,
                    paddingVertical:2
                }}>
               

                    <Icon name="onepassword" color="#229954" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#229954",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Login</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#229954",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>Register</Text>
            </View>
        )
    }
}