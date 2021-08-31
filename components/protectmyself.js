import React from 'react';
import { StyleSheet, Image, ScrollView,View, Text } from 'react-native';
import { images } from "../constants"
class BaoveBanthan extends React.Component{
  render(){
  return( 
    <View style={styles.container}>
    {/* <Text style={{ fontSize: 96 }}>Scroll me plz</Text> */}
    <ScrollView style={styles.one_image}>
        <Image source={images.protect_image_1} 
            resizeMode = 'stretch' 
            style={{
                width: 360,
                height: 500,
                marginBottom: 20,
                marginRight: 10, 
                }}
                />    
     
    <Image source={images.protect_image_2} 
           resizeMode = 'contain' 
           style={{
            width: 360,
            height: 500,
            marginBottom: 20,
            marginRight: 10, 
            }}
            />  
    <Image source={images.protect_image_3} 
            resizeMode = 'stretch' 
            style={{
                width: 360,
                height: 500,
                marginBottom: 20,
                marginRight: 10, 
                }}
            />  
    <Image source={images.protect_image_4} 
           resizeMode = 'stretch' 
           style={{
               width: 360,
               height: 500,
               marginBottom: 20,
               marginRight: 10, 
               }}
            />  
    </ScrollView>  
  </View>
    )
  }
}
const styles = StyleSheet.create({
    container : {
        flexDirection: 'column',
        alignItems: 'center',
    },
    one_image : {
        height: 600,
        width : '100%',
    }
})

export default BaoveBanthan;