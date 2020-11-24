import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import moment from 'moment';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentStatus: (data) => allActions.planningActions.setCurrentStatus(dispatch, data),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: colors.white,
  },
  row: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.paleGrey,
    width: '100%',
  },
  boxText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'GothamMedium',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 3,
  },
  texts: {
    color: colors.slateGrey,
    fontFamily: 'GothamMedium',
    fontSize: 14,
  },
  textStatus: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'GothamMedium',
    fontSize: 14,
  },
});

const FilterRDV = (props) => {
  const {
    calendarReducer, languageReducer, planningReducer, setCurrentStatus, navigation,
  } = props;
  const lg = languageReducer.language;
  const { statuses } = planningReducer;

  const { allData, date } = calendarReducer;

  function getStatusItems(status) {
    const dataByStatus = [];
    const i = date.week();
    const today = moment().weekday();
    const start = moment().week() === i ? today : 0;
    for (let j = start; j < 6; j++) {
      const ticketsByStatus = [];
      allData[i].data[j].tickets.forEach((ticket) => {
        ticket.quotes.forEach((quote) => {
          if (quote.status === status) { ticketsByStatus.push(ticket); }
          return ticketsByStatus;
        });
      });
      if (ticketsByStatus.length > 0) {
        dataByStatus.push({
          weekNumber: i,
          dayNumber: j,
          day: moment().week(i).day(j + 1).format('D MMMM'),
          tickets: ticketsByStatus,
        });
      }
    }
    return dataByStatus;
  }

  function handleFilter(item) {
    getStatusItems(item);
    setCurrentStatus({
      header: lg.planningHeader[item],
      status: item,
      items: getStatusItems(item),
    });
    navigation.navigate('FilteredRDV');
  }

  return (
    <View style={styles.container}>
      {
        ['valid', 'problems', 'toValidate', 'canceled'].map((item, i) => (
          <TouchableOpacity onPress={() => handleFilter(item)} style={styles.row} key={i}>
            <Text style={styles.texts}>
              {lg.planningHeader[item]}
            </Text>
            <View style={[styles.textStatus, { backgroundColor: colors[item] }]}>
              <Text style={styles.boxText}>
                {statuses[item]}
              </Text>
            </View>
          </TouchableOpacity>
        ))
      }
    </View>
  );
};

FilterRDV.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  planningReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setCurrentStatus: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRDV);
