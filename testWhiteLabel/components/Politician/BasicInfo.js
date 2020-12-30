import React from 'react';
import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

import colors from '../../Theme/colors';
import AppText from '../common/AppText';
import TextSize from '../common/TextSize';
const Data = require('../../Data.json');
const BasicInfo = () => {
  const [disctrict, setDisctrict] = useState();
  const [area, setArea] = useState();
  const [party, setParty] = useState();
  const [position, setPosition] = useState();
  useEffect(() => {
    Data.politicianInfo[0].district &&
      setDisctrict(Data.politicianInfo[0].district);
    Data.politicianInfo[0].area && setArea(Data.politicianInfo[0].area);
    Data.politicianInfo[0].party && setParty(Data.politicianInfo[0].party);
    Data.politicianInfo[0].position &&
      setPosition(Data.politicianInfo[0].position);
  }, []);
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={{flexDirection: 'row'}}>
        <AppText styleText={styles.heading}>District:</AppText>
        <AppText styleText={styles.text}>{disctrict}</AppText>
      </Animatable.View>
      <Animatable.View
        animation="fadeInLeft"
        style={{flexDirection: 'row', marginTop: 10}}>
        <AppText styleText={styles.heading}>Area:</AppText>
        <AppText styleText={styles.text}>{area}</AppText>
      </Animatable.View>
      <Animatable.View
        animation="fadeInLeft"
        style={{flexDirection: 'row', marginTop: 10}}>
        <AppText styleText={styles.heading}>Party:</AppText>
        <AppText styleText={styles.text}>{party}</AppText>
      </Animatable.View>
      <Animatable.View
        animation="fadeInLeft"
        style={{flexDirection: 'row', marginTop: 10}}>
        <AppText styleText={styles.heading}>Position:</AppText>
        <AppText styleText={styles.text}>{position}</AppText>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screenColor,
    elevation: 10,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  heading: {
    color: colors.secandaryText,
    fontWeight: 'bold',
    fontSize: TextSize.SubHeading,
  },
  text: {
    color: colors.lightGray,
    shadowColor: colors.secondary,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    fontSize: TextSize.NormalText,
    marginLeft: 10,
    marginTop: 1,
  },
});
export default BasicInfo;
