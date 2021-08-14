import React, { useState, useEffect, Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,TextInput,
  ToastAndroid,
  StyleSheet,SafeAreaView, ScrollView,
  Modal,
  Button,
  CheckBox,
  FlatList,
} from 'react-native';

import { Card } from 'react-native-paper';
// import Constants from 'expo-constants'
import t from 'tcomb-form-native';

let Form = t.form.Form;

const data = [
    { id: 1, txt: 'Có trường hợp nghi ngờ mắc bệnh', isChecked: false },
    { id: 2, txt: 'Có trường hợp đi từ vùng dịch về', isChecked: false },
    { id: 3, txt: 'Có trường hợp tiếp xúc với trường hợp đi từ vùng dịch về', isChecked: false },
    { id: 4, txt: 'Có trường hợp tiếp xúc với trường hợp nghi ngờ mắc bệnh', isChecked: false },
  ];
  

class Complain extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    var formatedDate = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
    this.state = {
      value: {
        Date: formatedDate,
        // City: 'Nhập thành phố , ví dụ : Sóc Trăng',
        // District: 'Nhập Quận / huyện , ví dụ : Mỹ xuyên',
        // Ward: 'Nhập Phường / Xã , ví dụ : Phường 3',
        // RememberMe: true,
      },
      products : data,
    };
    this.submitForm = this.submitForm.bind(this)
  }
  
  handleChange = (id) => {
    let temp = this.state.products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    this.setState({
      products: temp,
    });
  };
  renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <CheckBox
                  value={item.isChecked}
                  onChange={() => {
                    this.handleChange(item.id);
                  }}
                />
                <Text>{item.txt}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    );
  };
  submitForm() {
    var value = this.refs.personForm.getValue();
    if (value) {
      // if validation fails, value will be null
      ToastAndroid.show('Validation successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please fix errors', ToastAndroid.SHORT);
    }
    //console.log(value);
  }

  render() {
    // const [values, onChangeText] = React.useState('Useless Placeholder')  
    // let selected = this.state.products?.filter((product) => product.isChecked);  
    let PersonModel = t.struct({
      Date: t.maybe(t.String), // a required string
      City: t.String, // an optional string
      District: t.String,
      Ward: t.String,
    //   RememberMe: t.Boolean, // a boolean
      gender: t.enums({M:'Nam', F:'Nữ'}, 'gender'),
    //   tags: t.list(t.String),                 
    });
    
    let options = {
      auto :'placeholder',  
      fields: {
        Date: {
          label: 'Thời gian phát hiện',
   
        },
        City: {
          label: 'Tỉnh thành',
          help :'Bắt buộc',
          placeholder: 'Nhập thành phố , ví dụ : Sóc Trăng'
        },
        District: {
            label: 'Quận / huyện',
            help :'Bắt buộc',
            placeholder: 'Nhập Quận / huyện , ví dụ : Mỹ xuyên'
          },
        Ward: {
            label: 'Phường / xã',
            help :'Bắt buộc',
            placeholder: 'Nhập Phường / Xã , ví dụ : Phường 3'
          },
        // RememberMe: {
      
        // },
        gender: {
          label:'Giới tính', 
          order: 'asc',
          isCollapsed: false,
        },
    }
    };

    return (
      <SafeAreaView style={styles.container}>   
      <ScrollView>
      <View>
        <Form
          style = {{marginLeft:12}}
          ref='personForm'
          type={PersonModel}
          options={options}
          value={this.state.value}
          //   onChange={{}}
        />
     
        <Text style={styles.text}>Nội Dung phản ánh</Text>
          {this.renderFlatList(this.state.products)}
        <Text style={styles.text}>Nội dung phản ánh khác</Text>
        <TextInput  
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={''}/>
        <TouchableOpacity style={styles.button} onPress={this.submitForm}>
          <Text style={styles.buttonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: 50,
    
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'left',
    marginTop: 10,
    fontSize: 20
},
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    marginTop : 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  card: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Complain;