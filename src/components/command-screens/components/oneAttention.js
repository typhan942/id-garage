import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../assets/css/style-colors';
import alertIcon from '../../../assets/images/command/alert.png';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const OneAttention = (props) => {
  const {
    languageReducer,
  } = props;

  const lg = languageReducer.language;
  const middle = (parseInt(Math.round(Dimensions.get('window').width)) / 2) - 32;
  const tab = parseInt(Math.round(Dimensions.get('window').width)) - 64;
  const button = parseInt(Math.round(Dimensions.get('window').width)) - 32;
  const price = parseInt(Math.round(Dimensions.get('window').width)) / 2;
  const note = parseInt(Math.round(Dimensions.get('window').width)) / 3;

  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 8,
    },
    charge: {
      color: colors.slateGrey,
      paddingBottom: 5,
    },
    date: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.dark,
      paddingBottom: 5,
    },
    content: {
      flexDirection: 'column',
      flex: 1,
      paddingTop: 10,
      backgroundColor: colors.white,
      paddingLeft: 16,
      paddingRight: 16,
      borderTopWidth: 1,
      borderTopColor: colors.veryLightBlue,
      paddingBottom: 25,
    },
    valid: {
      backgroundColor: colors.mediumGreen,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 4,
      paddingBottom: 4,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 'bold',
    },
    toValidate: {
      backgroundColor: colors.azure,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 4,
      paddingBottom: 4,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 'bold',
    },
    problems: {
      backgroundColor: colors.brightOrange,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 4,
      paddingBottom: 4,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 'bold',
    },
    canceled: {
      backgroundColor: colors.dark,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 4,
      paddingBottom: 4,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 'bold',
    },
    wallet: {
      backgroundColor: colors.dark,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 4,
      paddingBottom: 4,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 'bold',
    },
    walletAdmin: {
      backgroundColor: colors.yellow,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 4,
      paddingBottom: 4,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 'bold',
    },
    perso: {
      backgroundColor: '#aaaec5',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 4,
      paddingBottom: 4,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 'bold',
    },
    buttonQuote: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
    },
    horizon: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    Icon: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
    Text: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.slateGrey,
      paddingBottom: 15,
      paddingTop: 15,
      paddingLeft: 10,
    },
    dark: {
      fontSize: 11,
      fontWeight: 'bold',
      color: colors.white,
    },
    light: {
      color: colors.dark,
      fontSize: 11,
      fontWeight: 'bold',
    },
    buttonSimpleLight: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 12,
      borderRadius: 5,
      borderColor: colors.veryLightBlue,
      borderWidth: 1,
      width: middle,
    },
    buttonSimpleDark: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.dark,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 12,
      borderRadius: 5,
      width: middle,
      marginRight: 32,
    },
    buttonCanceledDark: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.dark,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 12,
      borderRadius: 5,
      width: button,
    },
    buttonNote: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.dark,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 12,
      borderRadius: 5,
      width: note,
    },
    table: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginTop: 20,
    },
    bloc: {
      flexDirection: 'column',
      backgroundColor: colors.veryPaleGrey,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 5,
      marginBottom: 10,
      borderRadius: 8,
    },
    horizonBloc: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      width: tab,
    },
    verticalBloc: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    titleBloc: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.dark,
      paddingBottom: 5,
    },
    subtitleBloc: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.dark,
    },
    logoQuote: {
      height: 35,
      width: 35,
      resizeMode: 'contain',
    },
    radius: {
      backgroundColor: colors.white,
      borderRadius: 8,
      padding: 5,
      borderWidth: 1,
      borderColor: colors.veryLightBlue,
      marginLeft: 5,
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 100 / 2,
      backgroundColor: colors.veryLightBlue,
    },
    logoLess: {
      height: 35,
      width: 35,
      resizeMode: 'contain',
    },
    horizonPrice: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      borderTopWidth: 1,
      borderTopColor: colors.veryLightBlue,
    },
    horizonPriceTotal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 5,
      borderTopWidth: 1,
      borderTopColor: colors.veryLightBlue,
    },
    horizonPriceWithout: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
    },
    titlePrice: {
      fontSize: 14,
      fontWeight: 'normal',
      color: colors.dark,
    },
    titlePriceTotal: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.dark,
    },
    subtitlePrice: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.dark,
    },
    subtitlePriceTotal: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.dark,
    },
    titlePriceCoupon: {
      fontSize: 14,
      fontWeight: 'normal',
      color: colors.coral,
    },
    subtitlePriceCoupon: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.coral,
    },
    amountTitle: {
      fontSize: 14,
      fontWeight: 'normal',
      color: colors.dark,
      marginBottom: 20,
    },
    amountSubtitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.dark,
      marginBottom: 5,
    },
    whiteBloc: {
      flexDirection: 'column',
      backgroundColor: colors.white,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 5,
      marginBottom: 25,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    whiteHorizonBloc: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      width: tab,
    },
    whiteTitleBloc: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.dark,
    },
    hoz: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    hozBloc: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#feeceb',
      marginTop: 10,
      marginBottom: 1,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 15,
      paddingTop: 15,
      width: button,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    logoAlert: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
      marginRight: 15,
    },
    hozAlertBloc: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#feeceb',
      marginTop: 1,
      marginBottom: 10,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 15,
      paddingTop: 15,
      width: button,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
    subtitleAlertBloc: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.dark,
    },
    verticalPrice: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: price,
    },
    verticalPriceSpecial: {
      flexDirection: 'row',
      borderTopColor: colors.veryLightBlue,
      borderTopWidth: 1,
      flexWrap: 'wrap',
      paddingTop: 15,
      marginBottom: 10,
      width: tab,
    },
    note: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.dark,
      marginTop: 5,
      marginBottom: 15,
    },
    noteInput: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.slateGrey,
      backgroundColor: colors.veryPaleGrey,
      borderRadius: 8,
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 15,
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99,
    },
  });

  const [alertTotal, onChangeAlertTotal] = React.useState(true);

  function handleErrorTotal() {
    onChangeAlertTotal(!alertTotal);
  }

  return (
    <>
      {
              alertTotal === true ? (
                <TouchableOpacity style={styles.hozBloc} onPress={handleErrorTotal}>
                  <View style={styles.hoz}>
                    <Image style={styles.logoAlert} source={alertIcon} />
                    <Text style={styles.subtitleBloc}>
                      {lg.commandMobile.attention}
                    </Text>
                  </View>

                  <Ionicons name="ios-arrow-up" size={15} color={colors.coral} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.hozBloc} onPress={handleErrorTotal}>
                  <View style={styles.hoz}>
                    <Image style={styles.logoAlert} source={alertIcon} />
                    <Text style={styles.subtitleBloc}>
                      {lg.commandMobile.attention}
                    </Text>
                  </View>

                  <Ionicons name="ios-arrow-down" size={15} color={colors.coral} />
                </TouchableOpacity>
              )
          }

      {
              alertTotal === true ? (
                <View style={styles.hozAlertBloc}>
                  <View style={styles.hoz}>
                    <Text style={styles.subtitleAlertBloc}>
                      {lg.commandMobile.attentionText}
                    </Text>
                  </View>
                </View>
              ) : (
                <>
                </>
              )
          }
    </>
  );
};

OneAttention.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneAttention);
