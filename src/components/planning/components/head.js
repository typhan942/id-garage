import React, { useEffect, useRef } from 'react';
import { Dimensions, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OneWeek from './oneWeek';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDate: (data) => allActions.calendarActions.setDate(dispatch, data),
  setScrollIndex: (data) => allActions.calendarActions.setScrollIndex(dispatch, data),
});

const PlanningHead = (props) => {
  const {
    languageReducer, calendarReducer, weekNumber,
  } = props;
  const lg = languageReducer.language;
  const { allData } = calendarReducer;

  const flatListHorRef = useRef(null);
  const scrollTo = (i) => {
    flatListHorRef.current.scrollToIndex({ animated: true, index: i });
  };

  useEffect(() => {
    scrollTo(weekNumber);
  }, [weekNumber]);

  //
  return (
    <FlatList
      horizontal
      ref={flatListHorRef}
      contentContainerStyle={{ flexDirection: 'row' }}
      data={allData}
      initialScrollIndex={weekNumber}
      getItemLayout={(data, i) => ({
        length: Dimensions.get('window').width,
        offset: (Dimensions.get('window').width) * (i - 1),
        index: i,
      })}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => ((index + 1) % 7 === 0 || index > 73 ? <Text />
        : (
          <OneWeek weekData={item} week={index} lg={lg} />
        )
      )}
    />
  );
};

PlanningHead.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  weekNumber: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanningHead);
