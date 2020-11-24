import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../../assets/css/style-colors';
import carIcon from '../../../assets/images/command/car.png';
import carIconRed from '../../../assets/images/command/carred.png';
import clockIcon from '../../../assets/images/command/clock.png';
import allActions from '../../../redux/actions';
import Attention from './attention';
import Status from './status';
import Table from './table';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const Web = (props) => {
  const {
    navigation, languageReducer, setDataForCommand, dataForCommand, quote, i,
  } = props;

  const lg = languageReducer.language;

  const middle = (parseInt(Math.round(Dimensions.get('window').width)) / 2) - 32;
  const tab = parseInt(Math.round(Dimensions.get('window').width)) - 64;
  const button = parseInt(Math.round(Dimensions.get('window').width)) - 32;

  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 8,
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
      fontSize: 15,
      fontFamily: 'GothamMedium',
      color: colors.slateGrey,
      paddingBottom: 15,
      paddingTop: 15,
      paddingLeft: 10,
    },
    dark: {
      fontSize: 15,
      fontFamily: 'GothamMedium',
      color: colors.white,
    },
    light: {
      color: colors.dark,
      fontSize: 15,
      fontFamily: 'GothamMedium',
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
      fontWeight: 'bold',
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
    titlePrice: {
      fontSize: 13,
      fontFamily: 'GothamBook',
      color: colors.dark,
    },
    subtitlePrice: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.dark,
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
      fontSize: 13,
      fontFamily: 'GothamBold',
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
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.dark,
    },
    note: {
      fontSize: 18,
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
  });

  return (
    <>
      <Status dataForCommand={dataForCommand} quote={quote} />
      { dataForCommand.quoteType === 'without' ? (
        <>
          <View style={styles.horizon}>
            <Image style={styles.Icon} source={carIcon} />
            <Text style={styles.Text}>{quote.type}</Text>
          </View>
          <View style={styles.horizon}>
            { quote.status === 'toValidate' ? (
              <>
                <TouchableOpacity
                  style={styles.buttonSimpleDark}
                  onPress={() => {
                    dataForCommand.quotes[i].status = 'valid';
                    setDataForCommand(dataForCommand);
                  }}
                >
                  <Text style={styles.dark}>{lg.commandMobile.valid}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSimpleLight} onPress={() => navigation.navigate('Signal')}>
                  <Text style={styles.light}>{lg.commandMobile.signal}</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
              </>
            )}
          </View>
          <View style={styles.horizon}>
            <Image style={styles.Icon} source={clockIcon} />
            <Text style={styles.Text}>
              {quote.hours}
              h
            </Text>
          </View>

          <Text style={styles.note}>{lg.command.detail.nodeRDV}</Text>
          <Text style={styles.noteInput}>{dataForCommand.note}</Text>

        </>
      ) : (
        <>
          <View style={styles.horizon}>
            <Image style={styles.Icon} source={carIconRed} />
            <Text style={styles.Text}>{quote.type}</Text>
          </View>
          <View style={styles.horizon}>
            { quote.status === 'toValidate' ? (
              <>
                <TouchableOpacity
                  style={styles.buttonSimpleDark}
                  onPress={() => {
                    dataForCommand.quotes[i].status = 'valid';
                    setDataForCommand(dataForCommand);
                  }}
                >
                  <Text style={styles.dark}>{lg.commandMobile.valid}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSimpleLight} onPress={() => navigation.navigate('Signal')}>
                  <Text style={styles.light}>{lg.commandMobile.signal}</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>

              </>
            )}
          </View>

          <Attention i={i} />

          <View style={styles.table}>
            <Table lg={lg} />
            <View style={styles.whiteBloc}>
              <View style={styles.whiteHorizonBloc}>
                <Text style={styles.whiteTitleBloc}>
                  {lg.commandMobile.total}
                </Text>
              </View>
              <View style={styles.horizonPrice}>
                <Text style={styles.titlePrice}>
                  {lg.commandMobile.discount}
                </Text>
                <Text style={styles.subtitlePrice}>
                  11,97
                </Text>
              </View>
              <View style={styles.horizonPrice}>
                <Text style={styles.titlePrice}>
                  {lg.commandMobile.totalHT}
                </Text>
                <Text style={styles.subtitlePrice}>
                  24,77
                </Text>
              </View>
              <View style={styles.horizonPriceTotal}>
                <Text style={styles.titlePrice}>
                  {lg.commandMobile.totalTTC}
                </Text>
                <Text style={styles.subtitlePrice}>
                  29,73
                </Text>
              </View>

            </View>

          </View>
        </>
      )}
    </>

  );
};

Web.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  dataForCommand: PropTypes.objectOf(PropTypes.any).isRequired,
  setDataForCommand: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  quote: PropTypes.objectOf(PropTypes.any).isRequired,
  i: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Web);
