import * as React from 'react';
import { View ,StyleSheet,Text} from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioGender = () => {
  const [checked, setChecked] = React.useState('3');

  return (
    <View style={styles.container}>
      <RadioButton
        style={{flex:1}}
        value="0"
        status={ checked === '0' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('0')}
      />
      <Text style={{marginTop:8,marginRight:10}}>Nam</Text>
      <RadioButton
        style={{flex:1}}
        value="1"
        status={ checked === '1' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('1')}
      />
      <Text style={{marginTop:8,marginRight:10}}>Nữ</Text>
      <RadioButton
        style={{flex:1}}
        value="1"
        status={ checked === '2' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('2')}
      />
      <Text style={{marginTop:8}}>Khác</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height:50,
    width:150,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:8
  },
});

export default RadioGender;
