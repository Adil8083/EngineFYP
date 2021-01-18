import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StackNavigation from './StackNavigation';
import ProfileScreen from '../screens/Profile';
import FanFeedScreen from '../screens/FanFeed';
import ActorMain from '../screens/Actor/ActorMain';
import Colors from '../Theme/colors';
import data from '../Data.json';
import Music from '../screens/Singer/Music';
import SportsScreen from '../screens/SportsPerson/SportsMainScreen';
import PoliticianScreen from '../screens/Politician/politicianBasicInfo';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({route}) => ({
        tabBarLabel: ({focused, color, size}) => {
          return undefined;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.secondary,
        inactiveTintColor: 'white',
        allowFontScaling: false,
        inactiveBackgroundColor: Colors.screenColor,
        activeBackgroundColor: 'white',
        keyboardHidesTabBar: true,
        tabStyle: {backgroundColor: Colors.primary, borderWidth: 0},
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AntDesign name="home" size={focused ? 26 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Feather name="user" size={focused ? 26 : 20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FanFeed"
        component={FanFeedScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={'newspaper-variant-outline'}
              size={focused ? 26 : 20}
              color={color}
            />
          ),
        }}
      />
      {data.Category === 'Actor' && (
        <Tab.Screen
          name="Actor"
          component={ActorMain}
          options={{
            tabBarIcon: ({size, color, focused}) => (
              <MaterialCommunityIcons
                name="movie-outline"
                size={focused ? 26 : 20}
                color={color}
              />
            ),
          }}
        />
      )}
      {data.Category === 'Singer' && (
        <Tab.Screen
          name="Singer"
          component={Music}
          options={{
            tabBarIcon: ({size, color, focused}) => (
              <Feather name="music" size={focused ? 26 : 20} color={color} />
            ),
          }}
        />
      )}
      {data.Category === 'SportsPerson' && (
        <Tab.Screen
          name={data.name}
          component={SportsScreen}
          options={{
            tabBarIcon: ({size, color, focused}) => (
              <Ionicons
                name="ios-tennisball-outline"
                size={focused ? 26 : 22}
                color={color}
              />
            ),
          }}
        />
      )}
      {data.Category === 'Politician' && (
        <Tab.Screen
          name={data.name}
          component={PoliticianScreen}
          options={{
            tabBarIcon: ({size, color, focused}) => (
              <MaterialCommunityIcons
                name="account-details-outline"
                size={focused ? 26 : 20}
                color={color}
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default TabNavigation;
