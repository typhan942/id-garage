import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions, Keyboard, SafeAreaView,
  StyleSheet, TouchableWithoutFeedback, View,
} from 'react-native';
import { connect } from 'react-redux';
import Web from './components/web';
import Perso from './components/perso';
import Total from './components/total';
import colors from '../../assets/css/style-colors';
import allActions from '../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const Command = (props) => {
  const {
    navigation, calendarReducer, command,
  } = props;

  const { dataForCommand } = calendarReducer;

  command(dataForCommand);

  const tab = parseInt(Math.round(Dimensions.get('window').width)) - 64;
  const button = parseInt(Math.round(Dimensions.get('window').width)) - 32;
  const price = parseInt(Math.round(Dimensions.get('window').width)) / 2;

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: colors.veryPaleGrey,
      marginTop: -33,
    },
    header: {
      flexDirection: 'column',
      flex: 1,
      width: 100,
      marginLeft: 30,
      marginTop: 20,
    },

    footer: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      borderTopWidth: 0.3,
      borderTopColor: colors.lightGreyBlue,
      backgroundColor: 'white',
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 8,
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
      paddingBottom: 5,
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
    whiteTotalFinal: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.dark,
      marginLeft: 10,
    },
    contentTotal: {
      flexDirection: 'column',
      flex: 1,
      paddingTop: 25,
      backgroundColor: colors.veryPaleGrey,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 25,
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
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <SafeAreaView style={styles.root}>
          { dataForCommand.quotes.map((quote, i) => (
            <View key={i} style={styles.content}>
              { dataForCommand.rdv === 'web' ? (
                <Web dataForCommand={dataForCommand} quote={quote} i={i} navigation={navigation} />
              ) : (
                <>
                  <Perso
                    dataForCommand={dataForCommand}
                    quote={quote}
                    i={i}
                    navigation={navigation}
                  />
                </>
              )}
            </View>
          ))}
          <View style={styles.contentTotal}>
            <Total dataForCommand={dataForCommand} navigation={navigation} />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

Command.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  command: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Command);
