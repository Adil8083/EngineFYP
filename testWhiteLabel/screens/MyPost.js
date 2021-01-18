import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import data from '../Data.json';
import AppText from '../components/common/AppText';
import TextSize from '../components/common/TextSize';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../constants/Api';
import Count from '../components/common/Count';

export default function MyPost({navigation: {goBack}}) {
  const [name, setName] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [fname, setFname] = useState();
  const [refresh, setRefresh] = useState(false);

  const [post, setPost] = useState([]);
  const getName = async () => {
    const admin = await AsyncStorage.getItem('isAdmin');
    const user = await AsyncStorage.getItem('userName');
    setIsAdmin(admin);
    setName(user);
    setFname(user.charAt(0));
  };

  const getPost = async () => {
    var posts = await Api.get(
      `fanPost/getUserPosts?email=${data.email}&name=${name}`,
    );

    setPost(posts.data);
  };
  const handleDelete = async (t) => {
    var d = await Api.delete(`/fanPost/delete?email=${data.email}&id=${t}`);

    getPost();
  };
  const handleRefresh = () => {
    setRefresh(true);
    getPost();
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };
  useEffect(() => {
    getName();
  }, []);
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          alignItems: 'center',
          // paddingLeft: 20,
          backgroundColor: Colors.primary,
        }}>
        <TouchableOpacity
          style={{width: '10%', alignItems: 'center'}}
          onPress={() => goBack()}>
          <AntDesign name="arrowleft" size={20} color={Colors.secondary} />
        </TouchableOpacity>
        <View style={{width: '80%', alignItems: 'center'}}>
          <AppText
            styleText={{
              fontSize: TextSize.Heading,
              textTransform: 'uppercase',
            }}>
            {name}
          </AppText>
        </View>
      </View>
      <View
        style={{
          height: '15%',
          backgroundColor: Colors.primary,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}>
        <AppText styleText={{alignSelf: 'center'}}>My Profile</AppText>
        <View
          style={{
            marginTop: 18,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View style={{alignItems: 'flex-start'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <AppText>Posts</AppText>
              <AppText>{post.length}</AppText>
            </View>
          </View>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: Colors.secondary,
              marginLeft: 10,
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <AppText
              styleText={{
                textTransform: 'uppercase',
                color: Colors.primary,
                fontWeight: 'bold',
              }}>
              {fname}
            </AppText>
          </View>
        </View>
      </View>
      <View>
        {post.length < 1 && (
          <View
            style={{
              height: '100%',
            }}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  colors={[Colors.secondary]}
                  progressBackgroundColor={Colors.screenColor}
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
        {post.length > 0 && (
          <View
            style={{
              height: '85%',
              marginTop: 25,
            }}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  colors={[Colors.secondary]}
                  progressBackgroundColor={Colors.screenColor}
                  onRefresh={() => handleRefresh()}
                />
              }
              showsVerticalScrollIndicator={false}>
              {post.map((item) => {
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
                          <TouchableOpacity>
                            <View
                              style={{
                                borderRadius: 25,
                                backgroundColor: Colors.primary,
                                marginLeft: 10,
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <AppText
                                styleText={{
                                  textTransform: 'uppercase',
                                  color: Colors.secondary,
                                  fontWeight: 'bold',
                                }}>
                                {item.name.charAt(0)}
                              </AppText>
                            </View>
                          </TouchableOpacity>
                          <View>
                            <AppText
                              styleText={{
                                color: Colors.secandaryText,
                                marginLeft: 10,
                                textTransform: 'uppercase',
                                fontWeight: '800',
                              }}>
                              {item.name}
                            </AppText>
                            <AppText
                              styleText={{
                                color: Colors.secandaryText,
                                fontSize: 10,
                                marginLeft: 10,
                              }}>
                              {moment(item.date).fromNow()}
                            </AppText>
                          </View>
                        </View>

                        <TouchableOpacity
                          onPress={() => {
                            handleDelete(item.identifier);
                          }}>
                          <MaterialCommunityIcons
                            name="delete-outline"
                            size={24}
                            color={Colors.secondary}
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          padding: 8,
                        }}>
                        <View
                          style={{
                            padding: 5,
                          }}>
                          <AppText styleText={{color: Colors.secandaryText}}>
                            {item.description}
                          </AppText>
                        </View>
                        <View>
                          <View
                            style={{
                              marginTop: 8,
                              flexDirection: 'row',
                              alignItems: 'center',
                              backgroundColor: '#ECEDF2',
                              width: '16%',
                              padding: 8,
                              borderRadius: 25,
                              justifyContent: 'space-between',
                            }}>
                            <MaterialCommunityIcons
                              name={'heart'}
                              size={18}
                              color={Colors.secondary}
                            />
                            <AppText styleText={{color: Colors.secondary}}>
                              {item.LikeCount}
                            </AppText>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: Colors.screenColor,
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
