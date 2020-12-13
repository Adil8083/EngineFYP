import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import FanFeedScreen from '../screens/FanFeed';
import {SCREENS} from '../constants/SCREENS';

const Stack = createStackNavigator();
const TabNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.Home}>
      <Stack.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({ size, color }) => (
        //     <MaterialCommunityIcons name="home" size={size} color={color} />
        //   ),
        // }}
      />
      <Stack.Screen name={SCREENS.Profile} component={ProfileScreen} />
      <Stack.Screen name={SCREENS.FanFeed} component={FanFeedScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigation;
