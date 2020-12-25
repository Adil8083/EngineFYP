import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './Navigations/DrawerNavigation';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
export default function App() {
  return (
    // <SignUp />
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
