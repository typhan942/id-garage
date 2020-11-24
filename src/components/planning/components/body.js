import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import {
  Dimensions, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicketsList from './ticketsList';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const PlanningBody = (props) => {
  const {
    languageReducer, navigation, calendarReducer, weekNumber, dataToSwipe,
  } = props;
  const lg = languageReducer.language;
  const scrollToDayOfWeek = calendarReducer.scrollWeekDay;
  const titleDate = (i) => moment().week(weekNumber).day(i + 1).format('D MMMM');
  const flatListRef = useRef(null);
  const scrollTo = (i) => {
    flatListRef.current.scrollToIndex({ animated: true, index: i });
  };

  useEffect(() => {
    scrollTo(scrollToDayOfWeek);
  }, [scrollToDayOfWeek]);

  return (
    <FlatList
      contentContainerStyle={{
        paddingBottom: 300,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
      }}
      data={dataToSwipe}
      initialScrollIndex={scrollToDayOfWeek}
      onScrollToIndexFailed={(e) => e}
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
      ref={flatListRef}
    />
  );
};

PlanningBody.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  dataToSwipe: PropTypes.arrayOf(PropTypes.any).isRequired,
  weekNumber: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanningBody);
