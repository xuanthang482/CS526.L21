import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { images } from "../constants"
import { LinearGradient } from 'expo-linear-gradient';

function Home({navigation}){
    return (
        <View style={styles.container}>

            <View style={styles.header}> 
                <LinearGradient 
                    colors={['#244CB8', '#1A357C']} 
                    style={styles.linearGradient}>
                    
                    <View style={{
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginTop: 50,
                    }}>
                        <Image
                            //style={styles.tinyLogo}
                            source={images.logo_boyte}
                            style={{
                                width: 70,
                                height: 70,
                                resizeMode: 'cover'
                            }}
                        />
                    </View>
                    <View
                        style={{justifyContent: 'center', 
                                alignItems: 'center',
                                marginTop: 15,
                    }}
                    >
                        <Text style={styles.text_header1}>
                            BAN CHỈ ĐẠO QUỐC GIA
                        </Text>
                        <Text style={styles.text_header1}>
                            PHÒNG CHỐNG DỊCH BỆNH COVID-19
                        </Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.space}>
                <TouchableOpacity style={styles.btn_dk}>
                    <Text style={{color: 'white'}}>
                        KHAI BÁO CÁCH LY
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container_2Btn}>
                <TouchableOpacity style={styles.btn_1}>
                    <Image source={images.plane_icon} 
                            resizeMode='contain' 
                            style={{
                            width: 30,
                            height: 30,
                            tintColor: 'white',
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
                                tintColor: 'white',
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
        width: '100%',
        height: '100%',
      },
    header: {
        width: "100%",
        height: "40%",
        //backgroundColor: '',
        alignItems: 'center',
        //ackgroundColor: 
    },
    space: {
        width: "80%",
        height: "20%",
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
        backgroundColor:'#81A2F9',
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
        marginTop: 10,
        color: 'white',
    },
    text_header1: { 
        color: 'white',
        fontSize: 20,
    },
    linearGradient: { 
        width: '100%',
        height: '100%',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    }
  });

export default Home;