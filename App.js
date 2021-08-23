import React from 'react';
//import { StyleSheet, Text, View,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Tabs  from './navigation/tabs';
import  Home  from './screens/home';
import Notify  from './screens/notify'
import { Login } from './screens';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName={'Notify'}
    >
      <Stack.Screen name="Notify" component={Notify} />
      <Stack.Screen name="Tabs" component={Tabs} />
      {/* <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="welcome" component={Welcome} /> */}
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

