import React from 'react';
import { StyleSheet, TextInput, View,Button, ImageBackground, SafeAreaView } from 'react-native';
import { images } from "../constants"



function Login({navigation}){
    const [text, onChangeText] = React.useState("Nhập số điện thoại của bạn");
    return (
        <View style={styles.container_bg}>
            <ImageBackground source={images.bg_welcome} resizeMode="cover" style={styles.image}>
                {/* <View style={styles.container}> */}
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
                                onPress={() => navigation.navigate('welcome')}
                                color="#74A6F3"
                                />
                        </View>
                    </View>
                    
                {/* </View> */}
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
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
    container_bg: {
        flex: 1,
      },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 2,
        padding: 5,
        //borderColor: 'gray'
        //justifyContent: 'center',
        //alignItems: 'center'
    },
  });

export default Login 