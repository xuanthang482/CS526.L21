import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

const Check = () => {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainerdark}>
        <Text style={styles.label}>Có trường hợp nghi ngờ mắc bệnh </Text>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Có trường hợp trở về từ vùng dịch</Text>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.checkboxContainerdark}>
        <Text style={styles.label}>Có trường hợp nghi ngờ mắc bệnh hoặc có biển hiện bệnh</Text>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Có trường hợp nghi ngờ mắc bệnh hoặc có biển hiện bệnh</Text>
        <CheckBox
          value={isSelected4}
          onValueChange={setSelection4}
          style={styles.checkbox}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'green',
    width:360,
  },
  checkboxContainer:{
    flexDirection: "row",
    width:360,
    justifyContent:'space-between',
    backgroundColor:'#E8E8E8'
  },
  checkboxContainerdark: {
    flexDirection: "row",
    width:360,
    justifyContent:'space-between',
    backgroundColor:'#E8E8E8'
  },
  checkbox: {
  },
  label: {
    margin: 8,
    fontSize:12
  },
});

export default Check;