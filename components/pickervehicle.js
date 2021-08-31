import React , {Component}from 'react'
import {View,StyleSheet, Picker} from 'react-native'

class PickerVehicle extends Component{
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
                <Picker.Item label ='Máy bay' value= "Máy bay"/>
                <Picker.Item label ='Tàu hỏa' value= "Tàu hỏa"/>
                <Picker.Item label ='Xe khách' value= "Xe khách"/>
                <Picker.Item label ='Tàu thuyền' value= "Tàu thuyền"/>
                <Picker.Item label ='cá nhân' value= "Cá nhân"/>
            </Picker>
        </View>
    }
}
const styles= StyleSheet.create({})
export default PickerVehicle
