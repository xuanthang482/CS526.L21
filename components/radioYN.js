import * as React from 'react';
import { View ,StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioYN = () => {
  const [checked, setChecked] = React.useState('2');

  return (
    <View style={styles.container}>
      <RadioButton
        style={{flex:1}}
        value="0"
        status={ checked === '0' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('0')}
      />
      <RadioButton
        style={{flex:1}}
        value="1"
        status={ checked === '1' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('1')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height:30,
    width:90,
    flexDirection:'row',
    justifyContent:'space-between',
  },
});

export default RadioYN;
