import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import GalleryModule from '../../components/Singer/GalleryModule';
import AntDesign from 'react-native-vector-icons/AntDesign';
const data = require('../../Data.json');
import Colors from '../../Theme/colors';
import AppText from '../../components/common/AppText';
import TextSize from '../../components/common/TextSize';
const ConcertDetails = ({navigation: {goBack}}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{width: '10%', alignItems: 'center'}}
          onPress={() => goBack()}>
          <AntDesign name="arrowleft" size={23} color={Colors.secondary} />
        </TouchableOpacity>
        <View style={{width: '80%', alignItems: 'center'}}>
          <AppText styleText={{fontSize: TextSize.Heading}}>
            {data.AppName}
          </AppText>
        </View>
      </View>
      <GalleryModule />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});

export default ConcertDetails;
