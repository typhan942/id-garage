import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import colors from '../../assets/css/style-colors';
import logo2 from '../../assets/images/src_assets_images_logo2.png';
import Button from '../../assets/generic-components/button';
import InputLabel from '../../assets/generic-components/inputLabel';

const mapStateToProps = (state) => ({
  ...state,
});

const Reset = (props) => {
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
    },

    horizontal: {
      marginLeft: 20,
    },
    connect: {
      marginLeft: 20,
      marginRight: 20,
    },

    header: {
      paddingTop: 10,
      paddingLeft: 20,
      paddingBottom: 10,
      backgroundColor: colors.white,
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
      fontSize: 20,
      color: colors.black,
      fontWeight: 'bold',
    },
    logo: {
      height: 55,
      width: 55,
      resizeMode: 'contain',
    },
    without: {
      backgroundColor: colors.veryPaleGrey,
    },
    error: {
      fontSize: 10,
      color: colors.problems,
    },
    padding20: {
      padding: 20,
    },
  });

  const {
    navigation, languageReducer,
  } = props;
  const lg = languageReducer.language;

  const {
    control, handleSubmit, errors, watch,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = () => {
    navigation.navigate('Sigin');
  };

  return (
    <TouchableWithoutFeedback styles={styles.without} onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.root}>
        <View style={styles.wrap}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.leafHeader}>MY</Text>
              <Text style={styles.greyishBrownHeader}>GARAGE</Text>
            </View>
          </View>
          <View style={styles.horizontal}>
            <View style={styles.title}>
              <Image style={styles.logo} source={logo2} />
              <Text style={styles.leafLeft}>ID</Text>
              <Text style={styles.greyishBrown}>GARAGES</Text>
              <Text style={styles.leaf}>.</Text>
              <Text style={styles.greyishBrown}>com</Text>
            </View>
          </View>

          <View style={styles.connect}>
            <Text style={styles.dark}>{lg.resetPassword.passwordConfirm}</Text>
          </View>
          <View>

            <View style={styles.padding20}>
              <Controller
                as={(
                  <InputLabel
                    errors={errors.newPassword}
                    label={lg.rates.newPassword}
                    secureTextEntry
                    returnKeyType="next"
                  >
                    {errors.newPassword && errors.newPassword.type === 'required' && (
                      <Text style={styles.error}>
                        {`⚠ ${lg.rates.requiredField}`}
                      </Text>
                    )}
                    { errors.newPassword && errors.newPassword.type === 'pattern' && (
                      <Text style={styles.error}>
                        {`⚠ ${lg.rates.messagePassword}`}
                      </Text>
                    )}
                  </InputLabel>
                          )}
                control={control}
                name="newPassword"
                onChange={(args) => args[0].nativeEvent.text}
                rules={{ required: true, pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/ } }}
              />
            </View>

            <View style={styles.padding20}>
              <Controller
                as={(
                  <InputLabel
                    errors={errors.confirmPassword}
                    label={lg.rates.confirmPassword}
                    secureTextEntry
                    returnKeyType="done"
                  >
                    { errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                    <Text style={styles.error}>
                      {`⚠ ${lg.rates.requiredField}`}
                    </Text>
                    )}
                    {errors.confirmPassword && (
                    <Text style={styles.error}>
                      {`⚠ ${lg.rates.difference}`}
                    </Text>
                    ) }
                  </InputLabel>
                          )}
                control={control}
                name="confirmPassword"
                onChange={(args) => args[0].nativeEvent.text}
                rules={{
                  required: true,
                  validate: (value) => value === watch('newPassword'),
                }}
              />
            </View>
          </View>

          <View style={styles.content}>
            <View style={styles.title} />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.button}>
            <Button title={lg.resetPassword.confirmButton} theme="dark" large={340} onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

Reset.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Reset);
