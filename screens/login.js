import React from 'react';
import { StyleSheet, TextInput, View,Button, Text, Image, SafeAreaView } from 'react-native';
import { images } from "../constants"
import { LinearGradient } from 'expo-linear-gradient';

function Login({navigation}){
    const [text, onChangeText] = React.useState("Nhập số điện thoại của bạn");
    return (
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
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        textAlign={'center'}
                        fontSize={20}
                    />
                    <View style={styles.space}>
                        <Button
                            title="Đăng nhập"
                            onPress={() => navigation.navigate('Tabs')}
                            color="#74A6F3"
                            />
                    </View>
                </View>
        </LinearGradient>
        
    );
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      padding: 100,
      marginLeft:40,
      marginRight: 40,
      //backgroundColor: '#ffffff',
    },
    space: {
        width: 200,
        height: 50,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 2,
        padding: 5,
        backgroundColor: 'white',
        //borderColor: 'gray'
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    linearGradient: { 
        width: '100%',
        height: '100%',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    text_header1: { 
        color: 'white',
        fontSize: 20,
    },
  });

export default Login 