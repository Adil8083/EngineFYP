import React from 'react';
import {Text, View, Button} from 'react-native';
import {SCREENS} from '../constants/SCREENS';

const FanFeed = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>FanFeed</Text>
        <Button
          title="Home"
          onPress={() => navigation.navigate(SCREENS.Home)}
        />
      </View>
    </>
  );
};

export default FanFeed;
