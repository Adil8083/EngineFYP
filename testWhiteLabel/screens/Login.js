import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppText from '../components/common/AppText';
import AppView from '../components/common/AppView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../components/common/AppButton';
import colors from '../Theme/colors';

export default function Login() {
  return (
    <AppView ViewStyle={{width: '100%', marginTop: 0}}>
      <View
        style={{
          height: '40%',
          backgroundColor: colors.primary,
          borderBottomEndRadius: 500,
          justifyContent: 'center',
        }}>
        <AppText
          styleText={{
            fontSize: 40,
            marginLeft: 20,
            marginTop: 30,
            // fontFamily: 'Lato-BoldItalic',
          }}>
          Login
        </AppText>
        <AppText styleText={{marginLeft: 20, paddingTop: 5}}>
          Please sign in to continue
        </AppText>
      </View>
      <View
        style={{
          height: '60%',
          backgroundColor: colors.screenColor,
          width: '100%',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: colors.secondary,
              margin: 10,
              width: '80%',
            }}>
            <MaterialCommunityIcons
              name={'email-outline'}
              size={22}
              color={colors.primary}
            />
            <TextInput
              maxLength={20}
              placeholder="email"
              style={styles.input}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: colors.secondary,
              margin: 10,
              width: '80%',
            }}>
            <MaterialCommunityIcons
              name={'lock-outline'}
              size={22}
              maxLength={20}
              color={colors.primary}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="password"
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <AppText
            styleText={{
              color: colors.secondary,
              marginRight: 42,
              paddingTop: 5,
            }}>
            Forgot Passwword
          </AppText>
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <AppButton
            styleButton={{
              borderRadius: 50,
              width: 310,
              height: 50,
              backgroundColor: colors.secondary,
            }}
            title="LOGIN"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 120,
          }}>
          <AppText styleText={{color: colors.primary}}>
            Don't have an account?
          </AppText>
          <TouchableOpacity>
            <AppText styleText={{color: colors.secondary}}> SIGN UP</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </AppView>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '90%',
    paddingLeft: 10,
    color: colors.secondary,
  },
});
