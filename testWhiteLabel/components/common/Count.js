import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from './AppText';
import colors from '../../Theme/colors';
export default function Count({count}) {
  const [counter, setCounter] = useState(parseInt(count));

  const [click, setClick] = useState(false);
  const handleCount = () => {
    if (click) {
      setClick(!click);
    } else {
      setClick(!click);
    }
    if (!click) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };
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
