import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import DropShadow from 'react-native-drop-shadow';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../Theme/colors';
import AppText from '../common/AppText';
import TextSize from '../common/TextSize';
const Data = require('../../Data.json');

function Projects() {
  const [OpenProjects, setOpenProjects] = useState(true);
  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    Data.politicianProj && setProjects(Data.politicianProj);
  }, []);
  return (
    <View>
      <DropShadow
        style={{
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 5,
        }}>
        <Animatable.View
          animation="fadeInDown"
          style={[styles.ProjectCont, {height: OpenProjects ? 120 : 30}]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: Colors.primary,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingHorizontal: 10,
            }}
            onPress={() => setOpenProjects(!OpenProjects)}>
            <Text
              style={[
                styles.heading,
                {marginTop: 8.6, color: Colors.TextColor},
              ]}>
              Projects
            </Text>
            {!OpenProjects && (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color={Colors.TextColor}
                style={{marginTop: 8.6}}
              />
            )}

            {OpenProjects && (
              <MaterialIcons
                name="keyboard-arrow-up"
                size={24}
                color={Colors.TextColor}
                style={{marginTop: 8.6}}
              />
            )}
          </TouchableOpacity>
          <ScrollView>
            {OpenProjects && (
              <Animatable.View animation="fadeInDown">
                {Projects.length > 0 &&
                  Projects.map((obj) => (
                    <View
                      key={obj.identifier}
                      style={{flexDirection: 'row', marginHorizontal: 15}}>
                      <Text style={styles.projectInfo}>{obj.name}</Text>
                      <Text
                        numberOfLines={3}
                        style={[styles.projectInfo, {marginRight: 8}]}>
                        {obj.detail}
                      </Text>
                    </View>
                  ))}
              </Animatable.View>
            )}
          </ScrollView>
        </Animatable.View>
      </DropShadow>
    </View>
  );
}
const styles = StyleSheet.create({
  ProjectCont: {
    marginTop: 30,
    backgroundColor: Colors.screenColor,
    borderRadius: 10,
    marginBottom: 100,
    paddingBottom: 15,
  },
  heading: {
    marginTop: 6,
    fontWeight: '200',
    fontSize: TextSize.SubHeading,
    color: Colors.primary,
  },
  projectInfo: {
    color: Colors.secandaryText,
    width: '40%',
    fontSize: 15,
    marginTop: 10,
    marginRight: 15,
  },
});
export default Projects;
