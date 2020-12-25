import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

import AppText from '../../components/common/AppText';
import AppView from '../../components/common/AppView';
import colors from '../../Theme/colors';
import Data from '../../Data.json';
import Statistics from '../../components/SportsPerson/Statistics';
import TextSize from '../../components/common/TextSize';
import Details from '../../components/SportsPerson/Details';

const SportsMainScreen = () => {
  const [showStats, setShowStats] = useState(true);
  const [showDetails, setShowDetails] = useState(true);

  return (
    <AppView>
      <View style={styles.container}>
        <AppText styleText={styles.title}>Details</AppText>
        <TouchableOpacity
          onPress={() => {
            if (showDetails) {
              setShowDetails(false);
            } else {
              setShowDetails(true);
            }
          }}>
          {!showDetails && (
            <MaterialCommunityIcons
              name="plus-circle"
              size={24}
              color={colors.white}
            />
          )}
          {showDetails && (
            <MaterialCommunityIcons
              name="minus-circle"
              size={24}
              color={colors.white}
            />
          )}
        </TouchableOpacity>
      </View>
      {showDetails && (
        <Animatable.View
          animation="slideInDown"
          style={[styles.animationView, {height: 100}]}>
          <Details sportsInfo={Data.sportInfo} />
        </Animatable.View>
      )}
      <View style={styles.container}>
        <AppText styleText={styles.title}>Statistics</AppText>
        <TouchableOpacity
          onPress={() => {
            if (showStats) {
              setShowStats(false);
            } else {
              setShowStats(true);
            }
          }}>
          {!showStats && (
            <MaterialCommunityIcons
              name="plus-circle"
              size={24}
              color={colors.white}
            />
          )}
          {showStats && (
            <MaterialCommunityIcons
              name="minus-circle"
              size={24}
              color={colors.white}
            />
          )}
        </TouchableOpacity>
      </View>
      {showStats && (
        <Animatable.View
          animation="slideInDown"
          style={[styles.animationView, {height: '60%'}]}>
          <Statistics sportInfo={Data.sportInfo} statistics={Data.statistics} />
        </Animatable.View>
      )}
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
  },
  title: {
    color: colors.TextColor,
    fontWeight: 'bold',
    fontSize: TextSize.SubHeading,
  },
  animationView: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    elevation: 20,
  },
});

export default SportsMainScreen;
