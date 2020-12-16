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
const header = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={20} color={Colors.TextColor} />
        </TouchableOpacity>
      </View>
      <TabNavigation />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingBottom: 5,
    backgroundColor: Colors.GradienStartRed,
  },
});

export default header;
