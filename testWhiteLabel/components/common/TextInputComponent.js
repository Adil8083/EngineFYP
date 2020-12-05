import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import TextSize from './TextSize';
import colors from '../../Theme/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
          paddingLeft: 10,
          marginTop: 10,
          height: height,
        },
        containerStyle && containerStyle,
      ]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.profileGradientEnd}
        {...otherAttributes}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 30,
    borderBottomWidth: 2,
    width: '70%',
    borderColor: colors.bluish,
  },
  input: {
    paddingTop: 3,
    paddingLeft: 10,
    fontSize: TextSize.NormalText,
  },
});

export default TextInputComponent;
