import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

import AppText from '../common/AppText';
import colors from '../../Theme/colors';
import TextSize from '../common/TextSize';
import {color} from 'react-native-reanimated';

const Details = ({sportsInfo}) => {
  const [info, setInfo] = useState(sportsInfo[0]);

  return (
    <Animatable.View style={styles.main} animation="fadeInUpBig">
      <View style={styles.container}>
        <AppText styleText={styles.text}>Sport</AppText>
        <AppText styleText={styles.value}>{info.sport}</AppText>
      </View>
      <View style={styles.container}>
        <AppText styleText={styles.text}>Team</AppText>
        <AppText styleText={styles.value}>{info.teamName}</AppText>
      </View>
      <View style={styles.container}>
        <AppText styleText={styles.text}>Postion in Team</AppText>
        <AppText styleText={styles.value}>{info.position_in_team}</AppText>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  main: {
    backgroundColor: colors.grey,
    flex: 1,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
  },
  text: {
    color: colors.black,
    fontSize: TextSize.SubHeading,
    marginLeft: 10,
  },
  value: {
    color: colors.primary,
    fontSize: TextSize.SubSubHeading,
    marginRight: 20,
    textAlign: 'justify',
  },
});

export default Details;
