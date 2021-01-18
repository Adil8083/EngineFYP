import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
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

const Announcement = ({forRender}) => {
  const [refresh, setRefresh] = useState(false);
  const [fanData, setFanData] = useState([]);
  const [loader, setLoader] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [name, setName] = useState('');
  const [id, setId] = useState();
  const [update, setUpdate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const getPosts = async () => {
    var p = await Api.get(`/celebPost/get?email=${data.email}`);
    var d = [];
    d = p.data;

    d.reverse();
    setFanData(p.data);
    setLoader(false);
  };
  const getAdmin = async () => {
    const admin = await AsyncStorage.getItem('isAdmin');
    const user = await AsyncStorage.getItem('userName');
    setIsAdmin(admin);
    setName(user);
  };
  useEffect(() => {
    getAdmin();
    getPosts();
  }, []);
  useEffect(() => {
    setLoader(true);
    getPosts();
  }, [forRender]);

  const handleDelete = async (t) => {
    if (t != null) {
      var d = await Api.delete(`/celebPost/delete?email=${data.email}&id=${t}`);
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
          style={{paddingBottom: isAdmin === 'true' ? 50 : 0, height: '100%'}}>
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
                    width: '95%',
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
                            marginLeft: 10,
                            width: 35,
                            height: 35,
                          }}>
                          <Image
                            style={{width: 35, height: 35, borderRadius: 25}}
                            source={{uri: data.profilePic}}
                          />
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
                    </View>
                    <View
                      style={{
                        padding: 8,
                        marginTop: 10,
                      }}>
                      <View
                        style={{
                          padding: 5,
                        }}>
                        <AppText styleText={{color: colors.secandaryText}}>
                          {item.description}
                        </AppText>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          marginTop: 50,
                          borderTopWidth: 0.5,
                          borderColor: colors.secondary,
                        }}>
                        <Count
                          count={item.LikeCount}
                          id={item.identifier}
                          likeArray={item.isLike}
                          userName={name}
                          admin={isAdmin}
                          post="Celeb"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
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
    height: 200,
    borderRadius: 10,
    backgroundColor: colors.screenColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    elevation: 10,
    padding: 10,
  },
});

export default Announcement;
