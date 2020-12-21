import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import AppView from '../common/AppView';
import colors from '../../Theme/colors';
import AppText from '../common/AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Api from '../../constants/Api';
import Count from '../common/Count';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

const Feed = () => {
  const [fanData, setFanData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const getPosts = async () => {
    var p = await Api.get(`/fanPost/get?email=uzairnaseem@gmail.com`);
    setFanData(p.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View ViewStyle={{width: '100%'}}>
      {fanData && fanData.reverse() && (
        <View style={{paddingBottom: 60}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {fanData.map((item) => {
              return (
                <View
                  key={item._id}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    alignSelf: 'center',
                    marginBottom: 10,
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
                            borderRadius: 10,
                            backgroundColor: '#B8BDCB',
                            marginLeft: 10,
                          }}>
                          <Feather
                            name="user"
                            size={24}
                            color={colors.primary}
                          />
                        </View>
                        <AppText
                          styleText={{
                            color: colors.secandaryText,
                            marginLeft: 10,
                            textTransform: 'uppercase',
                            fontWeight: '800',
                          }}>
                          {item.name}
                        </AppText>
                      </View>
                      <TouchableOpacity onPress={() => setIsVisible(true)}>
                        <MaterialCommunityIcons
                          name="chevron-down"
                          size={24}
                          color={colors.primary}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        padding: 8,
                      }}>
                      <View
                        style={{
                          borderBottomWidth: 0.5,
                          borderColor: colors.primary,
                          padding: 5,
                        }}>
                        <AppText styleText={{color: colors.secandaryText}}>
                          {item.description}
                        </AppText>
                      </View>
                      <Count count={item.LikeCount} />
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
      </Modal>
    </View>
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
    // marginTop: 5,
  },
  post: {
    width: '100%',
    height: 50,
    backgroundColor: colors.screenColor,
    alignSelf: 'center',
    position: 'absolute',
    borderTopWidth: 0.5,
    borderColor: '#B8BDCB',
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

export default Feed;
