import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from './AppText';
import colors from '../../Theme/colors';
import Api from '../../constants/Api';
import data from '../../Data.json';
import {useEffect} from 'react/cjs/react.development';

export default function Count({count, id, likeArray, userName, admin}) {
  const [counter, setCounter] = useState(count);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const like = likeArray.includes(userName);
    console.log(like);
    setClick(like);
  }, []);
  // console.log(userName);
  const handleCount = async () => {
    if (click) {
      setClick(!click);
    } else {
      setClick(!click);
    }
    if (!click) {
      console.log('Like');
      var cc = parseInt(counter) + 1;
      setCounter(cc);
      likeArray = [...likeArray, userName];
      var c = cc.toString();
      var handleLikeCount = await Api.put(
        `fanPost/update?email=${data.email}&id=${id}`,
        {
          LikeCount: c,
          isLike: likeArray,
        },
      );
      console.log(handleLikeCount.data);
    } else if (click) {
      console.log('dis like');
      var pp = parseInt(counter) - 1;
      setCounter(pp);
      console.log(likeArray);
      const filter = likeArray.filter((t) => t !== userName);
      console.log(filter);
      var handleUnLikeCount = await Api.put(
        `fanPost/update?email=${data.email}&id=${id}`,
        {
          LikeCount: pp,
          isLike: filter,
        },
      );
      console.log(handleUnLikeCount.data);
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
  return (
    <View>
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
              color={colors.primary}
            />
            <AppText styleText={{color: colors.secandaryText}}>
              {counter}
            </AppText>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
