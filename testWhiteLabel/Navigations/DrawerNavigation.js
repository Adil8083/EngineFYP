import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, Dimensions, View, StatusBar} from 'react-native';
import Header from '../components/common/header';
import colors from '../Theme/colors';
<<<<<<< HEAD
import DrawerContent from './DrawerContent';
import Profile from '../screens/Profile';
=======
import ActorMain from '../screens/Actor/ActorMain';
import DrawerContent from '../screens/DrawerContent';
import Home from '../screens/Home';
>>>>>>> 0189175ba3cae64cfdee51a8a624d21c3e65713e
const Drawer = createDrawerNavigator();

function Logout() {
  console.log('Logout');
}
export default function DrawerNavigation() {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
<<<<<<< HEAD
        initialRouteName="Header"
        drawerStyle={{backgroundColor: colors.primary, width: 240}}>
        <Drawer.Screen name="Header" component={Header} />
        <Drawer.Screen name="Logout" component={Logout} />
        <Drawer.Screen name="Profile" component={Profile} />
=======
        initialRouteName="Header">
        <Drawer.Screen name="Header" component={Header} />
        <Drawer.Screen name="Logout" component={Logout} />
        <Drawer.Screen name="Actor" component={ActorMain} />
>>>>>>> 0189175ba3cae64cfdee51a8a624d21c3e65713e
      </Drawer.Navigator>
    </>
  );
}
