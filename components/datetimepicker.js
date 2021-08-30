import React, { Component } from "react";
import { Button, View ,Text, StyleSheet, TouchableOpacity,Image} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { images } from "../constants"
import moment from "moment";

class TimePicker extends Component{
  constructor(){
    super();
    this.state={
      isDatePickerVisible:false,
      chosendate:''
    }
  }
  FormatDate = (data) => {
    let dateTimeString =
      data.getDate() +
      '/' +
      (data.getMonth() + 1) +
      '/' +
      data.getFullYear() 
  
    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible:true
    })
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible:false,
    })
  };
  handDatePicker = (datetime) => {
    this.setState({
      isDatePickerVisible:false,
      chosendate: moment(datetime).format("DD/MM/YYYY")
    })
  };
  render(){
    return (
      <View style= {styles.container}>
        <Text>{this.state.chosendate}</Text>
        <TouchableOpacity onPress={this.showDatePicker}>
          <Image source={images.arrowdown} style={{width:12,height:12}}/>
        </TouchableOpacity>
        <DateTimePicker 
           isVisible={this.state.isDatePickerVisible}
           onConfirm = {this.handDatePicker}
           onCancel={this.hideDatePicker}
           mode={'date'}
        />
      </View>
    );
  }
  
};
const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent: "space-between",
    width:360,
    height: 48,
    borderWidth:1,
    borderColor:'grey',
    paddingHorizontal:16,
    borderRadius:6,
    marginLeft:16
  }
}
)

export default TimePicker;