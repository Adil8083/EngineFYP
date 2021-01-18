import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AppText from '../components/common/AppText';
import AppView from '../components/common/AppView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../components/common/AppButton';
import colors from '../Theme/colors';
import {AuthContext} from '../components/common/context';
import Api from '../constants/Api';
import {SCREENS} from '../constants/SCREENS';
import data from '../Data.json';

export default function Login({navigation}) {
  const {signIn} = useContext(AuthContext);
  const [onLogin, setOnLogin] = useState(false);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const validate = (email) => {
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return expression.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setError('*all fields are required');
    } else {
      if (!validate(email)) {
        setError('*email is not valid');
        setOnLogin(true);
      } else if (password.length < 5) {
        setError('*password length should at least be 5');
        setOnLogin(true);
      } else {
        const userData = await Api.post(`fan/login?email=${data.email}`, {
          email: email,
          password: password,
        });
        if (userData.ok) {
          setOnLogin(true);
          setError('');
          const token = userData.data.token;
          const isAdmin = userData.data.isAdmin;
          const name = userData.data.name;
          const admin = isAdmin.toString();
          signIn(email, token, admin, name);
        } else {
          setOnLogin(true);
          setError('*' + userData.data);
        }
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setOnLogin(false);
    }, 2000);
  }, [error]);
  // if (onLogin) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color={colors.secondary} />
  //     </View>
  //   );
  // }
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
            marginLeft: 35,
            marginTop: 30,
            // fontFamily: 'Lato-BoldItalic',
          }}>
          Welcome!
        </AppText>
        <AppText styleText={{marginLeft: 35, paddingTop: 5}}>
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
              defaultValue={email}
              onChangeText={(t) => setemail(t)}
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
              width: password != '' ? '74%' : '80%',
            }}>
            <MaterialCommunityIcons
              name={'lock-outline'}
              size={22}
              color={colors.primary}
            />

            <TextInput
              secureTextEntry={!show}
              defaultValue={password}
              onChangeText={(t) => setPassword(t)}
              placeholder="password"
              style={styles.input}
            />
            {password != '' && (
              <>
                {show && (
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <MaterialCommunityIcons
                      name={'eye-off-outline'}
                      size={22}
                      color={colors.secondary}
                    />
                  </TouchableOpacity>
                )}
                {!show && (
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <MaterialCommunityIcons
                      name={'eye-outline'}
                      size={22}
                      color={colors.secondary}
                    />
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </View>
        <View style={{alignSelf: 'flex-start', marginLeft: 45}}>
          <AppText styleText={{color: '#FF0000'}}>{error}</AppText>
        </View>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <AppText
            styleText={{
              color: colors.secondary,
              marginRight: 42,
              paddingTop: 5,
            }}>
            Forgot Passwword?
          </AppText>
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <AppButton
            onPress={() => {
              handleLogin();
            }}
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
            marginTop: 100,
          }}>
          <AppText styleText={{color: colors.primary}}>
            Don't have an account?
          </AppText>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.SignUp);
            }}>
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
