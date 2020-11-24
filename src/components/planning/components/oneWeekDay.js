import React from 'react';
import {
  Dimensions, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../../assets/css/style-colors';

const OneWeekDay = (props) => {
  const {
    day, index, hours, lg, weekHours, today, closed, onPress, month, year
  } = props;

  const styles = StyleSheet.create({
    dayOfWeek: {
      color: today ? colors.mediumGreen : closed ? colors.lightGreyBlue : colors.dark,
      fontFamily: 'GothamMedium',
      fontSize: 12,
    },
    dayBox: {
      backgroundColor: today ? colors.mediumGreen : 'transparent',
      width: 29,
      height: 29,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    day: {
      color: today ? colors.white : closed ? colors.lightGreyBlue : colors.dark,
      fontFamily: 'GothamMedium',
      fontSize: 16,
    },
    hours: {
      color: today ? colors.mediumGreen : colors.lightGreyBlue,
      fontSize: 10,
      fontFamily: 'GothamMedium',
    },
    weekdayBox: {
      height: 70,
      // height: 70,
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Dimensions.get('window').width / 6,
      backgroundColor: today ? colors.transparentGreen : closed ? colors.paleGrey : colors.white,
      borderRadius: 5,
      padding: 5,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.weekdayBox}>
      <Text style={styles.dayOfWeek}>{lg.planning.weekdays[(index) % 7]}</Text>
      <View style={styles.dayBox}><Text style={styles.day}>{day}</Text></View>
      <View style={styles.dayBox}><Text style={styles.day}>{month}</Text></View>
      <View style={styles.dayBox}><Text style={styles.day}>{year}</Text></View>
      <Text style={styles.hours}>{closed ? `${lg.planning.closed}` : `${hours}h/${weekHours}h`}</Text>
    </TouchableOpacity>
  );
};

OneWeekDay.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  weekHours: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  today: PropTypes.bool.isRequired,
  closed: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default OneWeekDay;
