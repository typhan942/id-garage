import React from 'react';
import {
  StyleSheet, Text, View, Dimensions, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../assets/css/style-colors';
import allActions from '../../redux/actions';
import MenuCircles from './components/menuCircles';
import CalendarSimple from '../../assets/generic-components/calendarSimple';
import PlanningBody from './components/body';
import PlanningHead from './components/head';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  calendarOpener: {
    width: Dimensions.get('window').width,
    height: 20,
    alignItems: 'center',
    backgroundColor: colors.white,
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
  tickets: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 80,
    backgroundColor: colors.white,
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  showCalendar: (data) => allActions.calendarActions.showCalendar(dispatch, data),
});

const Planning = (props) => {
  const {
    navigation, calendarReducer, showCalendar,
  } = props;
  const {
    allData, calendarOpened, date,
  } = calendarReducer;

  return (
    <View style={styles.root}>
      {calendarOpened && (
      <>
        <View style={styles.background} onPress={() => showCalendar(false)} />
        <View style={styles.calendarView}>
          <CalendarSimple />
        </View>
      </>
      )}
      {calendarOpened ? (
        <TouchableOpacity
          style={styles.calendarOpener}
          onPress={() => {
            showCalendar(!calendarOpened);
          }}
        >
          <Text>
            <AntDesign name="up" size={12} color="gray" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => showCalendar(!calendarOpened)}
          style={styles.calendarOpener}
        >
          <Text>
            <AntDesign name="down" size={12} color="gray" />
          </Text>
        </TouchableOpacity>
      ) }
      <View style={styles.row}>
        <PlanningHead weekNumber={date.week()} />
      </View>

      <View style={styles.tickets}>
        <PlanningBody
          dataToSwipe={allData[date.week()].data}
          weekNumber={date.week()}
          navigation={navigation}
        />
      </View>
      <MenuCircles navigation={navigation} />
    </View>
  );
};

Planning.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  showCalendar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Planning);
