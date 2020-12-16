import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../Theme/colors';
import LinearGradient from 'react-native-linear-gradient';
export default function AppView({children}) {
  const [state, setState] = useState();
  return (
    <LinearGradient
      colors={[colors.GradienStartRed, colors.lightRed, colors.GradienEndRed]}
      style={styles.linearGradient}
      start={{x: 0.25, y: 0.75}}>
      <View style={{width: '90%'}}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
});
