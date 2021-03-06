import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppText from '../../components/common/AppText';
import data from '../../Data.json';
import colors from '../../Theme/colors';
import * as Animatable from 'react-native-animatable';
import PosterComponent from '../../components/Actor/PosterComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppView from '../../components/common/AppView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Education from '../../components/Actor/Education';
import TextSize from '../../components/common/TextSize';

export default function ActorMain() {
  const [openMovies, setOpenMovies] = useState(true);
  const [openEdu, setOpenEdu] = useState(true);
  return (
    <AppView ViewStyle={{}}>
      <View
        style={{
          height: 40,
          backgroundColor: colors.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,

          alignItems: 'center',
          padding: 10,
          marginTop: 25,
        }}>
        <AppText
          styleText={{
            color: colors.TextColor,
            fontWeight: '100',
            fontSize: TextSize.SubHeading,
          }}>
          MOVIES
        </AppText>
      </View>
      <Animatable.View
        animation="slideInDown"
        style={{
          backgroundColor: colors.white,
          height: 250,
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          justifyContent: 'center',
          marginBottom: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,

          elevation: 20,
        }}>
        <PosterComponent imageUris={data.poster} />
      </Animatable.View>

      <View
        style={{
          height: 40,
          backgroundColor: colors.primary,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,

          padding: 10,
          alignItems: 'center',

          marginTop: 8,
        }}>
        <AppText
          styleText={{
            color: colors.TextColor,
            fontWeight: '100',
            fontSize: TextSize.SubHeading,
          }}>
          EDUCATION
        </AppText>
      </View>

      <Animatable.View
        animation="slideInDown"
        style={{
          backgroundColor: colors.white,
          height: 200,
          borderRadius: 10,
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,

          elevation: 20,
        }}>
        <Education edu={data.ActorEducation} />
      </Animatable.View>
    </AppView>
  );
}

const styles = StyleSheet.create({});
