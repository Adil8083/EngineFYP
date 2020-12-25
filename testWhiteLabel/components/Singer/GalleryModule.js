import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';

import AppText from '../../components/common/AppText';
import TextSize from '../../components/common/TextSize';
import colors from '../../Theme/colors';
const Data = require('../../Data.json');

const ConcertModule = () => {
  const [GalleryImages, setGalleryImages] = useState([]);
  var counter = 0;
  useEffect(() => {
    setGalleryImages(Data.Gallery);
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
          Gallery
        </AppText>
      </View>
      <View style={styles.GalleryCont}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {GalleryImages.map((uri) => (
              <View
                key={(counter = counter + 1)}
                style={{marginHorizontal: 5, marginVertical: 8}}>
                <Image
                  source={{uri: uri}}
                  style={{
                    width: 140,
                    height: 170,
                    borderWidth: 1,
                    borderColor: colors.primary,
                    borderRadius: 10,
                    padding: 2,
                  }}
                />
              </View>
            ))}
          </View>
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
  GalleryCont: {
    backgroundColor: colors.screenColor,
    elevation: 10,
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
export default ConcertModule;
