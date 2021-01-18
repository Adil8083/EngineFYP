import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppText from '../../components/common/AppText';
import data from '../../Data.json';
import colors from '../../Theme/colors';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppView from '../../components/common/AppView';
import TextSize from '../../components/common/TextSize';

export default function ActorBio() {
  const [eyeColor, setEyeColor] = useState();
  const [hairColor, setHairColor] = useState();
  useEffect(() => {
    if (data.EyeColor === 'Brown Eyes') {
      setEyeColor('#38101c');
    } else if (data.EyeColor === 'Gray Eyes') {
      setEyeColor('#778899');
    } else if (data.EyeColor === 'Blue Eyes') {
      setEyeColor('#a1caf1');
    } else if (data.EyeColor === 'Hazel Eyes') {
      setEyeColor('#a5c6bb');
    } else if (data.EyeColor === 'Amber Eyes') {
      setEyeColor('#ffbf00');
    } else if (data.EyeColor === 'Green Eyes') {
      setEyeColor('#6ca580');
    }

    if (data.HairColor === 'Brown Hair') {
      setHairColor('brown');
    } else if (data.HairColor === 'Blond Hair') {
      setHairColor('#faf0be');
    } else if (data.HairColor === 'Black Hair') {
      setHairColor('black');
    } else if (data.HairColor === 'Auburn Hair') {
      setHairColor('#A52A2A');
    } else if (data.HairColor === 'Red Hair') {
      setHairColor('red');
    } else if (data.HairColor === 'Gray Hair') {
      setHairColor('grey');
    } else if (data.HairColor === 'White Hair') {
      setHairColor('#eeeded');
    }
  }, []);
  return (
    <AppView ViewStyle={{}}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          marginHorizontal: 20,
          borderBottomWidth: 0.7,
          borderColor: colors.primary,
          marginVertical: 5,
        }}>
        <AppText
          styleText={{
            color: colors.secandaryText,
            fontWeight: '100',
            textTransform: 'uppercase',
            fontSize: TextSize.NormalText,
          }}>
          {data.EyeColor}
        </AppText>
        <MaterialCommunityIcons name="eye-outline" size={28} color={eyeColor} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          marginHorizontal: 20,
          borderBottomWidth: 0.7,
          borderColor: colors.primary,
          marginVertical: 5,
        }}>
        <AppText
          styleText={{
            color: colors.secandaryText,
            fontWeight: '100',
          }}>
          {data.Height} (cm)
        </AppText>
        <MaterialCommunityIcons
          name="human-male-height"
          size={28}
          color={colors.secondary}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          marginHorizontal: 20,
          borderBottomWidth: 0.7,
          borderColor: colors.primary,
          marginVertical: 5,
        }}>
        <AppText
          styleText={{
            color: colors.secandaryText,
            fontWeight: '100',
          }}>
          {data.Weight} (kg)
        </AppText>
        <MaterialCommunityIcons
          name="weight-kilogram"
          size={28}
          color={colors.secondary}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          marginHorizontal: 20,
          borderBottomWidth: 0.7,
          borderColor: colors.primary,
          marginVertical: 5,
        }}>
        <AppText
          styleText={{
            color: colors.secandaryText,
            fontWeight: '100',
            textTransform: 'uppercase',
          }}>
          {data.HairColor}
        </AppText>
        <MaterialCommunityIcons
          name="humble-bundle"
          size={28}
          color={hairColor}
        />
      </View>
    </AppView>
  );
}

const styles = StyleSheet.create({});
