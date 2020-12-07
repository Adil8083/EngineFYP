import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AppView from '../../components/common/AppView';
export default function Test() {
  const [state, setState] = useState();
  return (
    <AppView>
      <Text style={{fontSize: 50}}>hello form test</Text>
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});
