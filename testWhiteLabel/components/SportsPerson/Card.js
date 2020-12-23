import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

import AppText from '../common/AppText';
import colors from '../../Theme/colors';
import TextSize from '../common/TextSize';

const Card = ({
  tournament,
  total_matches,
  average_score,
  average_wickets,
  club,
  total_goals,
}) => {
  return (
    <Animatable.View
      animation="fadeInUpBig"
      style={[styles.container, {height: club ? 110 : 100}]}>
      <View style={styles.container2}>
        <AppText styleText={styles.subHeading}>{tournament}</AppText>
      </View>
      {average_score && (
        <View style={styles.container3}>
          <AppText styleText={styles.subHeading2}>Matches</AppText>
          <AppText styleText={styles.subHeading2}>Avg. Score</AppText>
          <AppText styleText={styles.subHeading2}>Avg. Wickets</AppText>
        </View>
      )}
      {average_score && (
        <View style={styles.container3}>
          <AppText styleText={styles.values}>{total_matches}</AppText>
          <AppText styleText={styles.values}>{average_score}</AppText>
          <AppText styleText={styles.values}>{average_wickets}</AppText>
        </View>
      )}
      {club && (
        <View style={styles.container3}>
          <AppText styleText={styles.club}>{club}</AppText>
        </View>
      )}
      {total_goals && (
        <View style={styles.container3}>
          <AppText styleText={styles.subHeading2}>Matches</AppText>
          <AppText styleText={styles.subHeading2}>Goals</AppText>
        </View>
      )}
      {total_goals && (
        <View style={styles.container3}>
          <AppText styleText={styles.values}>{total_matches}</AppText>
          <AppText styleText={styles.values}>{total_goals}</AppText>
        </View>
      )}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    width: 300,
    alignSelf: 'center',
    margin: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    elevation: 10,
  },
  container2: {
    flexDirection: 'row',
    padding: 10,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  club: {
    color: colors.primary,
    fontSize: TextSize.SubSubHeading,
    textTransform: 'uppercase',
  },
  values: {
    fontSize: TextSize.NormalText,
    color: colors.primary,
  },
  subHeading: {
    fontSize: TextSize.SubHeading,
    color: colors.primary,
  },
  subHeading2: {
    fontSize: TextSize.SubSubHeading,
    color: colors.black,
  },
});

export default Card;
