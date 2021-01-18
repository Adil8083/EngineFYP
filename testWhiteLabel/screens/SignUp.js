import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppText from '../components/common/AppText';
import Feather from 'react-native-vector-icons/Feather';
import data from '../Data.json';
import AppView from '../components/common/AppView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../components/common/AppButton';
import colors from '../Theme/colors';
import Api from '../constants/Api';
import {SCREENS} from '../constants/SCREENS';

export default function SignUp({navigation}) {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const validate = (email) => {
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return expression.test(String(email).toLowerCase());
  };

  const handleSignUp = async () => {
    if (email === '' || name === '' || password === '') {
      setError('*all fields are required');
    } else {
      if (!validate(email)) {
        setError('*email is not valid');
      } else if (password.length < 5) {
        setError('*password length should at least be 5');
      } else {
        const user = await Api.post(`fan/signup?email=${data.email}`, {
          name: name,
          email: email,
          password: password,
        });
        if (user.ok) {
          navigation.navigate(SCREENS.Login);
        } else {
          setError('*' + user.data);
        }
      }
    }
  };

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
              marginLeft: 35,
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
            <Feather name="user" size={22} color={colors.primary} />
            <TextInput
              onChangeText={(t) => setName(t)}
              placeholder="name"
              maxLength={20}
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
              name={'email-outline'}
              size={22}
              color={colors.primary}
            />
            <TextInput
              onChangeText={(t) => setEmail(t)}
              maxLength={50}
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
              onChangeText={(t) => setPassword(t)}
              secureTextEntry={true}
              placeholder="password"
              style={styles.input}
            />
          </View>
        </View>
        <View style={{alignSelf: 'flex-start', marginLeft: 45}}>
          <AppText styleText={{color: '#FF0000'}}>{error}</AppText>
        </View>
        <View style={{marginTop: 20}}>
          <AppButton
            onPress={() => handleSignUp()}
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
            marginTop: 80,
          }}>
          <AppText styleText={{color: colors.primary}}>
            Already have an account?
          </AppText>
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.Login)}>
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
