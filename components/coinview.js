import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import CoinItem from './coinitem';
const sampleData = require('../assets/data.json')
import { images } from "../constants"

class CoinView extends React.Component {
  render() {
    let coinItems = sampleData.map( (data, index) => {
      const {diachi,name,sdt} = data; // Destructuring
      return (
        <CoinItem
          key={index}
          rank={diachi}
          name={name}
          price={sdt}
        />
      );
    });
    
  return (
    <View contentContainerStyle={styles.container}>
      <ScrollView >
        {coinItems}
      </ScrollView>
    </View>  
    );
  }
 }
     

const styles = StyleSheet.create({
  container: {
      //flex: 1,
      // flexDirection: 'column', // row
      backgroundColor: '#E9EAED',
      alignItems: 'center',
      // justifyContent: 'center',
      // alignItems: 'center'
  }
});   
export default CoinView