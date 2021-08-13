import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { images } from "../constants"

function Home({navigation}){
    return (
        <View style={styles.container}>
            {/* <Text>hello</Text> */}
            <View style={styles.header}> 
                <ImageBackground source={images.bg_welcome} style={styles.image_styles}>
                </ImageBackground>
            </View>
            <View style={styles.space}>
                <TouchableOpacity style={styles.btn_dk}>
                    <Text>ĐĂNG KÝ KHAI BÁO</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container_2Btn}>
                <TouchableOpacity style={styles.btn_1}>
                    <Image source={images.plane_icon} 
                            resizeMode='contain' 
                            style={{
                            width: 30,
                            height: 30,
                            }}
                    />
                    <Text style={styles.text}>Khai báo y tế nhập cảnh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_2}>
                    <Image source={images.train_icon} 
                                resizeMode='contain' 
                                style={{
                                width: 30,
                                height: 30,
                                }}
                        />
                    <Text style={styles.text}>Khai báo y tế nội địa</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex:1
    },
    image_styles: {
        flex: 1,
        width: "100%",
        height: '100%',
        aspectRatio: 11/3,
      },
    header: {
        width: "100%",
        height: "30%",
        backgroundColor: 'black',
        alignItems: 'center',
    },
    space: {
        width: "80%",
        height: "10%",
        justifyContent: 'center',
        //backgroundColor: '#74A6F3'
    },
    btn_dk: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:50,
        backgroundColor:'#5CC846',
        borderRadius:10,
    },
    container_2Btn: {
        width: "80%",
        height: "20%",
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
    btn_1: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'space-around',
        width:125,
        height:125,
        backgroundColor:'#439ED6',
        borderRadius:10,
        padding:20,
    },
    btn_2: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'space-around',
        width:125,
        height:125,
        backgroundColor:'#1D5678',
        borderRadius:10,
        padding:20,
    },
    text: {
        textAlign: 'center',
        marginTop: 20,
    }
  });

export default Home;