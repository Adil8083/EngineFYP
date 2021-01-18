import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../../Theme/colors';
import AppText from '../common/AppText';
import TextSize from '../common/TextSize';
const AlbumModal = ({toggle, album}) => {
  return (
    <Modal
      isVisible
      coverScreen={true}
      onBackButtonPress={() => toggle(false)}
      onBackdropPress={() => toggle(false)}>
      {console.log(album)}
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText
            styleText={{
              color: colors.TextColor,
              fontSize: TextSize.NormalText,
            }}>
            {album.album} Songs
          </AppText>
        </View>
        <View style={styles.body}>
          {album.songs.length > 0 &&
            album.songs.map((obj) => (
              <View key={obj} style={{flexDirection: 'row', marginBottom: 6}}>
                <Entypo name="dot-single" size={20} color={colors.primary} />
                <AppText
                  styleText={{
                    color: colors.primary,
                    fontSize: TextSize.NormalText,
                    marginLeft: 6,
                  }}>
                  {obj}
                </AppText>
              </View>
            ))}
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => toggle(false)}>
          <AppText
            styleText={{
              color: colors.TextColor,
              fontSize: TextSize.NormalText,
            }}>
            Close
          </AppText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    elevation: 10,
    paddingBottom: 15,
    shadowColor: colors.darkGray,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: colors.primary,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    width: 100,
    height: 35,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AlbumModal;
