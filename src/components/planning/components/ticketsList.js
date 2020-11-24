import {
  StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Devis from './oneTicket';
import colors from '../../../assets/css/style-colors';

const styles = StyleSheet.create({
  dayHeader: {
    color: colors.lightGreyBlue,
    paddingLeft: 12,
    paddingBottom: 10,
    fontFamily: 'GothamMedium',
    fontSize: 11,
  },
  ticket: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  ticketsList: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const TicketsList = ({
  oneDate, index, navigation, weekNumber, titleDate, lg,
}) => (
  <View style={styles.ticketsList}>
    {oneDate.tickets.length === 0 ? (
      <Text style={styles.dayHeader}>
        {`${lg.planning.weekdaysFull[index % 7]}, ${titleDate(index)} - ${lg.planning.closed}`}
      </Text>
    ) : (
      <Text style={styles.dayHeader}>
        {`${lg.planning.weekdaysFull[index % 7]}, ${titleDate(index)}`}
      </Text>
    )}
    {oneDate.tickets.sort((a, b) => (a.time > b.time ? 1 : -1)).map((ticket, i) => (
      <View key={`ticket_${i}`} style={styles.ticket}>
        <Devis
          data={ticket}
          dayIndex={index}
          weekIndex={weekNumber}
          ticketIndex={i}
          ticket={ticket}
          index={index}
          navigation={navigation}
        />
      </View>
    ))}
  </View>
);

TicketsList.propTypes = {
  oneDate: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  weekNumber: PropTypes.number.isRequired,
  titleDate: PropTypes.func.isRequired,
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TicketsList;
