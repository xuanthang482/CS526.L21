import React, { Component } from "react";
import { View ,Text, StyleSheet,TouchableOpacity,TextInput, ScrollView} from "react-native";
import TimePicker from "../components/datetimepicker";
import PickerGender from "../components/pickergender";

class Profile extends Component{
    render(){
        return(
            <ScrollView>
               <View style={styles.constainer}>
                <View style={styles.heading}>
                    <Text style={styles.subheading}>Thông tin cá nhân</Text>
                </View>
                <View style={{
                    height:100,width:300,
                    alignItems:"center",marginBottom:12}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",width:300}}>
                        <TouchableOpacity>
                            <View style= {styles.subbutton1}><Text style={styles.btnText}>Lịch sử</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style= {styles.subbutton2}><Text style={styles.btnText}>Cập nhật</Text></View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <View style= {styles.topbutton}><Text style={styles.btnText}>Tờ khai của tôi</Text></View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:"flex-start"}}>
                <Text style={styles.titlestyle}>Họ và tên</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.titlestyle}>Ngày sinh</Text>
                    <View 
                    style={{
                    height:52,width:360,paddingRight:20,
                    marginVertical:8 }}>
                        <TimePicker/>
                    </View>
                    <Text style={styles.titlestyle}>Giới tính</Text>
                    <View 
                    style={{width:360,
                    height:52, marginHorizontal:16,marginVertical:4,paddingHorizontal:6,
                    borderColor:'grey',borderWidth:1,borderRadius:6}}>
                        <PickerGender/>
                    </View>
                    <Text style={styles.titlestyle}>Tỉnh/ Thành phố</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.titlestyle}>Quận / Huyện</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.titlestyle}>Xã/Phường/Thị trấn</Text>
                    <TextInput style={styles.input} />
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{}}>
                    <View style= {styles.containbtn}>
                        <Text style={styles.btnText}>Lưu thông tin cá nhân</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{}}>
                    <View style= {styles.logoutbtn}>
                        <Text style={styles.btnText}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
            
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
            width:300,
            height: 42,
            marginTop:20,
            backgroundColor:'#841584',
            borderRadius:8,
        },
        logoutbtn:{
            alignItems:'center',
            justifyContent:'center',
            width:300,
            height: 42,
            marginTop:12,
            marginBottom:32,
            backgroundColor:'#C0C0C0',
            borderRadius:8,
        },
        topbutton:{
            alignItems:'center',
            justifyContent:'center',
            width:300,
            height: 36,
            marginVertical:8,
            backgroundColor:'#009966',
            borderRadius:4,
        },
        subbutton1:{
            alignItems:'center',
            justifyContent:'center',
            width:142,
            height: 36,
            backgroundColor:'#00CC99',
            borderRadius:4,
        },
        subbutton2:{
            alignItems:'center',
            justifyContent:'center',
            width:142,
            height: 36,
            backgroundColor:'#00CCFF',
            borderRadius:4,
        },

        heading:{
            alignItems:'center',
            marginVertical:24

        },
    
        subheading:{
            fontSize: 20,
            fontWeight: "700",
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
            height:160,width:330,
            backgroundColor:"green",
            marginHorizontal:32,
            justifyContent:"space-between"
        },
        btnText:{
            fontSize:14,color:'#fff',
            fontWeight:"700"
        }
    }
)
export default Profile