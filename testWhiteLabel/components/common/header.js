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

const header = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={20} />
        </TouchableOpacity>
      </View>
      <TabNavigation />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default header;
