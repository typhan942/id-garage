import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image, LayoutAnimation,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../../assets/css/style-colors';
import logoIcon from '../../../assets/images/src_assets_images_logo1.png';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const Table = (props) => {
  const {
    lg,
  } = props;

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
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.dark,
      paddingBottom: 5,
    },
    subtitleBloc: {
      fontSize: 13,
      fontFamily: 'GothamBold',
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
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      borderTopWidth: 1,
      borderTopColor: colors.WhiteDark,
      marginLeft: -10,
      marginRight: -10,
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
      fontFamily: 'GothamBold',
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
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.dark,
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
  });

  const [display, onChangeDisplay] = React.useState([false, false]);
  const [table] = React.useState([0, 1]);

  function handleDisplay(index) {
    const array = [...display];
    array[index] = !array[index];
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onChangeDisplay(array);
  }

  return (
    <>
      { table.map((item, index) => (
        <View key={index}>

          <View style={styles.bloc}>
            <View style={styles.horizonBloc}>
              <View style={styles.verticalBloc}>
                <Text style={styles.titleBloc}>
                  Filtre Habitacle (pièces)
                </Text>
                <Text style={styles.subtitleBloc}>
                  Référence : AHC191 premium
                </Text>
              </View>
              <View style={styles.radius}>
                <Image style={styles.logoQuote} source={logoIcon} />
              </View>
              { display[index] === false ? (
                <TouchableOpacity style={styles.circle} onPress={() => handleDisplay(index)}>
                  <View style={{
                    width: 20,
                    borderTopColor: colors.slateGrey,
                    borderTopWidth: 2,
                    top: 24,
                    left: 15.5,
                  }}
                  />
                  <View style={{
                    width: 20,
                    borderTopColor: colors.slateGrey,
                    borderTopWidth: 2,
                    top: 22,
                    left: 15.5,
                    transform: [{ rotate: '90deg' }],
                  }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.circle} onPress={() => handleDisplay(index)}>
                  <View style={{
                    width: 20,
                    borderTopColor: colors.slateGrey,
                    borderTopWidth: 2,
                    top: 24,
                    left: 15.5,
                  }}
                  />
                </TouchableOpacity>
              )}
            </View>

            { display[index] === false ? (
              <>

              </>
            ) : (
              <>
                <View style={styles.horizonPrice}>
                  <Text style={styles.titlePrice}>
                    {lg.commandMobile.unitPrice}
                  </Text>
                  <Text style={styles.subtitlePrice}>
                    27,64
                  </Text>
                </View>
                <View style={styles.horizonPrice}>
                  <Text style={styles.titlePrice}>
                    {lg.commandMobile.quantity}
                  </Text>
                  <Text style={styles.subtitlePrice}>
                    1,00
                  </Text>
                </View>
                <View style={styles.horizonPrice}>
                  <Text style={styles.titlePrice}>
                    {lg.commandMobile.discount}
                  </Text>
                  <Text style={styles.subtitlePrice}>
                    11,06 (40%)
                  </Text>
                </View>
                <View style={styles.horizonPrice}>
                  <Text style={styles.titlePrice}>
                    {lg.commandMobile.totalHT}
                  </Text>
                  <Text style={styles.subtitlePrice}>
                    16,58
                  </Text>
                </View>
              </>
            )}

            <View style={styles.horizonPrice}>
              <Text style={styles.titlePrice}>
                {lg.commandMobile.totalTTC}
              </Text>
              <Text style={styles.subtitlePrice}>
                19,90
              </Text>
            </View>

          </View>
        </View>
      ))}
    </>

  );
};

Table.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
