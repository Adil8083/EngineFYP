import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import StackNavigation from './StackNavigation';
import ProfileScreen from '../screens/Profile';
import FanFeedScreen from '../screens/FanFeed';
import ActorMain from '../screens/Actor/ActorMain';
import Colors from '../Theme/colors';
import data from '../Data.json';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.GradienStartRed,
        keyboardHidesTabBar: true,
        tabStyle: {paddingVertical: 3},
        labelStyle: {fontSize: 13},
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FanFeed"
        component={FanFeedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="users" size={22} color={color} />
          ),
        }}
      />
      {data.Category === 'Actor' && (
        <Tab.Screen
          name={data.name}
          component={ActorMain}
          options={{
            tabBarIcon: ({size, color}) => (
              <Feather name="users" size={size} color={color} />
            ),
          }}
        />
      )}
      {data.Category === 'Singer' && (
        <Tab.Screen
          name="Singer"
          component={ActorMain}
          options={{
            tabBarIcon: ({size, color}) => (
              <Feather name="users" size={size} color={color} />
            ),
          }}
        />
      )}
      {data.Category === 'SportsPerson' && (
        <Tab.Screen
          name={data.name}
          component={ActorMain}
          options={{
            tabBarIcon: ({size, color}) => (
              <Feather name="users" size={size} color={color} />
            ),
          }}
        />
      )}
      {data.Category === 'Politician' && (
        <Tab.Screen
          name={data.name}
          component={ActorMain}
          options={{
            tabBarIcon: ({size, color}) => (
              <Feather name="users" size={size} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default TabNavigation;
