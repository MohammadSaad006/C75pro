
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './Screens/writeScreen';
import ReadScreen from './Screens/readScreen'
import lockScreen from './Screens/lockScreen'
export default class App extends React.Component{
  render() {
    return <AppContainer/>;

  }
}



const TabNavigator = createBottomTabNavigator({
  WRITING: {screen: WriteScreen},
  READING: {screen: ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName == "READING"){
      return(
        <Image
         source = {require('./read.png')}
         style = {{width: 30, height: 30}}
        />
      )
    }
    else if(routeName == "WRITING"){
      return(
        <Image
         source = {require('./write.png')}
         style = {{width: 30, height: 30}}
        />
      )
    }
   }
  })
}
)
const SwitchNavigator = createSwitchNavigator({
  Loginscreen:{screen:lockScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer =  createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "white",
    alignItems : "center",
    justifyContent : "center",
    
  }
});