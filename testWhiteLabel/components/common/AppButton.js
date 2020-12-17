import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../../Theme/colors';
import TextSize from './TextSize';
function AppButton({styleButton, onPress, title}) {
  return (
    <TouchableOpacity
      style={[
        {
          width: 230,
          alignSelf: 'center',
          padding: 12,
          borderRadius: 15,
          backgroundColor: colors.primary,
        },
        {...styleButton},
      ]}
      onPress={onPress}>
      <Text
        style={{
          backgroundColor: 'transparent',
          fontSize: TextSize.NormalText,
          color: colors.white,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
