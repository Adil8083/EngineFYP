import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import Header from '../components/common/header';
import ActorMain from '../screens/Actor/ActorMain';
import DrawerContent from '../screens/DrawerContent';
import Home from '../screens/Home';
import ActorBio from '../screens/Actor/ActorBio';
import ConcertDetails from '../screens/Singer/ConcertDetails';
import Gallery from '../screens/Singer/Gallery';
import MyPost from '../screens/MyPost';
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
        <Drawer.Screen name="Concert" component={ConcertDetails} />
        <Drawer.Screen name="Gallery" component={Gallery} />
        <Drawer.Screen name="MyPost" component={MyPost} />
        <Drawer.Screen name="ActorBio" component={ActorBio} />
      </Drawer.Navigator>
    </>
  );
}
