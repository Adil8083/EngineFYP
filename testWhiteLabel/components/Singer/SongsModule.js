import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../common/AppText';
import colors from '../../Theme/colors';
import DropShadow from 'react-native-drop-shadow';
import TextSize from '../common/TextSize';
const Data = require('../../Data.json');
const SongsModule = () => {
  const [openSongs, setOpenSongs] = useState(true);
  const [SongsList, setSongsList] = useState([]);
  useEffect(() => {
    setSongsList(Data.poster);
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
          marginTop: 25,
        }}>
        <AppText
          styleText={{
            color: colors.TextColor,
            fontWeight: 'bold',
            fontSize: TextSize.SubHeading,
          }}>
          Songs
        </AppText>

        <TouchableOpacity onPress={() => setOpenSongs(!openSongs)}>
          {!openSongs && (
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color={colors.iconColor}
            />
          )}
          {openSongs && (
            <MaterialCommunityIcons
              name="chevron-up"
              size={24}
              color={colors.iconColor}
            />
          )}
        </TouchableOpacity>
      </View>
      {openSongs && (
        <Animatable.View
          animation="slideInDown"
          style={{
            backgroundColor: colors.white,
            height: 230,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            justifyContent: 'center',
            marginBottom: 5,
            elevation: 10,
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {SongsList.length > 0 &&
              SongsList.map((obj) => (
                <View key={obj.name} style={styles.SongCont}>
                  <DropShadow
                    style={{
                      shadowColor: 'black',
                      shadowOffset: {
                        width: 0,
                        height: 0,
                      },
                      shadowOpacity: 0.4,
                      shadowRadius: 5,
                    }}>
                    <Image
                      source={{uri: obj.poster}}
                      style={{
                        width: 140,
                        height: 170,
                        borderWidth: 1,
                        borderColor: colors.primary,
                        borderRadius: 10,
                        padding: 2,
                      }}
                    />
                  </DropShadow>
                  <AppText
                    styleText={{
                      fontWeight: 'bold',
                      color: colors.secandaryText,
                      marginTop: 10,
                      alignSelf: 'center',
                    }}>
                    {obj.name}
                  </AppText>
                </View>
              ))}
          </ScrollView>
        </Animatable.View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  SongCont: {
    flexDirection: 'column',
    marginHorizontal: 13,
    marginTop: 25,
  },
});
export default SongsModule;
