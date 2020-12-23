import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import TextSize from '../../components/common/TextSize';
import AppText from '../../components/common/AppText';
import colors from '../../Theme/colors';
const Data = require('../../Data.json');

const ConcertModule = () => {
  const [ConcertDetails, setConcertDetails] = useState([]);
  useEffect(() => {
    setConcertDetails(Data.concert);
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 40,
          backgroundColor: colors.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          width: '90%',
          marginTop: 25,
          elevation: 10,
        }}>
        <AppText
          styleText={{
            color: colors.TextColor,
            fontWeight: 'bold',
            fontSize: TextSize.SubHeading,
          }}>
          Concerts
        </AppText>
      </View>
      <View style={styles.ConcertCont}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
            }}>
            <AppText
              styleText={{
                color: colors.secondary,
                width: '23%',
                marginRight: 5,
                fontWeight: 'bold',
              }}>
              Country
            </AppText>
            <AppText
              styleText={{
                color: colors.secondary,
                width: '23%',
                marginRight: 5,
                fontWeight: 'bold',
              }}>
              City
            </AppText>
            <AppText
              styleText={{
                color: colors.secondary,
                width: '21%',
                marginRight: 7,
                fontWeight: 'bold',
              }}>
              Date
            </AppText>
            <AppText
              styleText={{
                color: colors.secondary,
                width: '23%',
                marginRight: 5,
                fontWeight: 'bold',
              }}>
              Time
            </AppText>
          </View>
          {ConcertDetails.map((obj) => (
            <View
              key={obj.identifier}
              style={{
                flexDirection: 'row',
                marginLeft: 15,
              }}>
              <AppText
                styleText={{
                  color: colors.gray,
                  width: '23%',
                  marginRight: 5,
                  fontWeight: 'bold',
                }}>
                {obj.country}
              </AppText>
              <AppText
                styleText={{
                  color: colors.gray,
                  width: '23%',
                  marginRight: 5,
                  fontWeight: 'bold',
                }}>
                {obj.city}
              </AppText>
              <AppText
                styleText={{
                  color: colors.gray,
                  width: '21%',
                  marginRight: 7,
                  fontWeight: 'bold',
                }}>
                {obj.date}
              </AppText>
              <AppText
                styleText={{
                  color: colors.gray,
                  width: '23%',
                  fontWeight: 'bold',
                }}>
                {obj.time}
              </AppText>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  ConcertCont: {
    backgroundColor: colors.screenColor,
    elevation: 10,
    width: '90%',
    paddingVertical: 13,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
export default ConcertModule;
