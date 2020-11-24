import React from 'react';
import moment from 'moment';
import {
  Dimensions, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setDate: (data) => allActions.calendarActions.setDate(dispatch, data),
  setScrollIndex: (data) => allActions.calendarActions.setScrollIndex(dispatch, data),
  setScrollWeekDay: (data) => allActions.calendarActions.setScrollWeekDay(dispatch, data),
});

const OneWeek = (props) => {
  const {
    week, lg, weekData, setDate, setScrollIndex, setScrollWeekDay,
  } = props;

  return (
    <>
      {weekData.data.map((oneWeekDay, index) => {
        const { closed } = oneWeekDay;
        const today = week === moment().get('week') && index === moment().weekday();

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
            justifyContent: 'space-between',
            alignItems: 'center',
            width: Dimensions.get('window').width / 6,
            backgroundColor: today ? colors.transparentGreen
              : closed ? colors.paleGrey : colors.white,
            borderRadius: 5,
            padding: 5,
          },
        });

        return (
          <TouchableOpacity
            key={index}
            onPress={() => { setDate(moment().set('week', week)); setScrollIndex(week); setScrollWeekDay(index); }}
            style={styles.weekdayBox}
          >
            <Text style={styles.dayOfWeek}>
              {lg.planning.weekdays[(index) % 7]}
            </Text>
            <View style={styles.dayBox}>
              <Text style={styles.day}>
                {moment().week(week).weekday(index).format('D')}
              </Text>
            </View>
            <Text style={styles.hours}>
              {oneWeekDay.closed ? `${lg.planning.closed}` : `${oneWeekDay.hours}h/${weekData.hours}h`}
            </Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

OneWeek.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  weekData: PropTypes.objectOf(PropTypes.any).isRequired,
  week: PropTypes.number.isRequired,
  setDate: PropTypes.func.isRequired,
  setScrollIndex: PropTypes.func.isRequired,
  setScrollWeekDay: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneWeek);
