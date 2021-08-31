import React , {Component}from 'react'
import {View,StyleSheet, Picker} from 'react-native'

class PickerGender extends Component{
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
                <Picker.Item label ='Nam' value= "Nam"/>
                <Picker.Item label ='Nữ' value= "Nữ"/>
                <Picker.Item label ='Khác' value= "Khác"/>
            </Picker>
        </View>
    }
}
const styles= StyleSheet.create({})
export default PickerGender
