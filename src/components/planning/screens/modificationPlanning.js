import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import {
  StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';
import MenuCircles from '../components/menuCircles';
import CheckBoxLarge from '../../../assets/generic-components/checkboxLarge';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
  },
  tickets: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  bigText: {
    fontSize: 13,
    fontFamily: 'GothamBook',
    color: colors.lightGreyBlue,
  },
  weekText: {
    fontSize: 13,
    fontFamily: 'GothamBook',
    color: colors.black,
  },
  leftCell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRightWidth: 2,
    borderRightColor: colors.veryPaleGrey,
    width: 130,
  },
  dayBox: {
    width: 29,
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageBox: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: colors.paleGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBoxContainer: {
    paddingRight: 15,
  },
  headerBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'GothamBold',
  },
  flash: {
    width: 50,
    height: '100%',
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDate: (data) => allActions.calendarActions.setDate(dispatch, data),
  setAllData: (data) => allActions.calendarActions.setAllData(dispatch, data),
  showCalendar: (data) => allActions.calendarActions.showCalendar(dispatch, data),
  setScrollIndex: (data) => allActions.calendarActions.setScrollIndex(dispatch, data),
  setDayWeek: (data) => allActions.planningActions.setDayWeek(dispatch, data),
});

const ModifPlanning = (props) => {
  const {
    navigation, calendarReducer, languageReducer, setAllData, setDate,
  } = props;
  const lg = languageReducer.language;
  const {
    allData, date, scrollDay, scrollWeekDay,
  } = calendarReducer;
  const weekNumber = date.week();

  function setHoursChange(w, d) {
    const toUpdate = allData;
    const hoursForUpdate = toUpdate[w].data[d].hours === 0
      ? allData[w].data[d].tickets.length : 0;
    toUpdate[w].data[d].hours = hoursForUpdate;
    setAllData(toUpdate);
  }

  const flatListRef = useRef(null);
  function scrollTo(i) {
    flatListRef.current.scrollToIndex({ animated: true, index: i });
  }

  useEffect(() => {
    scrollTo(scrollWeekDay);
  }, [scrollWeekDay]);

  //
  const getDay = (i) => moment().week(weekNumber).day(i + 1).format('D');
  //

  const Item = ({ item, index }) => {
    const closed = item.hours === 0;
    const hour = (x) => {
      const value = item.openingHours[x];
      return (value * 10) % 10 === 0 ? `${value}:00`
        : `${value.toString().slice(0, value < 10 ? 1 : 2)}:30`;
    };

    return (
      <>
        { index % 7 === 0 ? (
          <View style={styles.row}>
            <Text style={styles.weekText}>
              {`${lg.planning.week} ${weekNumber}`}
            </Text>
          </View>
        ) : null }
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 80,
          marginTop: 5,
          marginLeft: 15,
          marginRight: 15,
          backgroundColor: closed ? colors.paleGrey : colors.white,
        }}
        >
          <View style={styles.leftCell}>
            <CheckBoxLarge
              checked={item.hours !== 0}
              onPress={() => setHoursChange(weekNumber, index)}
            />
            <View style={styles.dayBox}>
              <Text style={{
                color: closed ? colors.lightGreyBlue : colors.mediumGreen,
                fontWeight: 'bold',
                fontSize: 12,
              }}
              >
                {lg.planning.weekdays[index % 7]}
              </Text>
              <Text style={{
                color: closed ? colors.lightGreyBlue : colors.mediumGreen,
                fontWeight: 'bold',
                fontSize: 16,
              }}
              >
                {getDay(index)}
              </Text>
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.bigText}>
              {`${lg.planning.hours} : ${item.hours}/${allData[weekNumber].hours}`}
            </Text>
            <Text style={styles.bigText}>{`${hour(0)} - ${hour(3)}`}</Text>
          </View>
          <View style={styles.imageBoxContainer}>
            <TouchableOpacity
              style={styles.imageBox}
              onPress={() => {
                setDate(moment().week(weekNumber).weekday(index));
                navigation.navigate('ModifHours');
              }}
            >
              <Feather name="edit" size={24} color="wallet" />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  Item.propTypes = {
    item: PropTypes.objectOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerBox}>
        <TouchableOpacity
          onPress={() => setDate(date.subtract(1, 'week'))}
          style={styles.flash}
        >
          <Text style={styles.text}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{`${lg.planning.menuRight.months[date.month()]} ${date.year()}`}</Text>
        <TouchableOpacity
          onPress={() => setDate(date.add(1, 'week'))}
          style={styles.flash}
        >
          <Text style={styles.text}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tickets}>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'column',
            width: Dimensions.get('window').width,
          }}
          data={allData[weekNumber].data}
          initialScrollIndex={scrollDay}
          onScrollToIndexFailed={() => {}}
          renderItem={({ item, index }) => <Item item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          ref={flatListRef}
        />
      </View>
      <MenuCircles navigation={navigation} />
    </View>
  );
};

ModifPlanning.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  setAllData: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifPlanning);
