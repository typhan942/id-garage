import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, TextInput,
  TouchableWithoutFeedback, Keyboard, Dimensions,
} from 'react-native';
import { useDispatch, connect } from 'react-redux';

import PropTypes from 'prop-types';
import colors from '../../assets/css/style-colors';
import logo2 from '../../assets/images/src_assets_images_logo2.png';
import dataLogin from '../../assets/api-data/dataLogin';
import Button from '../../assets/generic-components/button';
import SelectLanguage from '../sidebar/selectLanguage';

const mapStateToProps = (state) => ({
  ...state,
});

const Signin = (props) => {
  const screenHeight = Math.round(Dimensions.get('window').height);

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      paddingTop: 20,
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.veryPaleGrey,
      height: screenHeight,
    },
    title: {
      flexDirection: 'row',
      alignItems: 'center',
      flexGrow: 1,
    },
    mgTitle: {
      marginTop: 10,
      marginBottom: 10,
    },
    for: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 10,
    },
    horizontal: {
      marginLeft: 20,
    },
    connect: {
      marginLeft: 20,
    },
    email: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      marginTop: 20,
    },
    emailPass: {
      marginLeft: 20,
      marginRight: 20,
    },
    resetPass: {
      marginLeft: 20,
      marginRight: 20,
    },
    change: {
      marginRight: 20,
    },
    emailLabel: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.slateGrey,
      marginBottom: 5,
      marginTop: 5,
    },
    underline: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.dark,
      textDecorationLine: 'underline',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: colors.white,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.perso,
    },
    content: {
      marginLeft: 20,
    },
    footer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 0,
      marginRight: 0,
      backgroundColor: colors.white,
      borderTopWidth: 1,
      borderTopColor: colors.WhiteDark,
      paddingTop: 5,
      paddingBottom: 5,
    },
    leafLeft: {
      color: colors.leaf,
      fontSize: 26,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    leaf: {
      color: colors.leaf,
      fontSize: 26,
      fontWeight: 'bold',
    },
    red: {
      fontSize: 14,
      fontWeight: 'normal',
      color: 'red',
    },
    greyishBrown: {
      color: colors.greyishBrown,
      fontSize: 26,
      fontWeight: 'bold',
    },
    leafHeader: {
      color: colors.leaf,
      fontSize: 16,
      fontWeight: 'bold',
    },
    greyishBrownHeader: {
      color: colors.greyishBrown,
      fontSize: 16,
      fontWeight: 'bold',
    },
    dark: {
      color: colors.black,
      fontFamily: 'GothamBold',
      fontSize: 22,
    },
    logo: {
      height: 55,
      width: 55,
      resizeMode: 'contain',
    },
    input: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: colors.white,
      color: colors.dark,
      fontSize: 13,
      fontFamily: 'GothamMedium',
      height: 42,
      paddingLeft: 20,
    },
    without: {
      backgroundColor: colors.veryPaleGrey,
    },
    spacer45: {
      flexBasis: '45%',
    },
    mgL20: {
      marginLeft: 20,
    },
  });

  const dispatch = useDispatch();

  const {
    navigation, languageReducer,
  } = props;
  const lg = languageReducer.language;

  const [email, onChangeEmail] = useState('garagetest@fidesio.com');
  const [password, onChangePassword] = useState('Fidesio123!');
  const [error, setError] = useState([false, '']);

  function handleLogin() {
    const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
    let index = 0;
    if (!password && !email) {
      setError([true, lg.login.emailPassword]);
    } else if (!email) {
      setError([true, lg.login.email]);
    } else if (!password) {
      setError([true, lg.login.password]);
    } else if (!email.match(mail)) {
      setError([true, lg.login.emailPattern]);
      setError([true, lg.login.passwordPattern]);
    } else if (!password.match(passw)) {
      setError([true, lg.login.passwordPattern]);
    } else if (dataLogin[0].users.find(
      (x, i) => {
        if (x.email === email) {
          index = parseInt(i);
          return x.email === email;
        }
        return true;
      },
    )) {
      setError([false, '']);
      // user
      if (dataLogin[0].users[index].password === password) {
        dispatch({ type: 'LOGIN', payload: true });
        // navigation.navigate('Connection')
      } else {
        setError([true, lg.login.incorrect]);
      }
    } else {
      setError([true, lg.login.exist]);
    }
  }

  return (
    <TouchableWithoutFeedback styles={styles.without} onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.root}>
        <View style={styles.wrap}>
          <View style={styles.header}>
            <View style={[styles.title, styles.mgL20]}>
              <Text style={styles.leafHeader}>MY</Text>
              <Text style={styles.greyishBrownHeader}>GARAGE</Text>
            </View>
            <View style={styles.spacer45}>
              <SelectLanguage />
            </View>
          </View>
          <View style={styles.horizontal}>
            <View style={[styles.title, styles.mgTitle]}>
              <Image style={styles.logo} source={logo2} />
              <Text style={styles.leafLeft}>ID</Text>
              <Text style={styles.greyishBrown}>GARAGES</Text>
              <Text style={styles.leaf}>.</Text>
              <Text style={styles.greyishBrown}>com</Text>
            </View>
          </View>
          <View style={styles.connect}>
            <Text style={styles.dark}>{lg.login.title}</Text>
          </View>
          {
                error[0] === true && (
                <View style={styles.connect}>
                  <Text style={styles.red}>
                    {error[1]}
                  </Text>
                </View>
                )
              }
          <View style={styles.email}>
            <Text style={styles.emailLabel}>{lg.login.emailField}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.emailPass}>
            <Text style={styles.emailLabel}>{lg.login.passwordField}</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              onChangeText={(text) => onChangePassword(text)}
              value={password}
            />
          </View>
          <View style={styles.resetPass}>
            <TouchableOpacity style={styles.for} onPress={() => navigation.navigate('resetPassword')}>
              <Text style={styles.underline}>{lg.login.forgotPassword}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.change}>
            <TouchableOpacity style={styles.for} onPress={() => navigation.navigate('reset')}>
              <Text style={styles.underline}>{lg.loginMobile.changedPassword}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content} />
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Button title={lg.login.connectButton} theme="dark" large={340} onPress={() => handleLogin()} />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

Signin.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
};

Signin.defaultProps = {
  email: '',
  password: '',
};

export default connect(mapStateToProps)(Signin);
