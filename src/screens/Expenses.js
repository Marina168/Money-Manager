/*import React, {Component} from 'react';
import {AppRegistry,View, Text, StyleSheet, Button, TextInput,TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import DropDownPicker from 'react-native-dropdown-picker';
 
import moment from 'moment';
export default class Expenses extends Component {
    
  constructor(props){
 
    super(props);
 
    this.state = {
 
      DateText: '',
 
      DateHolder: null,
      item: null,
      enableShift:false,
      setenableShift:false,
      
    }
  }
 
  
    //Textbox click listener
   
  DatePickerMainFunctionCall = () => {
 
    let DateHolder = this.state.DateHolder;
 
    if(!DateHolder || DateHolder == null){
 
      DateHolder = new Date();
      this.setState({
        DateHolder: DateHolder
      });
    }
 
    //To open the dialog
    this.refs.DatePickerDialog.open({
 
      date: DateHolder,
 
    });
 
  }
 
  
   // Call back for dob date picked event
   
  onDatePickedFunction = (date) => {
    this.setState({
      dobDate: date,
      DateText: moment(date).format('DD-MMM-YYYY')
    });
  }
 
  render() {
    return (
      <View style={styles.container}>

<View style={{
                    marginHorizontal:120,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,
                    backgroundColor:"#F39C12",
                    paddingVertical:10,
                    borderRadius:15,
                    left:100,
                    
                  
                }}>
                         
        
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold",
                        fontSize:16,
                    }}>View all expenses</Text>
                </View>
      
      
      <View style={styles.item}>
          <Text
                 style={styles.content}
                >Date</Text>
        
        {//Place the dialog component at end of your views and assign the references, event handlers to it.}
        <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} />
       
        <View style={styles.datePickerBox}>

            <Text style={styles.datePickerText}>{this.state.DateText}</Text>

        </View>
        <Icon name="calendar" color="#229954" size={50} onPress={this.DatePickerMainFunctionCall.bind(this)} >
        </Icon>
        </View>
 
        <View style={styles.item}>
        <Text
                style={
                  styles.content
                
                }
                >
                    Category:
                </Text>

          <DropDownPicker style={styles.dropdown}
              items={[
              {label: 'Food', value: 1},
               {label: 'Clothes', value: 2},
               {label: 'Bills', value: 3}
    ]}
    containerStyle={{height: 40}}
    defaultNull={this.state.item === null}
    placeholder="Select"
    placeholderStyle={{fontWeight: 'bold'}}
    onChangeItem={(item)=> {
        this.setState({
            item: item.value
        });
    }}
   
/>
</View>
<Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:105,
                    textAlign:'left',
                    marginTop:15,
                    //opacity:0.4
                }}
                >
                    Or insert a new category
                </Text>

                
                
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:105,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#229954",
                    paddingVertical:2,
                    width:250,
                }}>
               
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />

                </View>
                
                <View style={styles.item}>
                <Text
                style={{fontSize: 20,
                    textAlign: 'left',
                     margin: 10,marginTop:20,}}
                >

                  Expense:
                </Text>   

                
                
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:5,
                    borderWidth:2,
                    marginTop:15,
                    borderColor:"#229954",
                    paddingVertical:2,
                    height:35,
                }}>
               
                    <TextInput 
                        style={{ paddingHorizontal:30}}
                    />
                </View>
                    

                </View>
                <Text
                style={styles.content
                }
                >
                  Comment:
                </Text>

                
                
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:20,
                    borderWidth:2,
                    marginTop:15,
                    borderColor:"#229954",
                    paddingVertical:2,
                    height:80
                    
                }}>
               
                    <TextInput 
                        placeholder="Comment..."
                        style={{paddingHorizontal:10}}
                        
            
                    />

                </View>
                <View style={{
                    marginHorizontal:90,
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
                    }}>Add Expense</Text>
                </View>
        
      </View>
      
      
    );
  }




 
}


const styles = StyleSheet.create({

  item:{
    flexDirection:"row"
  },
  dropdown:
  {
    height:30,
    width:250,
    borderColor:"#229954",
    borderWidth:2,
  },
  container: {
    flex: 1,
    flexDirection:"column",
    padding: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical:10
  },
 
  content: {
 
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
 
  datePickerBox:{
    marginTop: 9,
    borderWidth: 2,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
    justifyContent:'center',
    width:150,
    borderColor:"#229954",
 
  },
 
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#229954',
 
  },
});
 
AppRegistry.registerComponent('Expenses', () => Expenses);
*/