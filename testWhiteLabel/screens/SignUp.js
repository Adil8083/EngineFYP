import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppText from '../components/common/AppText';
import Feather from 'react-native-vector-icons/Feather';

import AppView from '../components/common/AppView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../components/common/AppButton';
import colors from '../Theme/colors';

export default function SignUp() {
  return (
    <AppView ViewStyle={{width: '100%', marginTop: 0}}>
      <View
        style={{
          height: '40%',
          backgroundColor: colors.primary,
          borderBottomEndRadius: 500,
          justifyContent: 'center',
        }}>
        <View style={{width: 200}}>
          <AppText
            styleText={{
              fontWeight: '100',
              fontSize: 40,
              marginLeft: 20,
              marginTop: 30,
            }}>
            Create Account
          </AppText>
        </View>
      </View>
      <View
        style={{
          height: '60%',
          backgroundColor: colors.screenColor,
          width: '100%',
          alignItems: 'center',
          marginTop: 30,
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
          <Feather name="user" size={22} color={colors.primary} />
          <TextInput placeholder="name" maxLength={20} style={styles.input} />
        </View>
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
        <TouchableOpacity style={{alignSelf: 'flex-end'}}></TouchableOpacity>
        <View style={{marginTop: 20}}>
          <AppButton
            styleButton={{
              borderRadius: 50,
              width: 310,
              height: 50,
              backgroundColor: colors.secondary,
            }}
            title="SIGNUP"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 100,
          }}>
          <AppText styleText={{color: colors.primary}}>
            Already have an account?
          </AppText>
          <TouchableOpacity>
            <AppText styleText={{color: colors.secondary}}> SIGN IN</AppText>
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
