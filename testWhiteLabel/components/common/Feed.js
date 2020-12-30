import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../../Theme/colors';
import AppText from '../common/AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Api from '../../constants/Api';
import Count from '../common/Count';
import data from '../../Data.json';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

const Feed = ({forRender}) => {
  const [updateRender, setUpdateRender] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [fanData, setFanData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [isAdmin, setIsAdmin] = useState();
  const [name, setName] = useState('');
  const [id, setId] = useState();
  const [update, setUpdate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const getPosts = async () => {
    var p = await Api.get(`/fanPost/get?email=${data.email}`);
    var d = [];
    d = p.data;

    d.reverse();
    setFanData(p.data);
    setLoader(false);
    // console.log(p.data);  handle count after log in setup
  };
  const getAdmin = async () => {
    const admin = await AsyncStorage.getItem('isAdmin');
    const user = await AsyncStorage.getItem('userName');
    setIsAdmin(admin);
    setName(user);
  };
  useEffect(() => {
    getAdmin();
  }, []);
  useEffect(() => {
    setLoader(true);
    getPosts();
  }, [forRender, updateRender]);

  const handleDelete = async (t) => {
    if (t != null) {
      var d = await Api.delete(`/fanPost/delete?email=${data.email}&id=${t}`);
    } else {
      var d = await Api.delete(`/fanPost/delete?email=${data.email}&id=${id}`);
      setIsVisible(false);
    }
    getPosts();
    setId();
    setUpdate(true);
    setTimeout(() => {
      setUpdate(false);
    }, 3000);
  };
  const handleRefresh = () => {
    setRefresh(true);
    getPosts();
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };
  const handleEdit = async () => {
    console.log('editing');
  };

  return (
    <View ViewStyle={{width: '100%'}}>
      {loader && (
        <View
          style={{
            height: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator
            size="large"
            color={colors.secondary}
            animating={loader}
          />
        </View>
      )}
      {!loader && fanData.length < 1 && (
        <View
          style={{
            height: '100%',
          }}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                colors={[colors.secondary]}
                progressBackgroundColor={colors.screenColor}
                onRefresh={() => handleRefresh()}
              />
            }
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <AppText styleText={{color: '#B8BDCB', fontWeight: '500'}}>
              No Posts Yet
            </AppText>
          </ScrollView>
        </View>
      )}
      {!loader && fanData.length > 0 && (
        <View
          style={{paddingBottom: isAdmin === 'false' ? 50 : 0, height: '100%'}}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                colors={[colors.secondary]}
                progressBackgroundColor={colors.screenColor}
                onRefresh={() => handleRefresh()}
              />
            }
            showsVerticalScrollIndicator={false}>
            {fanData.map((item) => {
              return (
                <View
                  key={item._id}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center',
                    marginBottom: 5,
                    marginTop: 5,
                  }}>
                  <View style={styles.container}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          marginTop: 5,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            borderRadius: 25,
                            backgroundColor: colors.secondary,
                            marginLeft: 10,
                            width: 30,
                            height: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <AppText
                            styleText={{
                              textTransform: 'uppercase',
                              color: colors.white,
                            }}>
                            {item.name.charAt(0)}
                          </AppText>
                        </View>
                        <View>
                          <AppText
                            styleText={{
                              color: colors.secandaryText,
                              marginLeft: 10,
                              textTransform: 'uppercase',
                              fontWeight: '800',
                            }}>
                            {item.name}
                          </AppText>
                          <AppText
                            styleText={{
                              color: colors.secandaryText,
                              fontSize: 11,
                              marginLeft: 10,
                            }}>
                            {moment(item.date).fromNow()}
                          </AppText>
                        </View>
                      </View>
                      {isAdmin === 'true' && (
                        <TouchableOpacity
                          onPress={() => {
                            handleDelete(item.identifier);
                          }}>
                          <MaterialCommunityIcons
                            name="delete-outline"
                            size={24}
                            color={colors.secondary}
                          />
                        </TouchableOpacity>
                      )}
                      {item.name === name && (
                        <>
                          {isAdmin === 'false' && (
                            <TouchableOpacity
                              onPress={() => {
                                setIsVisible(true);
                                setId(item.identifier);
                              }}>
                              <MaterialCommunityIcons
                                name="chevron-down"
                                size={24}
                                color={colors.primary}
                              />
                            </TouchableOpacity>
                          )}
                        </>
                      )}
                    </View>
                    <View
                      style={{
                        padding: 8,
                      }}>
                      <View
                        style={{
                          padding: 5,
                        }}>
                        <AppText styleText={{color: colors.secandaryText}}>
                          {item.description}
                        </AppText>
                      </View>
                      {/* {refresh ||
                        (!refresh && (
                          ))} */}
                      <Count
                        count={item.LikeCount}
                        id={item.identifier}
                        likeArray={item.isLike}
                        userName={name}
                        admin={isAdmin}
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
      <Modal
        onBackdropPress={() => setIsVisible(false)}
        style={{
          position: 'absolute',
          bottom: 0,
          height: 120,
          width: '100%',
          margin: 0,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          backgroundColor: colors.primary,
        }}
        isVisible={isVisible}>
        <View
          style={{
            width: '20%',
            borderTopWidth: 1,
            borderColor: colors.secondary,
            alignSelf: 'center',
          }}></View>
        <TouchableOpacity onPress={() => handleEdit()}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              marginLeft: 20,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={22}
              color={colors.secondary}
            />
            <AppText styleText={{marginLeft: 20}}>Edit Post</AppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete()}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              marginLeft: 20,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="delete-empty-outline"
              size={22}
              color={colors.secondary}
            />
            <AppText styleText={{marginLeft: 20}}>Delete Post</AppText>
          </View>
        </TouchableOpacity>
      </Modal>
      {update && (
        <Animatable.View
          duration={3000}
          animation="fadeOut"
          style={{
            height: 40,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: colors.primary,
            position: 'absolute',
            marginTop: 510,
            alignSelf: 'center',
          }}>
          <AppText styleText={{color: colors.TextColor}}>Deleted!</AppText>
        </Animatable.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.screenColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    marginBottom: 10,
    elevation: 10,
    padding: 5,
  },
});

export default Feed;
