import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import colors from './Theme/colors';
import AppButton from './components/common/AppButton';
import TextInputComponent from './components/common/TextInputComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width: '90%'}}>
        <TextInputComponent placeholder="Enter Degree/Diploma" />
        <AppButton
          title="test"
          onPress={() => {
            console.log('hello button');
          }}
          styleButton={{marginTop: 20}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
});
