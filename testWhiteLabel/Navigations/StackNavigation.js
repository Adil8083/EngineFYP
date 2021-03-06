import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import FanFeedScreen from '../screens/FanFeed';
import ActorMain from '../screens/Actor/ActorMain';
import ActorBio from '../screens/Actor/ActorBio';
import {SCREENS} from '../constants/SCREENS';

const Stack = createStackNavigator();
const TabNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.Home}>
      <Stack.Screen name={SCREENS.Profile} component={ProfileScreen} />
      <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
      <Stack.Screen name={SCREENS.FanFeed} component={FanFeedScreen} />
      <Stack.Screen name={SCREENS.ActorMain} component={ActorMain} />
      <Stack.Screen name={SCREENS.ActorBio} component={ActorBio} />
    </Stack.Navigator>
  );
};

export default TabNavigation;
