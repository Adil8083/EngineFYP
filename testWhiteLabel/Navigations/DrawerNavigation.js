import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, Dimensions, View, StatusBar} from 'react-native';
import Header from '../components/common/header';
import colors from '../Theme/colors';
const Drawer = createDrawerNavigator();

function Logout() {
  return (
    <Text style={{justifyContent: 'center', alignSelf: 'center'}}>Logout</Text>
  );
}
export default function DrawerNavigation() {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Header"
        drawerStyle={{backgroundColor: colors.primary}}>
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{drawerLabel: 'Logout'}}
        />
        <Drawer.Screen
          name="Header"
          component={Header}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
