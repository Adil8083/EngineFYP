import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, Dimensions, View, StatusBar} from 'react-native';
import Header from '../components/common/header';
import colors from '../Theme/colors';
import DrawerContent from './DrawerContent';
import Profile from '../screens/Profile';
const Drawer = createDrawerNavigator();

function Logout() {
  console.log('Logout');
}
export default function DrawerNavigation() {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Header"
        drawerStyle={{backgroundColor: colors.primary, width: 240}}>
        <Drawer.Screen name="Header" component={Header} />
        <Drawer.Screen name="Logout" component={Logout} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </>
  );
}
