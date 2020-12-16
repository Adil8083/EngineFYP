import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../Theme/colors';
export default function AppView({children}) {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          flex: 1,
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
