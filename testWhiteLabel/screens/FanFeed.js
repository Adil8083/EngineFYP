import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AppView from '../components/common/AppView';
import Modal from 'react-native-modal';
import colors from '../Theme/colors';
import {SCREENS} from '../constants/SCREENS';
import Feather from 'react-native-vector-icons/Feather';
import data from '../Data.json';
import AppText from '../components/common/AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInputComponent from './../components/common/TextInputComponent';
import Feed from '../components/common/Feed';
import Api from '../constants/Api';

const FanFeed = ({navigation}) => {
  const [checkPost, setCheckPost] = useState();
  const [disc, setDisc] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const post = () => {
    setIsVisible(false);
    // setDisc('');
  };
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

  const handlePosts = async () => {
    var id = uuid();
    var dataPost = await Api.post(`/fanPost?email=uzairnaseem@gmail.com`, {
      identifier: id,
      name: data.name,
      description: disc,
      LikeCount: '0',
    });
    console.log(dataPost.data);
    setIsVisible(false);
    setDisc('');
    setCheckPost(!checkPost);
  };

  return (
    <AppView ViewStyle={{width: '100%'}}>
      <Feed />

      <View style={styles.post}>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <AppText styleText={{color: colors.primary}}>
              What's on your mind?
            </AppText>
            <MaterialCommunityIcons
              name={'send'}
              size={22}
              color={colors.primary}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Modal style={styles.postModal} coverScreen={true} isVisible={isVisible}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderBottomEndRadius: 10,
            borderColor: colors.primary,
            height: 55,
            backgroundColor: colors.primary,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(false);
                setDisc('');
              }}>
              <MaterialCommunityIcons
                name={'arrow-left'}
                size={22}
                color={'#B8BDCB'}
              />
            </TouchableOpacity>
            <AppText styleText={{marginLeft: 10}}>Create Post</AppText>
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
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
          <Feather name="user" size={35} color={colors.primary} />
          <AppText
            styleText={{
              color: colors.secandaryText,
              marginLeft: 5,
              fontWeight: '800',
            }}>
            {data.name}
          </AppText>
        </View>
        <View style={{alignItems: 'flex-start'}}>
          <TextInput
            style={styles.input}
            onChangeText={(t) => {
              setDisc(t);
            }}
            multiline={true}
            placeholder="What's on your mind?"
            maxLength={150}
            placeholderTextColor={'#B8BDCB'}
          />
        </View>
      </Modal>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: colors.screenColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,

    elevation: 20,
    padding: 5,
    marginTop: 5,
  },
  post: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#B8BDCB',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 5,
    marginTop: 5,
  },
  postModal: {
    backgroundColor: colors.screenColor,
    borderRadius: 5,
    justifyContent: 'flex-start',
    width: '100%',
    alignSelf: 'center',
    margin: 0,
  },
  input: {
    width: '80%',
    padding: 10,
    lineHeight: 1,
  },
});

export default FanFeed;
