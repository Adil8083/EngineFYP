import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import TextSize from './TextSize';
import colors from '../../Theme/colors';

function TextInputComponent({
  placeholder,
  containerStyle,
  height = 35,
  ...otherAttributes
}) {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: 'center',
          paddingLeft: 3,
          marginTop: 10,
          height: height,
        },
        containerStyle && containerStyle,
      ]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        {...otherAttributes}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 30,
    borderBottomWidth: 2,
    width: '70%',
    borderColor: 'white',
  },
  input: {
    paddingTop: 3,
    paddingLeft: 10,
    fontSize: TextSize.NormalText,
    color: colors.white,
  },
});

export default TextInputComponent;
