import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import AppView from '../components/common/AppView';
import Modal from 'react-native-modal';
import colors from '../Theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import data from '../Data.json';
import AppText from '../components/common/AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Announcement from '../components/common/Announcemnt';
import Api from '../constants/Api';
import GetDate from '../constants/GetDate';
import AsyncStorage from '@react-native-community/async-storage';

const Home = ({navigation}) => {
  const [checkPost, setCheckPost] = useState();
  const [disc, setDisc] = useState('');
  const [isAdmin, setIsAdmin] = useState();
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }
  const getName = async () => {
    const admin = await AsyncStorage.getItem('isAdmin');
    setIsAdmin(admin);
    setName(data.name);
  };
  useEffect(() => {
    getName();
  }, []);
  const handlePosts = async () => {
    var currDate = GetDate();
    var id = uuid();
    setIsVisible(false);
    var dataPost = await Api.post(`/celebPost?email=${data.email}`, {
      identifier: id,
      name: name,
      description: disc,
      LikeCount: '0',
      date: currDate,
    });

    setDisc('');
    setCheckPost(!checkPost);
  };

  return (
    <AppView
      ViewStyle={{
        width: '100%',
        marginTop: 0,
        paddingTop: 5,
      }}>
      <Announcement forRender={checkPost} />
      {isAdmin === 'true' && (
        <>
          <View style={styles.post}>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <AppText styleText={{color: colors.primary}}>
                  Make an announcement!
                </AppText>
                <MaterialCommunityIcons
                  name={'send'}
                  size={22}
                  color={colors.primary}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Modal
            style={styles.postModal}
            onBackdropPress={() => {
              setIsVisible(false);
              setDisc('');
            }}
            coverScreen={false}
            isVisible={isVisible}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                justifyContent: 'space-between',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                height: 55,
                backgroundColor: colors.primary,
                marginBottom: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <AppText styleText={{marginLeft: 10}}>
                  Make Announcement
                </AppText>
              </View>
              {disc != '' && (
                <TouchableOpacity onPress={() => handlePosts()}>
                  <AppText>Post</AppText>
                </TouchableOpacity>
              )}
              {disc === '' && (
                <AppText styleText={{color: '#B8BDCB'}}>Post</AppText>
              )}
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
              <View
                style={{
                  borderRadius: 25,
                  marginLeft: 10,
                  width: 35,
                  height: 35,
                }}>
                <Image
                  style={{width: 35, height: 35, borderRadius: 25}}
                  source={{uri: data.profilePic}}
                />
              </View>
              <AppText
                styleText={{
                  color: colors.secandaryText,
                  marginLeft: 5,
                  fontWeight: '800',
                  textTransform: 'uppercase',
                }}>
                {name}
              </AppText>
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <TextInput
                style={styles.input}
                onChangeText={(t) => {
                  setDisc(t);
                }}
                autoCorrect={false}
                maxLength={400}
                multiline={true}
                placeholder="What's on your mind?"
                placeholderTextColor={'#B8BDCB'}
              />
            </View>
          </Modal>
        </>
      )}
    </AppView>
  );
};

const styles = StyleSheet.create({
  post: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#B8BDCB',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  postModal: {
    backgroundColor: colors.screenColor,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'flex-start',
    width: '100%',
    alignSelf: 'center',
    margin: 0,
    position: 'absolute',
    height: 300,
    bottom: 0,
  },
  input: {
    width: '80%',
    padding: 10,
    lineHeight: 1,
  },
});

export default Home;
