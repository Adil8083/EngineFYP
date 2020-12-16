import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/common/AppButton';
// import data from '../../Data.json';

import AppView from '../../components/common/AppView';
export default function ActorMain() {
  return (
    <AppView>
      <Text style={{fontSize: 22}}>hello form Actor</Text>
      {/* <AppButton title="test" onPress={() => console.log(data.Category)} /> */}
    </AppView>
  );
}

const styles = StyleSheet.create({});
