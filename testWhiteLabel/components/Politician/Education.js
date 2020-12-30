import React from 'react';
import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

import colors from '../../Theme/colors';
import AppText from '../common/AppText';
import TextSize from '../common/TextSize';
const Data = require('../../Data.json');
const Education = () => {
  const [institute, setInstitute] = useState();
  const [degree, setDegree] = useState();
  const [year, setYear] = useState();
  useEffect(() => {
    Data.PoliticianEducation[0].institute &&
      setInstitute(Data.PoliticianEducation[0].institute);
    Data.PoliticianEducation[0].degree &&
      setDegree(Data.PoliticianEducation[0].degree);
    Data.PoliticianEducation[0].year &&
      setYear(Data.PoliticianEducation[0].year);
  }, []);
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={{flexDirection: 'row'}}>
        <AppText styleText={styles.heading}>Institute:</AppText>
        <AppText styleText={styles.text}>{institute}</AppText>
      </Animatable.View>
      <Animatable.View
        animation="fadeInLeft"
        style={{flexDirection: 'row', marginTop: 10}}>
        <AppText styleText={styles.heading}>Degree:</AppText>
        <AppText styleText={styles.text}>{degree}</AppText>
      </Animatable.View>
      <Animatable.View
        animation="fadeInLeft"
        style={{flexDirection: 'row', marginTop: 10}}>
        <AppText styleText={styles.heading}>Year:</AppText>
        <AppText styleText={styles.text}>{year}</AppText>
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
  },
  heading: {
    color: colors.secandaryText,
    fontFamily: 'Jost-Bold',
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
export default Education;
