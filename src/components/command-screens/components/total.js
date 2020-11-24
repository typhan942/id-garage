import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions, StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../assets/css/style-colors';
import OneAttention from './oneAttention';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const Total = (props) => {
  const {
    languageReducer, dataForCommand,
  } = props;

  const lg = languageReducer.language;

  const tab = parseInt(Math.round(Dimensions.get('window').width)) - 64;
  const button = parseInt(Math.round(Dimensions.get('window').width)) - 32;
  const price = parseInt(Math.round(Dimensions.get('window').width)) / 2;

  const styles = StyleSheet.create({
    horizonPrice: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 15,
      paddingLeft: 15,
      borderTopWidth: 1,
      borderTopColor: colors.veryLightBlue,
    },
    horizonPriceTotal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 5,
      paddingRight: 15,
      paddingLeft: 15,
      borderTopWidth: 1,
      borderTopColor: colors.veryLightBlue,
    },
    horizonPriceWithout: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 15,
      paddingLeft: 15,
    },
    titlePrice: {
      fontSize: 13,
      fontFamily: 'GothamBook',
      color: colors.dark,
    },
    titlePriceTotal: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.dark,
    },
    subtitlePrice: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.dark,
    },
    subtitlePriceTotal: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.dark,
    },
    titlePriceCoupon: {
      fontSize: 13,
      fontFamily: 'GothamBook',
      color: colors.coral,
    },
    subtitlePriceCoupon: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.coral,
    },
    amountTitle: {
      fontSize: 13,
      fontFamily: 'GothamBook',
      color: colors.dark,
      marginBottom: 20,
    },
    amountSubtitle: {
      fontSize: 14,
      fontFamily: 'GothamMedium',
      color: colors.dark,
      marginBottom: 5,
    },
    whiteBloc: {
      flexDirection: 'column',
      backgroundColor: colors.white,
      paddingRight: 0,
      paddingLeft: 0,
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
    whiteBlocCus: {
      paddingRight: 15,
      paddingLeft: 15,
    },
    whiteHorizonBloc: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      width: tab,
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
      backgroundColor: colors.rougeOpacity,
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
    whiteTotalFinal: {
      fontSize: 13,
      fontFamily: 'GothamBold',
      color: colors.dark,
      marginLeft: 10,
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
    m5: {
      marginTop: 5,
    },
    pl15: {
      paddingLeft: 15,
    },
  });

  // const [alertTotal, onChangeAlertTotal] = React.useState(true);
  // function handleErrorTotal() {onChangeAlertTotal(!alertTotal); }

  return (
    <>
      { dataForCommand.quoteType === 'with' && (
      <View style={styles.whiteBloc}>

        <View style={[styles.whiteHorizonBloc, styles.pl15]}>
          <Ionicons name="ios-calculator" size={20} color={colors.mediumGreen} />
          <Text style={[styles.whiteTotalFinal, styles.m5]}>
            {lg.commandMobile.total}
          </Text>
        </View>

        <View style={styles.horizonPrice}>
          <Text style={styles.titlePrice}>
            {lg.command.total.totalHorsRemise}
          </Text>
          <Text style={styles.subtitlePrice}>
            215,08
          </Text>
        </View>
        <View style={styles.horizonPrice}>
          <Text style={styles.titlePrice}>
            {lg.command.total.totalAvecRemiseCoupon}
          </Text>
          <Text style={styles.subtitlePrice}>
            71,84
          </Text>
        </View>
        <View style={styles.horizonPrice}>
          <Text style={styles.titlePrice}>
            {lg.command.total.totalHT}
          </Text>
          <Text style={styles.subtitlePrice}>
            143,25
          </Text>
        </View>
        <View style={styles.horizonPrice}>
          <View style={styles.verticalPrice}>
            <Text style={styles.titlePrice}>
              {lg.command.total.tva}
            </Text>
          </View>
          <Text style={styles.subtitlePrice}>
            11,89
          </Text>
        </View>
        <View style={styles.horizonPriceTotal}>
          <Text style={styles.titlePriceTotal}>
            {lg.command.total.montantFacturer}
          </Text>
          <Text style={styles.subtitlePriceTotal}>
            171,89
          </Text>
        </View>
        <View style={styles.horizonPriceWithout}>
          <View style={styles.verticalPrice}>
            <Text style={styles.titlePrice}>
              {lg.command.total.fourchette}
            </Text>
          </View>
          <Text style={styles.subtitlePrice}>
            171,89
          </Text>
        </View>
        <View style={styles.horizonPriceWithout}>
          <Text style={styles.titlePriceCoupon}>
            Code promo TOP15 *
          </Text>
          <Text style={styles.subtitlePriceCoupon}>
            -15,00 TTC
          </Text>
        </View>

      </View>
      )}

      { (dataForCommand.rdv === 'web' && dataForCommand.quoteType === 'without') && (
      <View style={styles.whiteBloc}>

        <View style={[styles.whiteHorizonBloc, styles.pl15]}>
          <Ionicons name="ios-calculator" size={20} color={colors.mediumGreen} />
          <Text style={styles.whiteTotalFinal}>
            {lg.commandMobile.total}
          </Text>
        </View>

        <View style={styles.horizonPriceWithout}>
          <View style={styles.verticalPriceSpecial}>
            <Text style={styles.titlePrice}>
              {lg.command.total.textLong}
            </Text>
          </View>
        </View>

      </View>
      )}

      { dataForCommand.rdv === 'web' && dataForCommand.quoteType === 'with'
        ? (
          <>
            <View style={[styles.whiteBloc, styles.whiteBlocCus]}>
              <View style={styles.whiteHorizonBloc}>
                <Ionicons name="ios-information-circle" size={20} color={colors.mediumGreen} />
                <Text style={styles.whiteTotalFinal}>
                  {lg.command.lateral.why}
                </Text>
              </View>
              <Text style={styles.amountTitle}>
                {lg.command.lateral.textlong}
              </Text>
              <Text style={styles.amountSubtitle}>
                {lg.command.lateral.total}
                {' '}
                : 186,89 €
              </Text>
            </View>

            <View style={[styles.whiteBloc, styles.whiteBlocCus]}>
              <View style={styles.whiteHorizonBloc}>
                <Ionicons name="ios-information-circle" size={20} color={colors.mediumGreen} />
                <Text style={styles.whiteTotalFinal}>
                  {lg.command.lateral.commission}
                </Text>
              </View>
              <Text style={styles.amountTitle}>
                {lg.command.lateral.subtitle}
                {' '}
                : 15,58 € HT pour le RDV N° IDG-20200501-60481 si le client réalise une prestation
              </Text>
            </View>
          </>
        ) : (
          <>
          </>
        )}
      <OneAttention />
    </>

  );
};

Total.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  dataForCommand: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Total);
