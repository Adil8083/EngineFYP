import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropShadow from 'react-native-drop-shadow';
function GradiantButton({
  styleButton,
  onPress,
  name,
  size,
  end,
  start,
  locations,
  colorArr = ['rgb(255, 115, 80)', 'rgb(255, 80, 70)', 'rgb(255, 78, 70)'],
}) {
  return (
    <TouchableOpacity style={{...styleButton}} onPress={onPress}>
      <DropShadow
        style={{
          shadowColor: 'black',
          shadowOffset: {
            width: 1,
            height: 3,
          },
          shadowOpacity: 0.7,
          shadowRadius: 8,
        }}>
        <LinearGradient
          colors={colorArr}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
          end={end ? end : {x: 1, y: 0.5}}
          start={start ? start : {x: 0, y: 0.3}}
          locations={locations ? locations : [0.3, 0.8, 0.6]}>
          <FontAwesome name={name} size={size} color="white" style={{}} />
        </LinearGradient>
      </DropShadow>
    </TouchableOpacity>
  );
}

export default GradiantButton;
