import React from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard, SafeAreaView,
  StyleSheet, Text, TouchableWithoutFeedback, View,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../../assets/css/style-colors';

const mapStateToProps = (state) => ({
  ...state,
});

const CommandMessage = (props) => {
  const {
    languageReducer, calendarReducer,
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
      marginBottom: 25,
      paddingLeft: 16,
      paddingRight: 16,
      height: 250,
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
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.root}>

        <View style={styles.car}>
          <Text style={styles.charge}>{lg.command.lateral.comment}</Text>
          <Text style={styles.date}>
            {
                  dataForCommand.information.comment === '' ? (
                    <>
                      {lg.commandMobile.noComment}
                    </>
                  ) : (
                    <>
                      {dataForCommand.information.comment}
                    </>
                  )
                }
          </Text>
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

CommandMessage.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(CommandMessage);
