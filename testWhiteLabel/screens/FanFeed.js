import React from 'react';
import {Text, View, Button} from 'react-native';
import AppView from '../components/common/AppView';
import {SCREENS} from '../constants/SCREENS';

const FanFeed = ({navigation}) => {
  return (
    <AppView>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 17}}>FanFeed</Text>
      </View>
    </AppView>
  );
};

export default FanFeed;
