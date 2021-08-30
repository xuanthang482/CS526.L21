import React from 'react';
//import { StyleSheet, Text, View,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Tabs  from './navigation/tabs';
import  Home  from './screens/home';
import Notify  from './screens/notify'
import { Login } from './screens';
import EntryForm from "./screens/EntryForm"
import DomesticForm from './screens/DomesticForm'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="EntryForm" component={EntryForm} />
      <Stack.Screen name="DomesticForm" component={DomesticForm} />
    </Stack.Navigator>
  );

};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

