import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {SCREENS} from '../constants/SCREENS';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate(SCREENS.Profile)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
