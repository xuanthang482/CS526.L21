import React, { Component } from "react";
import { View ,Text, StyleSheet,TouchableOpacity,TextInput} from "react-native";
import TimePicker from "../components/datetimepicker";
import Check from "../components/checkbox";

class ReflectForm extends Component{
    render(){
        return(
            <View style={styles.constainer}>
                <View style={styles.heading}>
                    <Text style={styles.subheading}>Phản ánh</Text>
                    <Text style={{fontWeight:'500'}}>( Phòng chống Covid-19 )</Text>
                </View>
                <Text style={styles.warning}>Khuyến cáo: Khai báo thông tin không đúng sự thật là vi phạm pháp luật Việt Nam và có thể bị xử lí hình sự</Text>
                <View style={{alignItems:"flex-start"}}>
                    <Text style={styles.titlestyle}>Thời gian phát hiện</Text>
                    <TimePicker/>
                    <Text style={styles.titlestyle}>Tỉnh/ Thành phố</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.titlestyle}>Quận / Huyện</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.titlestyle}>Xã/Phường/Thị trấn</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.titlestyle}>Nội dung phản ánh</Text>
                    <View style= {styles.checkboxrow}>
                        <Check/>
                    </View>
                    <Text style={styles.titlestyle}>Nội dung phản ánh khác</Text>
                    <TextInput style={styles.reflect} />
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{}}>
                    <View style= {styles.containbtn}>
                        <Text style={{ color: '#fff', fontSize: 14}}>Gửi phản ánh</Text>
                    </View>
                </TouchableOpacity>
            </View>
            )
    }
}
const styles= StyleSheet.create(
    {
        constainer:{
            width:390,
            alignItems:'center',
            justifyContent: "flex-start",
        },
        containbtn:{
            alignItems:'center',
            justifyContent:'center',
            width:242,
            height: 42,
            marginTop:20,
            backgroundColor:'#841584',
            borderRadius:20,
            marginRight:10
        },
        heading:{
            alignItems:'center',
            marginVertical:12

        },
    
        subheading:{
            fontSize: 20,
            fontWeight: "600",
        },
        warning:{
            color: 'red',
            fontSize:12,
            marginHorizontal:16,
            marginVertical:8
        },
        titlestyle:{
            fontSize:12,
            fontWeight:'400',
            marginVertical:4,
            marginLeft:16
        },
        input:{
            width: 360,
            height: 50,
            borderWidth:1,
            borderRadius:6,
            borderColor: 'gray',
            marginVertical:8,
            paddingLeft:16,
            fontSize: 16,
            lineHeight:1.6,
            marginHorizontal:16
        },
        reflect:{
            width: 360,
            height: 78,
            borderWidth:1,
            borderRadius:6,
            borderColor: 'gray',
            marginVertical:8,
            paddingLeft:16,
            fontSize: 16,
            lineHeight:1.6,
            marginHorizontal:16
        },
        checkboxrow:{
            height:160,width:360,
            marginHorizontal:16,
        }
    }
)
export default ReflectForm