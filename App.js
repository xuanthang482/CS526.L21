import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PickerObject from './components/pickerobject';
import PikerVehicle from './components/pickervehicle';
import RadioYN from './components/radioYN';
import DomesticForm from './screens/DomesticForm';
import EntryForm from './screens/EntryForm';


export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <DomesticForm/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    alignItems: 'center',
  },
});
