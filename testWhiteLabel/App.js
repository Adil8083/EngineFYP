import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './Navigations/DrawerNavigation';
import AuthNavigation from './Navigations/AuthNavigation';
import {AuthContext} from './components/common/context';
import Login from './screens/Login';
import AsyncStorage from '@react-native-community/async-storage';
import colors from './Theme/colors';
// import SignUp from './screens/SignUp';
export default function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (pervState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...pervState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...pervState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...pervState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...pervState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (userEmail, token, admin, name) => {
        const userToken = token;
        const email = userEmail;
        const isAdmin = admin;
        const username = name;
        try {
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('userName', username);
          await AsyncStorage.setItem('isAdmin', isAdmin);
          await AsyncStorage.setItem('email', email);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', id: userEmail, token: userToken});
      },
      signOut: async (navigation) => {
        navigation.closeDrawer();
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('userName');
          await AsyncStorage.removeItem('isAdmin');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  const asyncFuntion = () => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 2000);
  };

  useEffect(() => {
    asyncFuntion();
  });

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <DrawerNavigation />
        ) : (
          <AuthNavigation />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
