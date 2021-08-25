import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { images } from '../constants';

class CoinItem extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View style={styles.container}>
        <Text style={styles.text_header1}>
          {this.props.name || 'Name'}
        </Text>

        <View styles={{flexDirection: 'row',}}>   
            <View style={{
                backgroundColor:'pink',
                width: 20,
                height: 20,
                }}>

            </View>
            <View style={{
                backgroundColor:'yellow',
                width:20,
                height:20,
                }}>

            </View>
            {/* <Image source={images.phone} 
                        resizeMode='contain' 
                        style={{
                        width: 20,
                        height: 20,
                        }}
                />
            <Text>hellooo</Text> */}
            {/* <Text style={styles.text}>
                {(this.props.price || 0)}
            </Text> */}
        </View>
        
        {/* <View style={styles.row_info}>
            <Image 
                source={images.address}
                //resizeMode='cover'
            />
            <Text style={styles.text}>
            {'diachi: ' + (this.props.rank || 'Rank')}
            </Text>
        </View> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 32,
  },
  text_header1: {
        color: 'black',
        fontSize: 16,
        fontWeight: 700,
  },
  text: {
    color: 'black'
  },
  row_info:{
    flexDirection: 'row',
    //alignItems: 'flex-start',
    //justifyContent: 'space-between',
    //paddingRight: 12,
  }, 
});

export default CoinItem;