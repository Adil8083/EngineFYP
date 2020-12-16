import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import AppView from '../components/common/AppView';
import {SCREENS} from '../constants/SCREENS';

const Home = ({navigation}) => {
  return (
    <AppView>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 17}}>Home</Text>
      </View>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
