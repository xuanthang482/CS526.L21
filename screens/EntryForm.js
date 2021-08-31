import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput,TouchableOpacity } from 'react-native'
import PickerGender from '../components/pickergender'
import PickerObject from '../components/pickerobject'
import RadioYN from '../components/radioYN'


class EntryForm extends Component {
    constructor(){
        super();
        this.state={
            data: ['Sốt','Ho','Khó thở']
        }
    }
    render(){
        return(
            <View style={styles.constainer}>
                <Text style={styles.subheading}>Thông tin cá nhân</Text>
                <Text>Đối tượng</Text>
                <View style={styles.picker}>
                    <PickerObject/>
                </View>
        
                <Text>Cửa khẩu</Text>
                <TextInput style={styles.input} />
                <Text>Họ tên (ghi chữ in hoa)</Text>
                <TextInput style={styles.input} />
                <Text>Năm sinh</Text>
                <TextInput style={styles.input} />
                <Text>Số điện thoại</Text>
                <TextInput style={styles.input} />
                <Text>Email</Text>
                <TextInput style={styles.input} />
                
                <Text>Giới tính</Text>
                <View style={styles.picker}>
                    <PickerGender/>
                </View>
                <Text>Quốc tịch</Text>
                <TextInput style={styles.input} />
                <Text>Số hộ chiếu hoặc giấy thông hành hợp pháp khác</Text>
                <TextInput style={styles.input} />
        
                <Text style={styles.subheading}>Địa điểm khởi hành (tỉnh/quốc gia)</Text>
                <Text>Quốc gia/ Vùng lãnh thổ</Text>
                <TextInput style={styles.input} />
                <Text>Tỉnh thành</Text>
                <TextInput style={styles.input} />
        
                <Text style={styles.subheading}>Địa điểm đến (tỉnh/quốc gia)</Text>
                <Text>Quốc gia/ Vùng lãnh thổ</Text>
                <TextInput style={styles.input} />
                <Text>Tỉnh thành</Text>
                <TextInput style={styles.input} />
                <Text>Trong vòng 14 ngày qua (tính đến thời điểm làm thủ tục xuất/nhập cảnh) Anh/Chị có thấy biển hiện nào sau đây không </Text>
                <View style= { styles.surveys}>
                    <Text style={{flex:4.8}}>Triệu chứng</Text>
                    <Text style={{flex:0.8}}>Có</Text>
                    <Text style={{flex:0.8}}>Không</Text>
                </View>
                <View style= { styles.survey}>
                    <Text style={{flex:4}}>Sốt</Text>
                    <RadioYN/>
                </View>
                <View style= { styles.survey}>
                    <Text style={{flex:4}}>Ho</Text>
                    <RadioYN/>
                </View>
                <View style= { styles.survey}>
                    <Text style={{flex:4}}>Khó thở</Text>
                    <RadioYN/>
                </View>
                <View style= { styles.survey}>
                    <Text style={{flex:4}}>Đau họng</Text>
                    <RadioYN/>
                </View>
                <View style= { styles.survey}>
                    <Text style={{flex:4}}>Xuất huyết ngoài da</Text>
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
        fontSize: 18,
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
    }
})
export default EntryForm