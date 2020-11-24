import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import allActions from '../../../redux/actions';
import SelectYearMonth from '../../../assets/generic-components/yearMonthSelect';

const mapStateToProps = ({ statisticsReducer, languageReducer }) => ({
  statisticsReducer,
  lg: languageReducer.language,
});

const mapDispatchToProps = (dispatch) => ({
  setYears: (date) => allActions.statisticActions.setYears(dispatch, date),
  setMonth: (string) => allActions.statisticActions.setMonth(dispatch, string),
});

const Period = ({
  lg, setYears, setMonth,
}) => (
  <SelectYearMonth lg={lg} setMonth={  setMonth} setYear={ setYears} />
);

Period.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  setYears: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Period);
