import React, {useState, Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { images } from "../constants"
import renderIf from 'render-if';
import CoinView  from '../components/coinview'

class Thinhquyen extends Component {
    constructor(){
        super();
        // this.status_left = 1;
        // this.status_right = 0;
        this.state = {
            course: {
                status_left: 1,
                status_right: 0
            }
        }
        // console.log(this.status_left)
        // console.log(this.status_right)

      }
      left(){
          var course = {status_left: 1, status_right: 0};
          this.setState({course});
        //   console.log(this.status_left)
        //   console.log(this.status_right)
      }
      right(){
        var course = {status_left: 0, status_right: 1};
        this.setState({course});
        // console.log(this.state.status_left)
        // console.log(this.state.status_right)
      }

      render() {
        return (
            <View style={styles.view_lon}>
                
                <View style={styles.view_1}>
                    <View
                        style={{flexDirection: 'column',}}
                    >
                        <TouchableOpacity 
                            style={styles.btn_TF} 
                            onPress={this.left.bind(this)}
                            >
                            <Text>Danh mục nhà thuốc</Text>
                        </TouchableOpacity>
                        {renderIf(this.state.course.status_left===1)(
                            <View style={{
                            backgroundColor: '#7C9DF3',
                            width: '100%',
                            height: 5,}} 
                            />
                        )}
                    </View>

                    <View
                        style={{flexDirection: 'column',}}
                    >
                        <TouchableOpacity 
                            style={styles.btn_TF} 
                            onPress={this.right.bind(this)}
                            >
                            <Text>Bảo vệ bản thân</Text>
                        </TouchableOpacity>
                        {renderIf(this.state.course.status_right===1)(
                            <View style={{
                            backgroundColor: '#7C9DF3',
                            width: '100%',
                            height: 5,}} 
                            />
                        )}
                    
                        
                    </View>
                
                </View>
                {renderIf(this.state.course.status_left===1)(
                            <View style={{
                            backgroundColor: 'black',
                            width: '100%',
                            height: 50,
                        }} 
                            >
                                <CoinView />
                             </View>
                        )}
                {renderIf(this.state.course.status_right===1)(
                            <View style={{
                            backgroundColor: 'blue',
                            width: '100%',
                            height: '100%',
                        }} 
                            />
                        )}
        </View>
        )
      }

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
        height: '10%',
        flexDirection: 'row', 
        //alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'pink'
    }, 
    scroll : {
        width: '100%',
        height: '100%',
        backgroundColor: 'blue'
    },
    view_lon: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    }
})
export default Thinhquyen