import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppText from '../common/AppText';
import colors from '../../Theme/colors';
import TextSize from '../common/TextSize';
import AlbumModal from './AlbumModal';

const Data = require('../../Data.json');
const AlbumModule = () => {
  const [openAlbum, setOpenAlbum] = useState(true);
  const [openModal, setOpenModal] = useState({modal: false, album: ''});
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
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            marginBottom: 15,
            elevation: 10,
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {AlbumList.length > 0 &&
              AlbumList.map((obj) => (
                <View key={obj.album} style={styles.AlbumCont}>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      setOpenModal({modal: !openModal.modal, album: obj})
                    }>
                    <Ionicons
                      name="albums"
                      size={80}
                      color={colors.lightGray}
                      style={{marginBottom: -5}}
                    />
                  </TouchableWithoutFeedback>
                  <AppText
                    styleText={{
                      color: colors.secandaryText,
                      fontSize: TextSize.NormalText,
                      paddingBottom: 20,
                    }}>
                    {obj.album}
                  </AppText>
                </View>
              ))}
          </ScrollView>
        </Animatable.View>
      )}
      {openModal.modal && (
        <AlbumModal
          toggle={(value) => setOpenModal({modal: value, album: ''})}
          album={openModal.album}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  AlbumCont: {
    marginTop: 15,
    marginHorizontal: 10,
    alignItems: 'center',
  },
});
export default AlbumModule;
