import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './navigation/Tabs'

const App = () => {
  return(
    <NavigationContainer>
    <Tabs />
    </NavigationContainer>)

}


export default App;
