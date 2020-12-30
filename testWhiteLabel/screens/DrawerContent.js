import React, {useContext} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import data from '../Data.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../Theme/colors';
import {AuthContext} from '../components/common/context';
export default function DrawerContent(props) {
  const {signOut} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: 15}}
              onPress={() => props.navigation.navigate('Profile')}>
              <Image
                style={{marginTop: 4, width: 50, height: 50, borderRadius: 25}}
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
          icon={({size}) => (
            <Icon name="exit-to-app" color={colors.secondary} size={size} />
          )}
          label="Sign Out"
          onPress={() => signOut()}
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
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
