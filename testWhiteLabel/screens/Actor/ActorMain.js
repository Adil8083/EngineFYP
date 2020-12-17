import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/common/AppButton';
import AppText from '../../components/common/AppText';
import data from '../../Data.json';
import colors from '../../Theme/colors';
import PosterComponent from '../../components/PosterComponent';

import AppView from '../../components/common/AppView';
export default function ActorMain() {
  return (
    <AppView>
      <AppText styleText={{alignSelf: 'center'}}>{data.name}</AppText>
      {/* <View
        style={{
          height: 100,
          width: '80%',
          margin: 20,
          alignSelf: 'center',
          backgroundColor: colors.secondary,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
        }}></View> */}
      <AppButton title="test" onPress={() => console.log(data.Category)} />
      <PosterComponent imageUris={data.poster} />
    </AppView>
  );
}

const styles = StyleSheet.create({});
