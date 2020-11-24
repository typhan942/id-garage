import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Keyboard, SafeAreaView,
  StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../../assets/css/style-colors';
import planningIcon from '../../../assets/images/command/Planning-green.png';

const mapStateToProps = (state) => ({
  ...state,
});

const CommandPlanning = (props) => {
  const {
    navigation, languageReducer, calendarReducer,
  } = props;

  const lg = languageReducer.language;

  const { dataForCommand } = calendarReducer;

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: colors.veryPaleGrey,
    },
    car: {
      flexDirection: 'column',
      marginTop: 15,
      marginBottom: -25,
      paddingLeft: 16,
      paddingRight: 16,
      height: 100,
      backgroundColor: colors.paleGrey,
    },
    carType: {
      backgroundColor: colors.coral,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 6,
      paddingBottom: 6,
      color: colors.white,
      borderRadius: 5,
      fontSize: 11,
      fontFamily: 'GothamBold',
      overflow: 'hidden',
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 8,
    },
    charge: {
      color: colors.dark,
      paddingBottom: 5,
      fontSize: 14,
      fontFamily: 'GothamBook',
    },
    date: {
      fontSize: 16,
      fontFamily: 'GothamMedium',
      color: colors.dark,
      paddingBottom: 5,
    },
    carVertical: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 25,
    },
    iconTouch: {
      paddingBottom: 5,
      paddingLeft: 20,
      paddingRight: 10,
    },
    icon: {
      height: 20,
      width: 20,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.root}>

        <View style={styles.car}>
          <Text style={styles.charge}>{lg.command.lateral.carCare}</Text>
          <View style={styles.carVertical}>
            <Text style={styles.date}>
              {dataForCommand.date}
              {' '}
              -
              {' '}
              {dataForCommand.Commandtime}
            </Text>
            {
                              dataForCommand.rdv === 'perso' ? (
                                <TouchableOpacity style={styles.iconTouch} onPress={() => navigation.navigate('Date')}>
                                  <Image style={styles.icon} source={planningIcon} />
                                </TouchableOpacity>
                              ) : (
                                <>
                                </>
                              )
                          }

          </View>
          <Text style={styles.charge}>{dataForCommand.information.back}</Text>
          <View style={styles.button}>
            <Text style={styles.carType}>{dataForCommand.information.type}</Text>
          </View>
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

CommandPlanning.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(CommandPlanning);
