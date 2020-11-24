import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import moment from 'moment';
import colors from '../../../assets/css/style-colors';
import TicketsList from '../components/ticketsList';
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
    backgroundColor: colors.veryPaleGrey,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.white,
  },
  boxText: {
    fontSize: 11,
    color: colors.white,
    fontFamily: 'GothamBook',
    textAlign: 'center',
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 4,
  },
  textItem: {
    fontSize: 13,
    fontFamily: 'GothamMedium',
  },
  viewStatus: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: 10,
    fontFamily: 'GothamBook',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FilteredRDV = (props) => {
  const {
    languageReducer, planningReducer, calendarReducer, navigation, setCurrentStatus,
  } = props;
  const { statuses } = planningReducer;
  const lg = languageReducer.language;
  const { status, items } = planningReducer.currentStatus;
  const { allData, date } = calendarReducer;
  const weekNumber = date.week();
  const titleDate = (i) => moment().week(weekNumber).weekday(i + 1).format('D MMMM');

  function getStatusItems(s) {
    const dataByStatus = [];
    const today = moment().weekday();
    const start = moment().week() === weekNumber ? today : 0;
    for (let j = start; j < 6; j++) {
      const ticketsByStatus = [];
      allData[weekNumber].data[j].tickets.map((ticket) => {
        ticket.quotes.map((quote) => {
          if (quote.status === s) { ticketsByStatus.push(ticket); }
          return ticketsByStatus;
        });
        return true;
      });
      if (ticketsByStatus.length > 0) {
        dataByStatus.push({
          weekNumber,
          dayNumber: j,
          day: moment().week(weekNumber).day(j + 1).format('D MMMM'),
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
      <View style={styles.row}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            overflow: 'hidden',
          }}
          data={['valid', 'problems', 'toValidate', 'canceled']}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.headerText,
                { borderBottomColor: status === item ? colors[item] : 'transparent' }]}
              onPress={() => handleFilter(item)}
            >
              <Text style={[styles.textItem,
                { color: status === item ? colors[item] : colors.dark }]}
              >
                {lg.planningHeader[item]}
              </Text>
              <View style={[styles.viewStatus,
                { backgroundColor: status === item ? colors[item] : colors.dark }]}
              >
                <Text style={styles.boxText}>
                  {statuses[item]}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.tickets}>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'column',
            width: Dimensions.get('window').width,
            paddingBottom: 150,
          }}
          data={items}
          renderItem={({ item, index }) => (
            <TicketsList
              oneDate={item}
              index={index}
              navigation={navigation}
              weekNumber={weekNumber}
              titleDate={titleDate}
              lg={lg}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

FilteredRDV.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  planningReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setCurrentStatus: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredRDV);
