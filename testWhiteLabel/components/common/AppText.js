import React from 'react';
import {Text, StyleSheet} from 'react-native';

import colors from '../../Theme/colors';
import TextSizes from './TextSize';

function AppText({children, styleText}) {
  return <Text style={[styles.text, {...styleText}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.TextColor,
    fontSize: TextSizes.NormalText,
  },
});

export default AppText;
