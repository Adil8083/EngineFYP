import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import DropShadow from 'react-native-drop-shadow';
import Colors from '../Theme/colors';
import Feather from 'react-native-vector-icons/Feather';
const Data = require('../Data.json');
const DrawerContent = (props) => {
  const [profilePic, setProfilePic] = useState();
  const [Name, setName] = useState();

  useEffect(() => {
    setProfilePic(Data.profilePic);
    setName(Data.name);
  }, []);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              alignItems: 'center',
              marginTop: 20,
            }}
            onPress={() => props.navigation.navigate('Profile')}>
            <DropShadow
              style={{
                shadowColor: Colors.white,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.3,
                shadowRadius: 5,
              }}>
              <Image
                source={{
                  uri:
                    'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
                }}
                style={styles.profileImg}
              />
            </DropShadow>
            <Text style={styles.Name}>{Name}</Text>
          </TouchableOpacity>
          <DrawerItem
            icon={({size}) => (
              <Feather name="log-out" color={Colors.white} size={20} />
            )}
            label="Sign out"
            labelStyle={{color: Colors.white}}
            onPress={() => props.navigation.navigate('Logout')}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  Name: {fontSize: 18, fontWeight: 'bold', color: Colors.white, marginLeft: 20},
});
export default DrawerContent;
