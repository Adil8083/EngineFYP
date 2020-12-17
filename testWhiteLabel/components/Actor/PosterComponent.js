import React from 'react';
import {View, Text, Image} from 'react-native';
import AppText from '../common/AppText';
import colors from '../../Theme/colors';
import DropShadow from 'react-native-drop-shadow';

export default function PosterComponent({imageUris}) {
  return (
    <View
      style={{
        height: 150,
        width: 150,
        borderRadius: 10,
        marginLeft: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          // shadowRadius: 3.84,

          elevation: 20,
        }}>
        <Image
          style={{
            height: 140,
            width: 130,
            borderRadius: 10,
          }}
          source={require('../../assets/user.png')}
        />
        <AppText
          styleText={{
            fontWeight: 'bold',
            color: colors.black,
            marginTop: 10,
            alignSelf: 'center',
          }}>
          Joker
        </AppText>
      </DropShadow>
    </View>
  );
}
