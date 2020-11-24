import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const Status = (props) => {
  const {
    languageReducer, dataForCommand, quote,
  } = props;

  const lg = languageReducer.language;

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
      fontFamily: 'GothamBold',
    },
    toValidate: {
      backgroundColor: colors.azure,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 4,
      color: colors.white,
      borderRadius: 4,
      fontSize: 11,
      fontFamily: 'GothamBold',
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
      fontFamily: 'GothamBold',
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
      fontFamily: 'GothamBold',
      overflow: 'hidden',
    },
    wallet: {
      backgroundColor: colors.dark,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 5,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontFamily: 'GothamBold',
      overflow: 'hidden',
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
      fontFamily: 'GothamBold',
      overflow: 'hidden',
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
      fontFamily: 'GothamBold',
      overflow: 'hidden',
    },
    buttonQuote: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
    },
  });

  return (
    <>
      { dataForCommand.quoteType === 'without' ? (
        <View style={styles.buttonQuote}>
          { quote.status === 'toValidate' ? (
            <Text style={styles.toValidate}>{lg.commandMobile.rdvWithout}</Text>
          ) : quote.status === 'valid' ? (
            <Text style={styles.valid}>{lg.commandMobile.rdvWithout}</Text>
          ) : quote.status === 'canceled' ? (
            <Text style={styles.canceled}>{lg.commandMobile.rdvWithout}</Text>
          ) : quote.status === 'problems' ? (
            <Text style={styles.problems}>{lg.commandMobile.rdvWithout}</Text>
          ) : quote.status === 'perso' ? (
            <Text style={styles.perso}>{lg.commandMobile.rdvWithout}</Text>
          ) : (
            <Text style={styles.wallet}>{lg.commandMobile.rdvWithout}</Text>
          )}
        </View>
      ) : (
        <View style={styles.buttonQuote}>
          { quote.status === 'toValidate' ? (
            <Text style={styles.toValidate}>
              {lg.commandMobile.quote}
              {quote.number}
            </Text>
          ) : quote.status === 'valid' ? (
            <Text style={styles.valid}>
              {lg.commandMobile.quote}
              {quote.number}
            </Text>
          ) : quote.status === 'canceled' ? (
            <Text style={styles.canceled}>
              {lg.commandMobile.quote}
              {quote.number}
            </Text>
          ) : quote.status === 'problems' ? (
            <Text style={styles.problems}>
              {lg.commandMobile.quote}
              {quote.number}
            </Text>
          ) : quote.status === 'perso' ? (
            <Text style={styles.perso}>
              {lg.commandMobile.quote}
              {quote.number}
            </Text>
          ) : (
            <Text style={styles.wallet}>
              {lg.commandMobile.quote}
              {quote.number}
            </Text>
          )}
        </View>
      )}
    </>

  );
};

Status.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  dataForCommand: PropTypes.objectOf(PropTypes.any).isRequired,
  quote: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Status);
