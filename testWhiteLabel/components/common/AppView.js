import React from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../Theme/colors';
export default function AppView({children, ViewStyle}) {
  return (
    <View style={styles.container}>
      <View
        style={[
          {
            width: '90%',
            flex: 1,
            marginTop: 10,
          },
          {...ViewStyle},
        ]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.screenColor,
  },
});
