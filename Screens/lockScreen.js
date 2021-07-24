import React from 'react';
import { Text,View,TouchableOpacity,TextInput,
   Image,
   StyleSheet,
  KeyboardAvoidingView ,
ToastAndroid,Alert} from 'react-native';
import *as firebase from 'firebase'
export default class lockscreen extends React.Component{
 constructor(){
   super()
   this.state={
     emailId:"",
     password:""
   }
 }
 login=async(email,password)=>{
   if (email && password){
     try{
       const responce=await firebase.auth().signInWithEmailAndPassword(email,password)
       if (responce){
         this.props.navigation.navigate('TransactionScreen')
       }
     }
     catch(error){
     switch(error.code){
       case 'auth/user-not-found':
       Alert.alert("User dosent exesest")
       break 
       case 'auth/invalid-email':Alert.alert("Incorrect Email Or Password")
       break

     }
     }
   }
   else{
     Alert.alert('Please Enter Email And Password')
   }
 }
  render (){
    return(
      
      <KeyboardAvoidingView>
       <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>BedTimeStory</Text>
        </TouchableOpacity>
      <View>
      <Image source={require("../download (3).png")}/>
      <Text></Text>
      </View>
      <View>
      <TextInput style={styles.password}
      placeholder='abc@xyz.com'
      keyboardType='email-address'
      onChangeText={(text)=>{
      this.setState({
        emailId:text
      })
      }}
      />
            <TextInput style={styles.password}
      placeholder='EnterPassword'
      secureTextEntry={true}
      onChangeText={(text)=>{
      this.setState({
        password:text
      })
      }}
      />
      </View>
      <View >
      <TouchableOpacity style={styles.button}
      onPress={()=>{
        this.login (this.state.emailId,this.state.password)
    
      }}>
    <Text>login</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
 header: {
    backgroundColor: 'red',
    fontSize: 20,
  },
    headerText: {
    
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  button:{
  height: 40,
  borderColor: 'black',
  borderWidth: 2,
  placeholderTextColor: 'red',
  textAlign: 'center',
  borderRadius: 30,
  marginTop:90,
  marginLeft:30,
  width: 260,
  color: 'green',
backgroundColor:'green'
  },
  password:{
    height: 40,
  borderColor: 'black',
  borderWidth: 2,
  placeholderTextColor: 'red',
  textAlign: 'center',
  borderRadius: 30,
  marginTop:10,
  marginRight: 15,
  width:330,
  
  backgroundColor:'orange'
  }
 
});