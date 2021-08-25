import React, {useState, Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { images } from "../constants"
import Thinhquyen from "../components/thinhquyen"



function Notify(){
    const [infected, setInfected] = useState(null);
    const [recovered, setRecovered] = useState(null);
    const [deceased, setDeceased] = useState(null);
    const [isNhaThuoc, setStatus] = useState(true);
    var key = true;
    async function cc () {
        const res = await fetch('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true', {
                            method: 'GET',
                        })
        const data = await res.json() //  res.text();
        setInfected(data.infected)
        setRecovered(data.recovered)
        setDeceased(data.deceased)
    }
    cc();
    var date = new Date();
    var formatedDate = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`

    function Setnhathuoc(){
        
        key = true
        console.log(key)
    
    }
    function Setimage(){
        console.log(key)
        key = false
        console.log(key)
    
    }
    return (
        <View style={styles.container}>
        { formatedDate && <Text style={{fontWeight: 'bold'}}>Số liệu thống kê đến ngày {formatedDate}</Text> }
           <View style={styles.headings}>
                <TouchableOpacity style={styles.square}>
                        <Text>Bị nhiễm</Text>
                        <View style={{flexDirection: 'row',}}>
                            <Image source={images.vietnam_flag} 
                                    resizeMode='contain' 
                                    style={{
                                    width: 20,
                                    height: 20,
                                    marginBottom: 20,
                                    marginRight: 10, 
                                    }}
                            />
                            {infected && <Text 
                                style={{
                                    marginBottom: 10,
                                    color: 'red',
                                    fontWeight: 'bold',
                                }}
                            >
                                {infected} 
                            </Text> }
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.square}>
                        <Text>Tử vong</Text>
                        <View style={{flexDirection: 'row',}}>
                            <Image source={images.vietnam_flag} 
                                    resizeMode='contain' 
                                    style={{
                                    width: 20,
                                    height: 20,
                                    marginBottom: 20,
                                    marginRight: 10, 
                                    }}
                            />
                            {deceased && <Text 
                                style={{
                                    marginBottom: 10,
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {deceased} 
                            </Text> }
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.square}>
                        <Text>Bình phục</Text>
                        <View style={{flexDirection: 'row',}}>
                            <Image source={images.vietnam_flag} 
                                    resizeMode='contain' 
                                    style={{
                                    width: 20,
                                    height: 20,
                                    marginBottom: 20,
                                    marginRight: 10, 
                                    }}
                            />
                            {recovered && <Text 
                                style={{
                                    marginBottom: 10,
                                    color: 'green',
                                    fontWeight: 'bold',
                                }}
                            >
                                {recovered} 
                            </Text> }
                        </View>
                </TouchableOpacity>

                
            </View>
           <Thinhquyen />
           
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      flex:1,
      //backgroundColor: 'yellow',
      alignItems: 'center',

    },
    square: { 
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'space-around',
        width:125,
        height:125,
        //backgroundColor:'#439ED6',
        borderRadius:10,
        padding:5,
    }, 
    headings: {
        width: '100%',
        height: '30%',
        //backgroundColor: 'pink',
        //justifyContent: 'center',
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    btn_TF: { 
        alignItems:'center',
        justifyContent:'space-around',
        width:180,
        height:40,
        padding:5,
        margin: 5,
    }, 
    view_1: {
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center', 
    }, 
})

export default Notify 