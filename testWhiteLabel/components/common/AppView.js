import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../Theme/colors';
export default function AppView({children}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          flex: 1,
          marginTop: 10,
        }}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: colors.screenColor,
  },
});
