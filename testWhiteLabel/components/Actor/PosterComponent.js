import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppText from '../common/AppText';
import colors from '../../Theme/colors';
import {ScrollView} from 'react-native-gesture-handler';

export default function PosterComponent({imageUris}) {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {imageUris.map((item) => {
            return (
              <View key={item.poster} style={{marginLeft: 10}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: colors.primary,
                    borderRadius: 10,
                    padding: 2,
                  }}>
                  <Image source={{uri: item.poster}} style={styles.image} />
                </View>
                <AppText styleText={styles.text}>{item.name}</AppText>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 135,
    height: 170,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 10,
    fontWeight: '200',
    color: colors.secandaryText,
  },
});
