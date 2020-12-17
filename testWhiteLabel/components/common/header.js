import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import TabNavigation from '../../Navigations/TabNavigation';
import Colors from '../../Theme/colors';
import AppText from './AppText';
import data from '../../Data.json';
import TextSize from './TextSize';
import {color} from 'react-native-reanimated';

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
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={20} color={Colors.secondary} />
          <View style={{width: '85%', alignItems: 'center'}}>
            <AppText styleText={{fontSize: TextSize.Heading}}>
              {data.AppName}
            </AppText>
          </View>
        </TouchableOpacity>
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
