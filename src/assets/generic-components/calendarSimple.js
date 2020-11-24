import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import allActions from '../../redux/actions';
import colors from '../css/style-colors';
import styles from './calendarStyles';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setScrollWeek: (data) => allActions.calendarActions.setScrollIndex(dispatch, data),
  setScrollWeekDay: (data) => allActions.calendarActions.setScrollWeekDay(dispatch, data),
  setDaysInMonth: (data) => allActions.calendarActions.setDaysInMonth(dispatch, data),
  showCalendar: (data) => allActions.calendarActions.showCalendar(dispatch, data),
  setDate: (data) => allActions.calendarActions.setDate(dispatch, data),
  setDate1: (data) => allActions.congesActions.setDate1(dispatch, data),
  setDate2: (data) => allActions.congesActions.setDate2(dispatch, data),
  setHour2: (data) => allActions.congesActions.setHour2(dispatch, data),
  setHour1: (data) => allActions.congesActions.setHour1(dispatch, data),
  setWeekNumber1: (data) => allActions.congesActions.setWeekNumber1(dispatch, data),
  setWeekNumber2: (data) => allActions.congesActions.setWeekNumber2(dispatch, data),
  setWeekDay1: (data) => allActions.congesActions.setWeekDay1(dispatch, data),
  setWeekDay2: (data) => allActions.congesActions.setWeekDay2(dispatch, data),

});

const CalendarSimple = (props) => {
  // constants from props :
  const {
    calendarReducer, languageReducer, showCalendar, setScrollWeek, setScrollWeekDay, setDate,
    setDaysInMonth, onPress,
    // month, year,
    conges, caseN,
    setDate1, setDate2, setWeekNumber1, setWeekDay1, setWeekNumber2, setWeekDay2,

  } = props;
  const lg = languageReducer.language;
  const dataPlanning = calendarReducer.allData;
  const dateConges = (d, m, y) => `${d} ${lg.planning.menuRight.months[m].slice(0, 3)}. ${y}`;
  const dateFromReducer = calendarReducer.date;
  const month = dateFromReducer.month();
  const year = dateFromReducer.year();

  // states :
  const [calendar, setCalendar] = useState([]);

  // titles for calendar
  const weekdayshortname = lg.planning.weekdaysShort.map((day) => (
    <Button
      buttonStyle={styles.weekDayName}
      titleStyle={styles.textLightHeader}
      key={`weekdayshortname${Math.random()}`}
      type="clear"
      title={day}
    />
  ));

  // background colors :
  const getBackground = (d) => {
    let color = '';
    const actualMoment = moment(`${year} ${month + 1} ${d}`, 'YYYY MM D');
    const dayOfWeek = actualMoment.day();
    if (dayOfWeek === 0) {
      color = colors.WhiteDark;
    }
    if (dayOfWeek !== 0 && dataPlanning[actualMoment.week()].data[dayOfWeek - 1].closed === true) {
      color = colors.WhiteDark;
    }
    if (d === moment().date() && month === moment().month() && year === moment().year()) {
      color = colors.mediumGreen;
    }
    return color;
  };

  // dots of statuses colors :
  const getDevisPoints = (d) => {
    const dayOfWeek = moment(`${year} ${month + 1} ${d}`, 'YYYY MM D').day();
    const points = [];
    let oneDay = [];
    if (dayOfWeek !== 0) {
      oneDay = dataPlanning[moment(`${year} ${month + 1} ${d}`, 'YYYY MM D').isoWeek()].data[dayOfWeek - 1].tickets;
      oneDay.forEach((ticket) => {
        ticket.quotes.forEach((quote) => {
          if (!points.includes(colors[quote.status])) {
            points.push(colors[quote.status]);
          }
        });
      });
    }
    return points;
  };

  // pretty month name for calendar :
  const currentMonth = moment(`${year} ${month + 1}`, 'YYYY MM');

  // the main function to build the calendar :
  const buildCalendar = (dateObject) => {
    const daysInMonth = [];
    const daysButtons = [];
    const startOfMonth = dateObject.startOf('month').format('d');
    const firstDayOfMonth = startOfMonth === '0' ? startOfMonth + 6 : startOfMonth - 1;
    for (let i = 0; i < firstDayOfMonth; i++) {
      if (firstDayOfMonth > 0) {
        const lastMonth = moment(currentMonth).subtract(1, 'months').daysInMonth() + 1 - firstDayOfMonth + i;
        daysButtons.push(
          <TouchableOpacity key={`dayLastMonth${Math.random()}`} style={styles.dayItem}>
            <Text style={[styles.textLight, styles.textLightFont]}>{lastMonth.toString()}</Text>
          </TouchableOpacity>,
        );
        daysInMonth.push(lastMonth);
      }
    }
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
      const actualMoment = moment(`${year} ${month + 1} ${d}`, 'YYYY MM DD');
      // const actualMoment = moment().year(year).month(month).date(d);
      const date = actualMoment.date();
      const sunday = actualMoment.day() === 0;
      const txt = sunday ? colors.lightGreyBlue : colors.dark;
      daysButtons.push(
        <View
          style={{
            width: Math.round((Dimensions.get('window').width - 20) / 7),
            height: Math.round((Dimensions.get('window').width - 20) / 7),
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          key={`day${d}`}
        >
          <View style={{
            width: 36,
            height: sunday && (d > 7 || d < 24) ? '100%' : 36,
            backgroundColor: sunday ? getBackground(d) : 'transparent',
            borderBottomLeftRadius: sunday && d < 24 ? 0 : 4,
            borderBottomRightRadius: sunday && d < 24 ? 0 : 4,
            borderTopLeftRadius: sunday && d > 7 ? 0 : 4,
            borderTopRightRadius: sunday && d > 7 ? 0 : 4,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          >
            <TouchableOpacity
              style={{
                height: 36,
                width: '100%',
                backgroundColor: sunday ? 'transparent' : getBackground(d),
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}
              onPress={() => {
                setDate(actualMoment);
                setScrollWeek(actualMoment.week());
                setScrollWeekDay(actualMoment.weekday());
                onPress();
                if (conges) {
                  if (caseN === 1) {
                    setDate1(dateConges(date, actualMoment.month(), actualMoment.year()));
                    setWeekDay1(actualMoment.weekday());
                    setWeekNumber1(actualMoment.week());
                  }
                  if (caseN === 2) {
                    setDate2(dateConges(date, actualMoment.month(), actualMoment.year()));
                    setWeekDay2(actualMoment.weekday());
                    setWeekNumber2(actualMoment.week());
                  }
                }
                showCalendar(false);
              }}
            >
              <Text style={{
                fontFamily: 'GothamMedium',
                fontSize: 16,
                color: d === moment().date() && month === moment().month()
              && year === moment().year() ? colors.white : txt,
              }}
              >
                {date.toString()}
              </Text>
            </TouchableOpacity>
            <View style={styles.points}>
              { sunday ? null : getDevisPoints(d).map((item) => (
                <View
                  style={{
                    backgroundColor: item,
                    marginLeft: 2,
                    width: 4,
                    height: 4,
                    borderRadius: 2,
                  }}
                  key={`devis${Math.random()}`}
                />
              ))}
            </View>
          </View>
        </View>,
      );
      daysInMonth.push(date);
    }
    const toFill = 42 - Number(firstDayOfMonth) - dateObject.daysInMonth() < 7 ? 42 : 35;
    for (let i = Number(firstDayOfMonth) + dateObject.daysInMonth(); i < toFill; i++) {
      daysButtons.push(
        <TouchableOpacity key={`dayNewMonth${Math.random()}`} style={styles.dayItem}>
          <Text style={[styles.textLight, styles.textLightFontB]}>
            {(i + 1 - Number(firstDayOfMonth) - dateObject.daysInMonth()).toString()}
          </Text>
        </TouchableOpacity>,
      );
      daysInMonth.push(i + 1 - Number(firstDayOfMonth) - dateObject.daysInMonth());
    }
    const rows = [];
    let cells = [];
    daysButtons.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === daysButtons.length - 1) {
        rows.push(cells);
      }
    });
    setCalendar(rows.map((d) => <View style={styles.cell} key={`row${Math.random()}`}>{d}</View>));
    setDaysInMonth(daysInMonth);
  };

  // call build calendar with correct input data :
  useEffect(() => {
    buildCalendar(moment(`${year} ${month + 1}`, 'YYYY M'));
  }, [month, year]);

  // ///
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setDate(dateFromReducer.subtract(1, 'months'))}
          style={styles.flash}
        >
          <Text style={styles.text}>{'<'}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>{`${lg.planning.menuRight.months[month]} ${year}`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setDate(dateFromReducer.add(1, 'months'))}
          style={styles.flash}
        >
          <Text style={[styles.text, styles.textR]}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.calendarOpener} onPress={() => showCalendar(false)}>
        <AntDesign name="up" size={12} color="gray" />
      </Text>
      <View style={styles.row}>
        {weekdayshortname}
      </View>
      <View style={styles.calendar}>
        {calendar}
      </View>
    </View>
  );
};

CalendarSimple.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  showCalendar: PropTypes.func.isRequired,
  setScrollWeek: PropTypes.func.isRequired,
  setScrollWeekDay: PropTypes.func.isRequired,
  setDaysInMonth: PropTypes.func.isRequired,
  onPress: PropTypes.func,
  month: PropTypes.number,
  year: PropTypes.number,
  conges: PropTypes.bool,
  caseN: PropTypes.number,
  setDate1: PropTypes.func,
  setDate2: PropTypes.func,
  setWeekNumber1: PropTypes.func,
  setWeekDay1: PropTypes.func,
  setWeekNumber2: PropTypes.func,
  setWeekDay2: PropTypes.func,
  setDate: PropTypes.func.isRequired,
};

CalendarSimple.defaultProps = {
  month: moment().month() + 1,
  year: moment().year(),
  onPress: () => {},
  setDate1: () => {},
  setDate2: () => {},
  setWeekNumber1: () => {},
  setWeekDay1: () => {},
  setWeekNumber2: () => {},
  setWeekDay2: () => {},
  conges: false,
  caseN: 1,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarSimple);
