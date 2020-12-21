import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../Theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ActorBio({icon}) {
  const [hobbyIcon, setHobbyIcon] = useState();
  useEffect(() => {
    if (icon === 'Football') {
      setHobbyIcon('baseball');
    } else if (icon === 'Cricket') {
      setHobbyIcon('cricket');
    } else if (icon === 'Gym') {
      setHobbyIcon('weight-lifter');
    } else if (icon === 'Gaming') {
      setHobbyIcon('gamepad-variant-outline');
    } else {
      setHobbyIcon('emoticon-happy-outline');
    }
  }, []);
  return (
    <MaterialCommunityIcons
      name={hobbyIcon}
      size={28}
      color={colors.secondary}
    />
  );
}

const styles = StyleSheet.create({});
