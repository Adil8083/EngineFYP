import React, {useContext, useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import AppView from '../components/common/AppView';
import {SCREENS} from '../constants/SCREENS';
import {AuthContext} from '../components/common/context';
import AsyncStorage from '@react-native-community/async-storage';
const Home = ({navigation}) => {
  const [name, setName] = useState('blah');
  const getName = async () => {
    const uname = await AsyncStorage.getItem('userName');
    setName(uname);
    // console.log(name);
  };
  getName();
  return (
    <AppView>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 17}}>Home</Text>
        <Text style={{color: 'black', fontSize: 17}}>{name}</Text>
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
