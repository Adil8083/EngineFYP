import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppText from '../../components/common/AppText';
import data from '../../Data.json';
import colors from '../../Theme/colors';
import * as Animatable from 'react-native-animatable';
import AppView from '../../components/common/AppView';
import TextSize from '../../components/common/TextSize';
import Bio from '../../components/Actor/Bio';
import Hobbies from '../../components/Actor/Hobbies';

export default function ActorBio() {
  // const [openMovies, setOpenMovies] = useState(true);
  // const [openEdu, setOpenEdu] = useState(true);
  return (
    <AppView ViewStyle={{}}>
      <View
        style={{
          height: 40,
          backgroundColor: colors.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          // flexDirection: 'row',
          padding: 10,
          marginTop: 10,
        }}>
        <AppText
          styleText={{
            color: colors.TextColor,
            fontWeight: '100',
            fontSize: TextSize.SubHeading,
          }}>
          PERSONAL BIO
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
        <Bio />
      </Animatable.View>
      <View
        style={{
          height: 40,
          backgroundColor: colors.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          // flexDirection: 'row',
          padding: 10,
          marginTop: 10,
        }}>
        <AppText
          styleText={{
            color: colors.TextColor,
            fontWeight: '100',
            fontSize: TextSize.SubHeading,
          }}>
          HOBBIES
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
        <Hobbies hobbies={data.hobbies} />
      </Animatable.View>
    </AppView>
  );
}

const styles = StyleSheet.create({});
