import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import colors from './Theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from './components/common/AppButton';
import TextInputComponent from './components/common/TextInputComponent';
import Test from './screens/Actor/Test';
import AppView from './components/common/AppView';
import Login from './screens/Login';
export default function App() {
  const [state, setState] = useState();
  return (
    <Login />
    // <View style={styles.container}>
    //   <LinearGradient
    //     colors={[colors.GradienStartRed, colors.lightRed, colors.GradienEndRed]}
    //     style={styles.linearGradient}
    //     start={{x: 0.5, y: 0.5}}
    //     style={styles.linearGradient}>
    //     <View
    //       style={{
    //         backgroundColor: colors.lightRed,
    //         width: '50%',
    //         height: '30%',
    //         borderBottomRightRadius: 200,
    //         opacity: 0.3,
    //         alignSelf: 'flex-start',
    //       }}></View>
    //     <View style={{width: '100%', alignItems: 'center'}}>
    //       <TextInputComponent placeholder="Login" />
    //       <TextInputComponent placeholder="Password" />
    //       <AppButton title="test" styleButton={{marginTop: 20, width: '60%'}} />
    //     </View>
    //     <View
    //       style={{
    //         backgroundColor: 'red',
    //         width: '50%',
    //         height: '30%',
    //         borderTopLeftRadius: 200,
    //         opacity: 0.3,
    //         alignSelf: 'flex-end',
    //         position: 'absolute',
    //         bottom: 0,
    //       }}></View>
    //   </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});
