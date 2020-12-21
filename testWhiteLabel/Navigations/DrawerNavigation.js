import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import Header from '../components/common/header';
import ActorMain from '../screens/Actor/ActorMain';
import DrawerContent from '../screens/DrawerContent';
import Home from '../screens/Home';
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
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Header">
        <Drawer.Screen name="Header" component={Header} />
        <Drawer.Screen name="Logout" component={Logout} />
        <Drawer.Screen name="Actor" component={ActorMain} />
      </Drawer.Navigator>
    </>
  );
}
