import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo2 from '../../assets/images/src_assets_images_logo2.png';
import Button from '../../assets/generic-components/button';
import colors from '../../assets/css/style-colors';

const mapStateToProps = (state) => ({
  ...state,
});

const ResetPassword = (props) => {
  const screenHeight = Math.round(Dimensions.get('window').height);

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.veryPaleGrey,
      height: screenHeight,
    },
    title: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    horizontal: {
      marginLeft: 20,
    },
    emailLabel: {
      fontSize: 13,
      color: colors.slateGrey,
      marginBottom: 5,
      fontFamily: 'GothamMedium',
    },
    underline: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.dark,
      textDecorationLine: 'underline',
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
    greyishBrown: {
      color: colors.greyishBrown,
      fontSize: 26,
      fontWeight: 'bold',
    },
    dark: {
      fontSize: 22,
      color: colors.black,
      fontFamily: 'GothamBold',
      marginBottom: 10,
    },
    grey: {
      fontSize: 16,
      lineHeight: 20,
      color: colors.slateGrey,
      fontFamily: 'GothamBook',
      marginBottom: 20,
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
      fontSize: 14,
      fontWeight: 'bold',
      height: 42,
      paddingLeft: 20,
    },
    red: {
      fontSize: 14,
      fontWeight: 'normal',
      color: 'red',
    },
  });

  const {
    navigation, languageReducer,
  } = props;
  const lg = languageReducer.language;

  const [email, onChangeEmail] = React.useState('');
  const [error, setError] = React.useState([false, '']);

  function handleReset() {
    const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
      setError([true, lg.reset.email]);
    } else if (!email.match(mail)) {
      setError([true, lg.reset.emailPattern]);
    } else {
      setError([false, '']);
      navigation.navigate('Sigin');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.root}>
        <View style={styles.horizontal}>
          <View style={styles.title}>
            <Image style={styles.logo} source={logo2} />
            <Text style={styles.leafLeft}>ID</Text>
            <Text style={styles.greyishBrown}>GARAGES</Text>
            <Text style={styles.leaf}>.</Text>
            <Text style={styles.greyishBrown}>com</Text>
          </View>
          <View style={styles.connect}>
            <Text style={styles.dark}>{lg.resetPasswordMobile.title}</Text>
          </View>
          <View style={styles.connect}>
            <Text style={styles.grey}>
              {lg.resetPasswordMobile.subtitle}
            </Text>
          </View>
          <View style={styles.email}>
            <Text style={styles.emailLabel}>{lg.resetPasswordMobile.email}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeEmail(text)}
              value={email}
            />
            {
                error[0] === true && (
                  <View style={styles.connect}>
                    <Text style={styles.red}>
                      {error[1]}
                    </Text>
                  </View>
                )
              }
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Button title={lg.reset.button} theme="dark" large={340} onPress={() => handleReset()} />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

ResetPassword.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  email: PropTypes.string,
};

ResetPassword.defaultProps = {
  email: '',
};

export default connect(mapStateToProps)(ResetPassword);
