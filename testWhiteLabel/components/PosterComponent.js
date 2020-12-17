import React from 'react';
import {View, Text, Image} from 'react-native';

export default function PosterComponent({imageUris}) {
  return (
    <View
      style={{
        height: 150,
        width: 150,
        borderRadius: 10,
      }}>
      <Image
        style={{
          height: 150,
          width: 150,
          borderRadius: 10,
        }}
        source={require('../../assets/1608190713838-user.png')}
      />
    </View>
  );
}
