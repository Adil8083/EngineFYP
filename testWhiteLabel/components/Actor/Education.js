import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import colors from '../../Theme/colors';
import AppText from '../common/AppText';
import TextSize from '../../components/common/TextSize';
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
          borderBottomWidth: 0.7,
          borderTopColor: colors.primary,
          borderBottomColor: colors.primary,
          padding: 5,
        }}>
        <AppText
          styleText={{
            fontSize: TextSize.SubHeading,
            color: colors.secandaryText,
            fontWeight: '100',
          }}>
          INSTITUTE
        </AppText>
        <AppText
          styleText={{
            fontSize: TextSize.SubHeading,
            color: colors.secandaryText,
            fontWeight: '100',
          }}>
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
                borderBottomWidth: 0.5,
                width: '90%',
                marginLeft: 15,
              }}
              key={item.degree}>
              <AppText
                styleText={{
                  color: colors.secandaryText,
                  fontWeight: '100',
                }}>
                {item.institute}
              </AppText>
              <AppText
                styleText={{color: colors.secandaryText, fontWeight: '100'}}>
                {item.degree}
              </AppText>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
