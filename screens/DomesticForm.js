import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native'

import PickerVehicle from '../components/pickervehicle'
import RadioGender from '../components/radioGender'
import RadioYESNO from '../components/radioYesNo'
import RadioYN from '../components/radioYN'

class DomesticForm extends Component {

    render(){
        return(
            <View style={styles.constainer}>
                <View style={{ marginLeft:80, marginBottom : 30}}>
                    <Text style={styles.subheading}>Thông tin khái báo y tế</Text>
                    <Text style= {{marginLeft:30}}>(phòng chống Covid-19)</Text>
                </View>
                <Text>Phương tiện đi lại</Text>
                <View style={styles.picker}>
                    <PickerVehicle/>
                </View>
        
                <Text>Nơi đi</Text>
                <TextInput style={styles.input} />
                <Text>Điểm đi</Text>
                <TextInput style={styles.input} />
                <Text>Nơi đến</Text>
                <TextInput style={styles.input} />
                <Text>Điểm đến</Text>
                <TextInput style={styles.input} />
                <Text>Số phương tiện</Text>
                <TextInput style={styles.input} />
                <Text>Số ghế</Text>
                <TextInput style={styles.input} />
                <Text>Ngày khởi hành</Text>
                <TextInput style={styles.input} />

        
                <Text>Họ và tên ghi chữ in hoa</Text>
                <TextInput style={styles.input} />
                <Text>Năm sinh</Text>
                <TextInput style={styles.input} />
                <Text>Số hộ chiếu/ CMND/ CCCD</Text>
                <TextInput style={styles.input} />
                <Text>Giới tính</Text>
                <RadioGender/>

                <Text>Trong vòng 14 ngày qua, Anh/Chị có đến tỉnh/thành phố, quốc gia/vùng lãnh thổ nào khác không ? ( có thể đi qua nhiều nơi)</Text>
                <RadioYESNO/>

                <Text>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện ít nhất một trong các triệu chứng như sốt, ho, khó thở, viêm phổi, đau họng, mệt mỏi không?</Text>
                <RadioYESNO/>
                
                <Text>Trong vòng 14 ngày qua anh chị có tiếp xúc với một trong các trường hợp sau đây không? </Text>
                <View style= { styles.surveys}>
                    <Text style={{flex:4.8}}></Text>
                    <Text style={styles.textbold}>Có</Text>
                    <Text style={styles.textbold}>Không</Text>
                </View>
                <View style= { styles.survey}>
                    <Text style={{flex:4}}>Người bệnh hoặc nghi mắc bệnh COVID-19</Text>
                    <RadioYN/>
                </View>
                <View style= { styles.survey}>
                    <Text style={{flex:4}}>Người từ quốc gia/ vùng lãnh thổ có bệnh COVID-19 </Text>
                    <RadioYN/>
                </View>
                <View style= { styles.survey}>
                    <Text style={{flex:4}}>Người có các biển hiện sốt, ho, khó thở, viêm phổi</Text>
                    <RadioYN/>
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={()=>{}}>
                    <View style= {styles.containbtn}>
                        <Text style={{ color: '#fff', fontSize: 16}}>GỬI TỜ KHAI</Text>
                    </View>
                </TouchableOpacity>
            </View>
            )
    }
    
}
const styles= StyleSheet.create({
    constainer:{
        width: "100%",
        alignItems: 'flex-start',
        padding:16,
        backgroundColor:'#fff',
        marginTop:12
    },
    containbtn:{
        alignItems:'center',
        justifyContent:'center',
        width:300,
        height: 46,
        marginTop:20,
        backgroundColor:'#841584',
        borderRadius:20,
        marginLeft:30
    },

    appbarstyle:{
        height:30,
        width:260,
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom:10,
    },
    input:{
        width: '100%',
        height: 50,
        borderWidth:1,
        borderRadius:4,
        borderColor: 'gray',
        marginVertical:8,
        paddingLeft:16,
        fontSize: 16,
        lineHeight:1.6

    },
    picker:{
        width:'100%',
        borderWidth:1,
        borderColor:'grey',
        borderRadius:6,
        paddingLeft:6,
        marginVertical:6
        },
    buttonstyle:{
        padding:16
    },

    textstyle:{
        fontSize:20,
        fontWeight:'700',
        marginBottom: 2,
    },
    subheading:{
        fontSize: 20,
        fontWeight: "700",
        marginBottom:2
    },
    survey:{
        marginTop:8,
        flexDirection:'row',
        paddingHorizontal:6
    },
    surveys:{
        marginTop:12,
        flexDirection:'row',
        marginBottom:6,
    },
    textbold:{
        fontWeight:'700',
        flex: 0.8
    }
})
export default DomesticForm