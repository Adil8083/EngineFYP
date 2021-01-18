import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../../components/common/AppText';
import colors from '../../Theme/colors';
import AppView from '../../components/common/AppView';
import TextSize from '../../components/common/TextSize';
import IconHobby from '../../components/Actor/IconHobby';
import {ScrollView} from 'react-native-gesture-handler';

export default function ActorBio({hobbies}) {
  return (
    <AppView ViewStyle={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {hobbies.map((item) => {
          return (
            <View
              key={item}
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
                {item}
              </AppText>
              <IconHobby icon={item} />
            </View>
          );
        })}
      </ScrollView>
    </AppView>
  );
}

const styles = StyleSheet.create({});
