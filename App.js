import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FbScreen from './screens/fb'
import InScreen from './screens/in'

export default class App extends React.Component {
 render(){
   return(
     <AppContainer/>
   )
 }
}

const TabNavigator= createBottomTabNavigator({
  facebook: {screen: FbScreen},
  instagram: {screen: InScreen}
})

const AppContainer= createAppContainer(TabNavigator)