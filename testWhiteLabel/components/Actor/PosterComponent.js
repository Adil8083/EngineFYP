import React from 'react';
import {View, Text, Image} from 'react-native';
import AppText from '../common/AppText';
import colors from '../../Theme/colors';
import DropShadow from 'react-native-drop-shadow';
import data from '../../Data.json';

export default function PosterComponent({imageUris}) {
  return (
    <View
      style={{
        height: 200,
        width: 150,
        borderRadius: 10,
        marginLeft: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DropShadow
        style={{
          sshadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,

          elevation: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.primary,
            padding: 5,
            marginLeft: 5,
            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 170,
              width: 140,
              borderRadius: 10,
            }}
            source={{
              uri: data.poster[1].poster,
            }}
          />
        </View>
        <AppText
          styleText={{
            fontWeight: 'bold',
            color: colors.secandaryText,
            marginTop: 10,
            alignSelf: 'center',
          }}>
          {data.poster[0].name}
        </AppText>
      </DropShadow>
    </View>
  );
}
