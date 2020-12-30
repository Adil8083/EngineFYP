import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../constants/SCREENS';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Login}>
      <Stack.Screen name={SCREENS.Login} component={Login} />
      <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
