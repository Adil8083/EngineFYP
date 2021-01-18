import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from './AppText';
import colors from '../../Theme/colors';
import Api from '../../constants/Api';
import data from '../../Data.json';

export default function Count({count, id, likeArray, userName, admin, post}) {
  const [counter, setCounter] = useState(count);
  const [click, setClick] = useState(false);
  useEffect(() => {
    const like = likeArray.includes(userName);
    setClick(like);
  }, []);

  const handleCount = async () => {
    if (click) {
      setClick(!click);
    } else {
      setClick(!click);
    }
    if (!click) {
      var cc = parseInt(counter) + 1;
      setCounter(cc);
      likeArray = [...likeArray, userName];
      var c = cc.toString();
      if (post === 'Celeb') {
        var handleLikeCount = await Api.put(
          `celebPost/update?email=${data.email}&id=${id}`,
          {
            LikeCount: c,
            isLike: likeArray,
          },
        );
      } else {
        var handleLikeCount = await Api.put(
          `fanPost/update?email=${data.email}&id=${id}`,
          {
            LikeCount: c,
            isLike: likeArray,
          },
        );
      }
    } else if (click) {
      var pp = parseInt(counter) - 1;
      setCounter(pp);

      const filter = likeArray.filter((t) => t !== userName);

      if (post === 'Celeb') {
        var handleUnLikeCount = await Api.put(
          `celebPost/update?email=${data.email}&id=${id}`,
          {
            LikeCount: pp,
            isLike: filter,
          },
        );
      } else {
        var handleUnLikeCount = await Api.put(
          `fanPost/update?email=${data.email}&id=${id}`,
          {
            LikeCount: pp,
            isLike: filter,
          },
        );
      }
    }
  };
  if (admin === 'true') {
    return (
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
            color={colors.secondary}
          />
          <AppText styleText={{color: colors.secondary}}>{counter}</AppText>
        </View>
      </View>
    );
  }
  if (admin === 'false') {
    return (
      <>
        {click && (
          <TouchableOpacity onPress={() => handleCount()}>
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
                color={colors.secondary}
              />
              <AppText styleText={{color: colors.secondary}}>{counter}</AppText>
            </View>
          </TouchableOpacity>
        )}
        {!click && (
          <TouchableOpacity onPress={() => handleCount()}>
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
                name={'heart-outline'}
                size={18}
                color={colors.secondary}
              />
              <AppText styleText={{color: colors.secandaryText}}>
                {counter}
              </AppText>
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  }
  return <View></View>;
}
