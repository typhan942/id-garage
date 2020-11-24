import React, { useState } from 'react';
import {
  Dimensions, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import CalendarSimple from '../../../assets/generic-components/calendarSimple';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';
import Picker from '../../../assets/generic-components/picker';

const styles = StyleSheet.create({
  containerConges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  calendarView: {
    position: 'absolute',
    backgroundColor: colors.white,
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 10,
    zIndex: 1000,
  },
  background: {
    position: 'absolute',
    backgroundColor: colors.dark,
    opacity: 0.5,
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    zIndex: 1,
  },
  texts: {
    fontWeight: 'bold',
    padding: 10,
  },
  inputFont: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 40,
    width: '47%',
    borderRadius: 8,
    backgroundColor: colors.veryPaleGrey,
  },
});

const DownArrowIcon = () => (
  <AntDesign
    name="down"
    size={14}
    color={colors.slateGrey}
  />
);

const hourSlots = [
  { label: '08h00', value: '8:00' },
  { label: '09h00', value: '9:00' },
  { label: '10h00', value: '10:00' },
  { label: '11h00', value: '11:00' },
  { label: '12h00', value: '12:00' },
  { label: '13h00', value: '13:00' },
  { label: '14h00', value: '14:00' },
  { label: '15h00', value: '15:00' },
  { label: '16h00', value: '16:00' },
  { label: '17h00', value: '17:00' },
  { label: '18h00', value: '18:00' },
];

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDate1: (data) => allActions.congesActions.setDate1(dispatch, data),
  setDate2: (data) => allActions.congesActions.setDate2(dispatch, data),
  setHour2: (data) => allActions.congesActions.setHour2(dispatch, data),
  setHour1: (data) => allActions.congesActions.setHour1(dispatch, data),
  setWeekNumber1: (data) => allActions.congesActions.setWeekNumber1(dispatch, data),
  setWeekNumber2: (data) => allActions.congesActions.setWeekNumber2(dispatch, data),
  setWeekDay1: (data) => allActions.congesActions.setWeekDay1(dispatch, data),
  setWeekDay2: (data) => allActions.congesActions.setWeekDay2(dispatch, data),
  setConges: (data) => allActions.congesActions.setConges(dispatch, data),
  setModifMode: (data) => allActions.congesActions.setModifMode(dispatch, data),
});

const AddOneDate = ({
  caseN, calendarReducer, languageReducer, setHour1, setHour2, congesReducer,
}) => {
  const { date } = calendarReducer;
  const { modif, index } = congesReducer;
  const day = date.date();
  const month = date.month();
  const year = date.year();
  const lg = languageReducer.language;
  const {
    date1, date2,
  } = modif ? congesReducer.conges[index] : congesReducer;

  const [calendarShown, setCalendarShown] = useState(false);
  const [value2show, setValue2show] = useState(null);
  const newDate = (d, m, y) => `${d} ${lg.planning.menuRight.months[m].slice(0, 3)}. ${y}`;

  function setHours(hour) {
    if (caseN === 1) {
      setHour1(hour);
    }
    if (caseN === 2) {
      setHour2(hour);
    }
    setValue2show(hour);
  }

  return (
    <>
      {calendarShown && (
      <>
        <View style={styles.background} onPress={() => setCalendarShown(false)} />
        <TouchableOpacity style={styles.calendarView}>
          <CalendarSimple conges caseN={caseN} onPress={() => setCalendarShown(false)} />
        </TouchableOpacity>
      </>
      )}
      <View style={styles.containerConges}>

        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setCalendarShown(!calendarShown)}
        >
          {caseN === 1 ? (
            <Text style={styles.inputFont}>
              {date1 || newDate(day, month, year)}
            </Text>
          ) : null }
          {caseN === 2 ? (
            <Text style={styles.inputFont}>
              {date2 || newDate(day, month, year)}
            </Text>
          ) : null }
          <DownArrowIcon />
        </TouchableOpacity>
        <Text style={styles.texts}>-</Text>

        <View style={{
          flexBasis: '41%',
        }}
        >
          <Picker
            value={value2show}
            bgGray
            icon
            placeholder={{
              label: '08h00',
              value: '8:00',
            }}
            items={hourSlots}
            onChange={(v) => setHours(v)}
          />
        </View>
      </View>
    </>
  );
};

AddOneDate.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  congesReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setHour1: PropTypes.func.isRequired,
  setHour2: PropTypes.func.isRequired,
  caseN: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddOneDate);
