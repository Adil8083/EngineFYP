import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import data from '../Data.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../Theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
const concertImage = require('../assets/concert.png');
export default function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: 15}}
              onPress={() => props.navigation.navigate('Profile')}>
              <Avatar.Image
                source={{
                  uri: data.profilePic,
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{data.name}</Title>
                <Caption style={styles.caption}>{data.email}</Caption>
              </View>
            </TouchableOpacity>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            {data.Category === 'Singer' && (
              <>
                <DrawerItem
                  icon={({color, size}) => (
                    <Image
                      source={require('../assets/concert.png')}
                      style={{width: 24, height: 24, borderRadius: 12}}
                    />
                  )}
                  label="Concerts"
                  onPress={() => {
                    props.navigation.navigate('Concert');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Ionicon
                      name="image-outline"
                      color={colors.primary}
                      size={size}
                    />
                  )}
                  label="Gallery"
                  onPress={() => {
                    props.navigation.navigate('Gallery');
                  }}
                />
              </>
            )}
            {data.Category === 'Actor' && (
              <>
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                      name="information-outline"
                      color={colors.primary}
                      size={size}
                    />
                  )}
                  label="ActorBio"
                  onPress={() => {
                    props.navigation.navigate('ActorBio');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Ionicon
                      name="image-outline"
                      color={colors.primary}
                      size={size}
                    />
                  )}
                  label="Gallery"
                  onPress={() => {
                    props.navigation.navigate('Gallery');
                  }}
                />
              </>
            )}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={colors.secondary} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            console.log('sign out');
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
