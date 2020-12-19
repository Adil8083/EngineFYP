import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  Linking,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropShadow from 'react-native-drop-shadow';
import * as Animatable from 'react-native-animatable';
import AppView from '../components/common/AppView';
import {SCREENS} from '../constants/SCREENS';
import Colors from '../Theme/colors';
import SocialAccButton from '../components/common/SocialAccButton';

const Data = require('../Data.json');
const Profile = ({navigation}) => {
  const [profilePic, setProfilePic] = useState();
  const [Name, setName] = useState();
  const [Country, steCountry] = useState();
  const [Mail, setMail] = useState();
  const [achievements, setAchievements] = useState();
  const [fbPath, setFbPath] = useState();
  const [InstaPath, setInstaPath] = useState();
  const [TwitterPath, setTwitterPath] = useState();
  const [YoutubePath, setYoutubePath] = useState();
  const [OpenAchievements, setOpenAchievements] = useState(false);
  const openFacebook = () => [Linking.openURL(fbPath)];

  const openInstagram = () => [
    Linking.openURL('https://www.instagram.com/' + InstaPath),
  ];

  const openTwitter = () => [
    Linking.openURL('https://twitter.com/' + TwitterPath),
  ];

  const openYoutube = () => {
    [Linking.openURL(YoutubePath)];
  };
  useEffect(() => {
    setProfilePic(Data.profilePic);
    setName(Data.name);
    steCountry(Data.Country);
    setMail(Data.email);
    setAchievements(Data.achievements);
    Data.Facebook && setFbPath(Data.Facebook);
    Data.Insta && setInstaPath(Data.Insta);
    Data.Twitter && setTwitterPath(Data.Twitter);
    Data.Youtube && setYoutubePath(Data.Youtube);
  }, []);
  return (
    <AppView>
      <View style={{marginTop: 10, flex: 1}}>
        <View style={styles.BioCont}>
          <View style={styles.ImgCont}>
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
              <Image
                source={{
                  uri:
                    'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
                }}
                style={styles.profileImg}
              />
            </DropShadow>
          </View>
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
            <Text style={styles.Name}>{Name}</Text>
          </DropShadow>
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
            <Text style={styles.Country}>{Country}</Text>
          </DropShadow>
          <Text style={styles.Mail}>{Mail}</Text>
        </View>
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
            animation="slideInDown"
            style={[styles.AchvCont, {height: OpenAchievements ? 200 : 45}]}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              onPress={() => setOpenAchievements(!OpenAchievements)}>
              <Text
                style={[
                  styles.Name,
                  {marginTop: 8.6, color: Colors.screenColor},
                ]}>
                Achievements
              </Text>
              {!OpenAchievements && (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color={Colors.screenColor}
                  style={{marginTop: 8.6}}
                />
              )}
              {OpenAchievements && (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color={Colors.screenColor}
                  style={{marginTop: 8.6}}
                />
              )}
            </TouchableOpacity>
            <ScrollView>
              {OpenAchievements && (
                <Animatable.View animation="slideInDown">
                  {achievements.map((obj) => (
                    <View key={obj.identifier} style={{flexDirection: 'row'}}>
                      <Text style={styles.AchvInfo}>{obj.name}</Text>
                      {obj.year && (
                        <Text style={styles.AchvInfo}>{obj.year}</Text>
                      )}
                      <Text
                        numberOfLines={3}
                        style={[
                          styles.AchvInfo,
                          {width: '63%', marginRight: 8},
                        ]}>
                        {obj.description}
                      </Text>
                    </View>
                  ))}
                </Animatable.View>
              )}
            </ScrollView>
          </Animatable.View>
        </DropShadow>
        <View style={styles.SocialInfoCont}>
          {fbPath && fbPath !== ' ' && (
            <SocialAccButton
              name="facebook"
              size={30}
              onPress={() => openFacebook()}
              colorArr={['#2564E6', '#2B4AC3', '#2B4ECD']}
            />
          )}
          {InstaPath && InstaPath !== ' ' && (
            <SocialAccButton
              name="instagram"
              size={22}
              end={{x: 1, y: 0.6}}
              start={{x: 0, y: 0.8}}
              locations={[0.3, 0.8, 0.7]}
              onPress={() => openInstagram()}
              styleButton={{marginLeft: 15}}
              colorArr={['#AF34CC', '#FD7863', '#FC865E']}
            />
          )}
          {TwitterPath && TwitterPath !== ' ' && (
            <SocialAccButton
              name="twitter"
              size={22}
              end={{x: 0.8, y: 0}}
              start={{x: 0, y: 0.5}}
              locations={[0.3, 0.65, 0.7]}
              onPress={() => openTwitter()}
              styleButton={{marginLeft: 15}}
              colorArr={['#018AFF', '#02A5FD', '#05B0FE']}
            />
          )}
          {YoutubePath && YoutubePath !== ' ' && (
            <SocialAccButton
              name="youtube-play"
              size={24}
              end={{x: 0.8, y: 0}}
              start={{x: 0, y: 0.5}}
              locations={[0.1, 0.9, 0.2]}
              onPress={() => openYoutube()}
              styleButton={{marginLeft: 15}}
              colorArr={['#BA0100', '#EA0204', '#EA0204']}
            />
          )}
        </View>
      </View>
    </AppView>
  );
};
const styles = StyleSheet.create({
  profileImg: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  BioCont: {
    alignItems: 'center',
  },
  ImgCont: {
    width: 120,
    height: 120,
  },
  Name: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
  },
  Country: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary,
  },
  Mail: {
    marginTop: 6,
    fontSize: 14,
    color: Colors.primary,
  },
  AchvCont: {
    marginLeft: 10,
    marginTop: 30,
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 100,
    paddingBottom: 15,
  },
  AchvInfo: {
    color: Colors.TextColor,
    width: '20%',
    fontSize: 15,
    marginTop: 10,
    marginRight: 15,
  },
  SocialInfoCont: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
export default Profile;
