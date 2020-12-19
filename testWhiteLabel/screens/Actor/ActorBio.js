import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppText from '../../components/common/AppText';
import data from '../../Data.json';
import colors from '../../Theme/colors';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppView from '../../components/common/AppView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextSize from '../../components/common/TextSize';

export default function ActorBio() {
  const [openMovies, setOpenMovies] = useState(true);
  const [openEdu, setOpenEdu] = useState(true);
  return (
    <AppView ViewStyle={{}}>
      <AppText styleText={{color: colors.secandaryText}}>
        {data.hobbies}
      </AppText>
      <AppText styleText={{color: colors.secandaryText}}>{data.Height}</AppText>
      <AppText styleText={{color: colors.secandaryText}}>
        {data.HairColor}
      </AppText>
      <AppText styleText={{color: colors.secandaryText}}>{data.Weight}</AppText>
      <AppText styleText={{color: colors.secandaryText}}>
        {data.EyeColor}
      </AppText>
    </AppView>
  );
}

const styles = StyleSheet.create({});
