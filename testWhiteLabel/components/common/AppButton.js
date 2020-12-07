import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../../Theme/colors';
import TextSize from './TextSize';
function AppButton({styleButton, onPress, title}) {
  return (
    <TouchableOpacity
      style={[
        {
          width: 200,
          alignSelf: 'center',
          paddingTop: 20,
          padding: 15,
          borderRadius: 50,
          backgroundColor: colors.white,
        },
        {...styleButton},
      ]}
      onPress={onPress}>
      <Text
        style={{
          backgroundColor: 'transparent',
          fontSize: TextSize.NormalText,
          color: colors.darkRed,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
