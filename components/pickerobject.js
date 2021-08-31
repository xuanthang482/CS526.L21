import React , {Component}from 'react'
import {View,StyleSheet, Picker} from 'react-native'

class PickerObject extends Component{
    constructor(){
        super();
        this.state= {selectedValue:''}
    }
    Show= (value)=> {
        this.setState({
            selectedValue:value
        });
    }
    render(){
        return <View>
            <Picker
              style={{ width: '100%'}}
              selectedValue= {this.state.selectedValue}
              onValueChange={this.Show.bind()}
            >
                <Picker.Item label ='Chuyên gia' value= "Chuyên gia"/>
                <Picker.Item label ='Người Việt Nam' value= "Người Việt Nam"/>
                <Picker.Item label ='Học sinh/ Sinh viên quốc tế' value= "Học sinh/ Sinh viên quốc tế"/>
                <Picker.Item label ='khác' value= "khác"/>
            </Picker>
        </View>
    }
}
const styles= StyleSheet.create({})
export default PickerObject
