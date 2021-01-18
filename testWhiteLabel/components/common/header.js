import React from 'react';
import {View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import TabNavigation from '../../Navigations/TabNavigation';
import Colors from '../../Theme/colors';
import AppText from './AppText';
import data from '../../Data.json';
import TextSize from './TextSize';

const header = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        hidden={false}
        backgroundColor={Colors.primary}
        translucent={false}
      />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{width: '10%', alignItems: 'center'}}>
            <Feather name="menu" size={20} color={Colors.secondary} />
          </TouchableOpacity>
          <View style={{width: '78%', alignItems: 'center'}}>
            <AppText styleText={{fontSize: TextSize.Heading}}>
              {data.AppName}
            </AppText>
          </View>
        </View>
      </View>
      <TabNavigation />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingLeft: 20,
    paddingBottom: 5,
    backgroundColor: Colors.primary,
  },
});

export default header;
