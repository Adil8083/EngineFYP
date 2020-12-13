import React from 'react';
import {Text, View, Button} from 'react-native';
import {SCREENS} from '../constants/SCREENS';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
      <Button
        title="FanFeed"
        onPress={() => navigation.navigate(SCREENS.FanFeed)}
      />
    </View>
  );
};

export default Profile;
