import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../common/AppText';
import colors from '../../Theme/colors';
import TextSize from '../common/TextSize';
const Data = require('../../Data.json');
const AlbumModule = () => {
  const [openAlbum, setOpenAlbum] = useState(true);
  const [AlbumList, setAlbumList] = useState([]);
  useEffect(() => {
    var i = 0;
    var temp = [];
    Data.poster.map((obj) => {
      var found = false;
      if (obj.album !== ' ') {
        for (i = 0; i < temp.length; i++) {
          if (temp[i].album === obj.album) {
            found = true;
          }
        }
        if (found) {
          temp = temp.map((ele) =>
            ele.album === obj.album
              ? {album: ele.album, songs: [...ele.songs, obj.name]}
              : ele,
          );
        } else {
          temp = [...temp, {album: obj.album, songs: [obj.name]}];
        }
      }
    });
    setAlbumList(temp);
  }, []);
  return (
    <View>
      <View
        style={{
          height: 40,
          backgroundColor: colors.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
          marginTop: 50,
        }}>
        <AppText
          styleText={{
            color: colors.TextColor,
            fontWeight: 'bold',
            fontSize: TextSize.SubHeading,
          }}>
          Albums
        </AppText>

        <TouchableOpacity onPress={() => setOpenAlbum(!openAlbum)}>
          {!openAlbum && (
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color={colors.iconColor}
            />
          )}
          {openAlbum && (
            <MaterialCommunityIcons
              name="chevron-up"
              size={24}
              color={colors.iconColor}
            />
          )}
        </TouchableOpacity>
      </View>
      {openAlbum && (
        <Animatable.View
          animation="slideInDown"
          style={{
            backgroundColor: colors.white,
            height: 170,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            justifyContent: 'center',
            marginBottom: 5,
            elevation: 10,
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {AlbumList.length > 0 &&
              AlbumList.map((obj) => (
                <View key={obj.album} style={styles.AlbumCont}>
                  <TouchableOpacity onPress={() => console.log()}>
                    <AppText
                      styleText={{
                        fontWeight: 'bold',
                        color: colors.TextColor,
                        fontSize: TextSize.SubHeading,
                        textDecorationLine: 'underline',
                      }}>
                      {obj.album}
                    </AppText>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        </Animatable.View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  AlbumCont: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    elevation: 10,
    marginTop: 20,
    marginHorizontal: 15,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AlbumModule;
