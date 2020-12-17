import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import colors from '../../Theme/colors';
import AppText from '../common/AppText';
import TextSizes from '../../components/common/TextSize';
import {color} from 'react-native-reanimated';
export default function Education({edu}) {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: colors.screenColor,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 5,
          borderTopColor: colors.primary,
          borderBottomColor: colors.primary,
          padding: 5,
        }}>
        <AppText styleText={{fontSize: 17, color: colors.black}}>
          INSTITUTE
        </AppText>
        <AppText styleText={{fontSize: 17, color: colors.black}}>
          DEGREE
        </AppText>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {edu.map((item) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 8,
                borderBottomColor: colors.primary,
                borderBottomWidth: 1,
              }}
              key={item.degree}>
              <AppText styleText={{color: colors.black}}>
                {item.institute}
              </AppText>
              <AppText styleText={{color: colors.black}}>{item.degree}</AppText>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
